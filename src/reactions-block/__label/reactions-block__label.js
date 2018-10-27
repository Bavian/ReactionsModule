/**
 * Creates an instance of Label
 *
 * @constructor
 * @author: Bavian
 * @this {Label}
 * @param {string} value - value of the Label
 * @param {HTML element} container - container for the Label
 */
module.exports = function(value, container) {
	
	let htmlElement = document.createElement('div');

	htmlElement.textContent = value;
	htmlElement.classList.add("reactions-block__label");
	container.appendChild(htmlElement);

}

