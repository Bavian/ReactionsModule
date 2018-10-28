/**
 * Creates an instance of ReactionsBlock
 * 
 * @author: Bavian
 * @this {ReactionBlock}
 * @param {Object} userAPI - object with methods getEmojies(), get() and set(ind) that allow to get and give information
 * @param {HTML Element} container - container of the ReactionBlock
 */
module.exports = function(userAPI, container) {

	let htmlElement = document.createElement('div');

	htmlElement.classList.add('reactions-block');

	let Label = require('./__label/reactions-block__label.js');
	this.label = new Label('How do you like this article', htmlElement);

	let ReactionsContainer = require('./__reaction-container/reactions-block__reaction-container.js');
	let reactionContainers = [];

	let emojis = userAPI.getEmojis();

	for (let i = 0; i < emojis.length; i++) {

		reactionContainers[i] = new ReactionsContainer(emojis[i], 0, htmlElement, getOnButtonClickFunction(i));
		
		/**
		 * Creates a function that updates Counters and gives the message about number of selected reaction
		 *
		 * @param {number} ind - number of the selected reaction
		 */
		function getOnButtonClickFunction(ind) {
			
			return function() {
				updateReactions(ind);
			}

		}
	}

	updateReactions();

	container.appendChild(htmlElement);

	/**
	 * Updates the Values of the Counters
	 *
	 * @param {number} ind - the number of reaction selected by a user, if ind is undefined the function updates the Counters.
	 */
	function updateReactions(ind) {
		
		let values = ind !== undefined ? userAPI.set(ind) : userAPI.get();

		for (let i = 0; i < values.length; i++) {
			
			reactionContainers[i].changeCounter(values[i].count);
			
			if (values[i].reaction) {
				reactionContainers[i].enableButton();
			} else {
				reactionContainers[i].disableButton();
			}

		}

	}

}
