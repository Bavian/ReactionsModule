;function ReactionsModule(selector, server, settings) {
	"use strict"

	document.addEventListener("DOMContentLoaded", function() {

		document.querySelectorAll(selector).forEach(function(htmlElement) {
			addTo(htmlElement);
		});

	});

	function addTo(htmlElement) {

		var standartSettings = {
			label: "How do you like this article?",
			reactions: [
				{
					name: "like",
					content: "&#128077"
				},
				{
					name: "dislike",
					content: "&#128078"
				}
			]
		};

		var container, computedStyles, computedContent;
		elementsInit();
		stylesInit();
		contentInit();
		eventsInit();
		htmlElement.appendChild(container.element);

		function elementsInit() {

			container = {
				element: document.createElement("div"),
				childs: function() {
					var res = [];
				
					res.push({
						element: document.createElement("div")
					});

					var length = ((settings || standartSettings).reactions || standartSettings.reactions).length;
					for (let i = 0; i < length; i++) {
						res.push({
							element: document.createElement("div")
						});
					}
					return res;
				}()
			};

			for (let i = 0; i < container.childs.length; i++) {
				container.element.appendChild(container.childs[i].element);
			}

		}
	
		function stylesInit() {
			computedStyles = stylesComputer();

			stylesSetter(computedStyles.container, container.element.style);
			stylesSetter(computedStyles.label, container.childs[0].element.style);

			for (let i = 1; i < container.childs.length; i++) {
				stylesSetter(computedStyles.reactions, container.childs[i].element.style);
			}

		}

		function stylesComputer() {

			if ( !(settings && settings.stylesGetter) ) {
				return standartStylesGetter();
			}

			var userStyles = settings.stylesGetter ? settings.stylesGetter() : {};
			var standartStyles = standartStylesGetter();
			var res = {};
		
			for (let style in standartStyles) {
				res[style] = userStyles[style] || standartStyles[style];
			}

			return res;
		}

		function standartStylesGetter() {

			var screenWidth = document.documentElement.clientWidth;

			return {
				container: {
					textAlign: screenWidth < 450 ? "right" : "center",
					marginTop: "10px",
					whiteSpace: "nowrap"
				},
				label: {
					color: "grey",
					display: screenWidth < 450 ? "none" : "inline-block",
					maxWidth: "50%",
					whiteSpace: "normal",
					verticalAlign: "middle"
				},
				reactions: {
					display: "inline-block",
					verticalAlign: "middle",
					textAlign: "center",
					whiteSpace: "nowrap",
					width: "55px",
					height: "55px",
					lineHeight: "55px",
					margin: "0 0 0 30px",
					borderRadius: "50%",
					border: "1px solid grey",
					cursor: "pointer"
				},
				reactionsHover: {
					boxShadow: "0 0 2px 2px yellow"
				},
				reactionsActive: {
					backgroundColor: "yellow"
				}
			};

		}

		function stylesSetter(from, to) {

			for (let style in from) {
				to[style] = from[style];
			}

		}

		function stylesResetter(from, to, previous) {

			for (let style in from) {
				to[style] = previous[style] ? previous[style] : "";
			}

		}

		function contentInit() {
			computedContent = contentComputer();

			container.childs[0].element.innerHTML = computedContent.label;

			updateReactions(function(){return server.get()});
		}

		function contentComputer() {

			if (!settings) {
				return standartSettings;
			}

			var res = {};
			for (let setting in standartSettings) {
				res[setting] = settings[setting] || standartSettings[setting];
			}

			return res;
		}

		function updateReactions(getter) {
			var counts = getter();
			for (let i = 0; i < computedContent.reactions.length; i++) {

				container.childs[i + 1].element.innerHTML = computedContent.reactions[i].content
					+ " " + counts[i].count;

				if (counts[i].userReaction) {
					stylesSetter(computedStyles.reactionsActive, container.childs[i + 1].element.style);
				} else {
					stylesResetter(computedStyles.reactionsActive, container.childs[i + 1].element.style, computedStyles.reactions);
				}

			}
		}

		function eventsInit() {
		
			for (let i = 1; i < container.childs.length; i++) {
			
				container.childs[i].element.addEventListener("mouseover", function() {
					stylesSetter(computedStyles.reactionsHover, container.childs[i].element.style);
				});

				container.childs[i].element.addEventListener("mouseleave", function() {
					stylesResetter(computedStyles.reactionsHover, container.childs[i].element.style, computedStyles.reactions);
				});

				container.childs[i].element.addEventListener("click", function() {
					updateReactions(function(){
						return server.vote(computedContent.reactions[i - 1].name);
					});
				});

			}

			window.addEventListener("resize", stylesInit);

		}

	};
	
}

