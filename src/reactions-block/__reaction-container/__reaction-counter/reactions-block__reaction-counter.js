/**
 * Creates of instance of Counter
 * 
 * @constructor
 * @author: Bavian
 * @this {Counter}
 * @param {number} value - value of the Counter
 * @param {HTML element} container - container for the Counter
 */
export default function Counter(value, container) {
	
	let htmlElement = document.createElement('div');

	htmlElement.textContent = value;
	htmlElement.classList.add('reactions-block__reaction-counter');

	container.appendChild(htmlElement);

	/**
	 * Changes value of counter
	 * 
	 * @this {Counter}
	 * @param {number} value - new value of the Counter
	 */
	this.changeValue = function(value) {
		htmlElement.textContent = value;
	}

}

