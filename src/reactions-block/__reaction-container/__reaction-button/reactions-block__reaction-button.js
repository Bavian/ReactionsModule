/**
 * Creates an instance of Button
 * 
 * @contructor
 * @author: Bavian
 * @this {Button}
 * @param {string} value - emoji for the Button
 * @param {HTML element} container - container for the Button
 * @param {function} onClick - function called by the Button click
 */
export default function Button(value, container, onClick) {

	let htmlElement = document.createElement('div');

	htmlElement.textContent = value;
	htmlElement.classList.add('reactions-block__reaction-button');
	container.appendChild(htmlElement);

	htmlElement.addEventListener('click', onClick);

	/** Enables the Button */
	this.enable = function() {
		htmlElement.classList.add('reactions-block__reaction-button--active');
	}

	/** Disables the Button */
	this.disable = function() {
		htmlElement.classList.remove('reactions-block__reaction-button--active');
	}
	
}

