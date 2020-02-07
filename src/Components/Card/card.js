import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import * as styles from './Card.module.css';

function scrollLeft(element, change, duration) {
  var start = element.scrollLeft,
      currentTime = 0,
      increment = 20;
      
      console.log(start)
      
  var animateScroll = function(){        
      currentTime += increment;
      var val = Math.easeInOutQuad(currentTime, start, change, duration);
      element.scrollLeft = val;
      if(currentTime < duration) {
          setTimeout(animateScroll, increment);
      }
  };
  animateScroll();
}

//t = current time
//b = start value
//c = change in value
//d = duration
Math.easeInOutQuad = function (t, b, c, d) {
t /= d/2;
if (t < 1) return c/2*t*t + b;
t--;
return -c/2 * (t*(t-2) - 1) + b;
};

class card extends React.Component {

  componentDidMount() {
    const leftButton = this.refs.left;
    const rightButton = this.refs.right;

    // leftButton.onclick = function () {
    //   scrollLeft(document.getElementById('content'), -300, 1000);   
    // }
  }

  render () {
    return(
      <div className={styles.card}>
        <div className={styles.left}>
            <FontAwesomeIcon className={styles.icon} icon="chevron-left" onClick={() => {scrollLeft(document.getElementById('content'), -300, 1000)}}/>    
        </div>
        <div className={styles.center} id="content">
            <div className={styles.internal}>
              div1
            </div>
            <div className={styles.internal}>
              div 2
            </div>
            <div className={styles.internal}>
              div 3
            </div>
            <div className={styles.internal}>
              div 4
            </div>
            <div className={styles.internal}>
              div 4
            </div>
            <div className={styles.internal}>
              div 4
            </div>
        </div>
        <div className={styles.right}>
          <FontAwesomeIcon className={styles.icon} icon="chevron-right" onClick={() => {scrollLeft(document.getElementById('content'), 300, 1000)}}/>    
        </div>
    </div>
    )  
  }
}
export default card;