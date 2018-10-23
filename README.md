# Reactions Module

Module allows to insert reactions button with emojis and helps to get feedback from visitors.

## How to use

To insert ReactionsModule in your page call function ReactionModule with 3 parameters.

1. String that contains css selector for your articles.
1. Object that contains methods for getting data.
	1. Method "get" returns array of objects with "count" and "userReaction" parameters. "count" is rate of this reaction. "userReaction" is personal selection.
	1. Method "vote" recieves the name of the reaction selected by a user.
1. Object that contains these parameters:
	1. "label" - string that contains message for users
	1. "reactions" - array of objects that contains "name" and "content" parameters.
		1. "name" - string, the name of the reaction for "vote" method.
		1. "content" - string, content of the reaction button.
	1. "stylesGetter" - function, that returns the object which contains these parameters:
		1. "container" - styles for the element which contains all module.
		1. "label" - styles for the label.
		1. "reactions" - styles for each reaction button.
		1. reactionHover - styles for each reaction button when the pointer is on it.
		1. reactionActive - styles for the selected reaction button

The third object is unneccesery. If some parameter is undefined, the script uses standart settings for that.

## Standart settings

Standart reactions are "like" and "dislike"

Standart styles object:
```javascript
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

