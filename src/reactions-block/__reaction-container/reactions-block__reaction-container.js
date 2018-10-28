/**
 * Creates an instance of ReactionContainer
 * 
 * @contrusctor
 * @author: Bavian
 * @this {ReactionContainer}
 * @param {string} buttonValue - value of Button
 * @param {number} counterValue - value of Counter
 * @param {HTML element} container - container for ReactionContainer
 * @param {function} onButtonClick - function called by the Button click
 */
module.exports = function(buttonValue, counterValue, container, onButtonClick) {
	
	let htmlElement = document.createElement('div');

	htmlElement.classList.add('reactions-block__reaction-container');
	container.appendChild(htmlElement);

	let Button = require('./__reaction-button/reactions-block__reaction-button.js');
	let button = new Button(buttonValue, htmlElement, onButtonClick);

	let Counter = require('./__reaction-counter/reactions-block__reaction-counter.js');
	let counter = new Counter(counterValue, htmlElement);

	/**
	 * Changes the value of the Counter
	 * 
	 * @param {number} value - a new value of the Counter
	 */
	this.changeCounter = function(value) {
		counter.changeValue(value);
	}

	/**
	 * Enables the Button
	 */
	this.enableButton = function() {
		button.enable();
	}

	/**
	 * Disables the Button
	 */
	this.disableButton = function() {
		button.disable();
	}

}

