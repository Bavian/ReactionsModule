import './index.less';

import ReactionsBlock from './reactions-block/reactions-block.js';

export {ReactionsBlock as ReactionsModule}


      let rm = new ReactionsBlock({
        reactions: [
          {
            count: 0,
            reaction: false
          },
          {
            count: 0,
            reaction: false
          }
        ],
        get: function() {
          return this.reactions;
        },
        set: function(ind) {
          this['reactions'][ind].reaction = !this['reactions'][ind].reaction;
          this['reactions'][ind].count = this['reactions'][ind].reaction ? 1 : 0;
        
          let i = ind? 0 : 1;
          this['reactions'][i].reaction = false;
          this['reactions'][i].count = 0;
          
          return this.reactions;
        },
        getEmojis: function() {
          return ['A', 'B'];
        }
      }, document.querySelector('.try1'));
