var getServer = function() {
	return {
		like: {
			count: 0,
			userReaction: false
		},
		dislike: {
			count: 0,
			userReaction: false
		},
		neutral: {
			count: 0,
			userReaction: false
		},
		get: function() {
			var res = [];
			for (let el in this) {
				if (this[el].count !== undefined) {
					res.push(this[el]);
				}
			}
			return res;
		},
		vote: function(name){
			for (let el in this) {
				if (this[el].count !== undefined) {
					if (el == name) {
						this[el].userReaction = !this[el].userReaction;
						this[el].count += this[el].userReaction ? 1 : -1;
					} else {
						this[el].count -= this[el].userReaction;
						this[el].userReaction = false;
					}
				}
			}
			return this.get();
		}
	}
}

ReactionsModule(".try1", getServer());

ReactionsModule(".try2", getServer(), {
	label: "Как вы оцениваете эту статью, достопочтенный сэр?",
	reactions: [
		{
			name: "like",
			content: "L"
		}, {
			name: "dislike",
			content: "D"
		}, {
			name: "neutral",
			content: "N"
		}
	],
	stylesGetter: function() {
		return {
			reactions: {
				display: "inline-block",
				verticalAlign: "middle",
				textAlign: "center",
				whiteSpace: "nowrap",
				width: "55px",
				height: "55px",
				lineHeight: "55px",
				margin: "0 0 0 30px",
				border: "1px solid grey",
				cursor: "pointer"
			}
		}
	}
});

