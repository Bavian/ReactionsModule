# Reactions Module

Module allows to insert reactions buttons with emojis and helps to get feedback from visitors.

## How to use

To insert ReactionsModule in your page call function ReactionsModule with 2 parameters.

1. Object with methods:
	1. Method "get" returns array of objects with "count" and "reaction" parameters. "count" is rate of this reaction. "reaction" is personal selection(selected by the user - true)
	1. Method "set" recieves the index of the reaction selected by the user and returns the value of the method get
	1. Method "getEmojis" - return array of string contains code of the emoji.
1. HTML element - container for the ReactionBlock

