import Label from './__label/reactions-block__label.js';
import ReactionContainer from './__reaction-container/reactions-block__reaction-container.js';

/**
 * Creates an instance of ReactionsBlock
 * 
 * @author: Bavian
 * @this {ReactionsBlock}
 * @param {Object} userAPI - object with methods getEmojies(), get() and set(ind) that allow to get and give information
 * @param {HTML Element} container - container of the ReactionBlock
 */
export default function ReactionsBlock(userAPI, container) {

  const standartLabelValue = 'How do you like this article?';

  let htmlElement = document.createElement('div');

  htmlElement.classList.add('reactions-block');

  const labelValue = userAPI.getLabelValue !== undefined ? userAPI.getLabelValue() : standartLabelValue;
  this.label = new Label(labelValue, htmlElement);

  let reactionContainers = [];

  let emojis = userAPI.getEmojis();

  for (let i = 0; i < emojis.length; i++) {

    reactionContainers[i] = new ReactionContainer(emojis[i], 0, htmlElement, getOnButtonClickFunction(i));
    
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
