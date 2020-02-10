import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import electroScrew from '../../assets/icons/Product/electroscrew.svg';
import grinder from '../../assets/icons/Product/grinder.svg';
import hammerDrill from '../../assets/icons/Product/hammerDrill.svg';
import woodCutting from '../../assets/icons/Product/woodCutting.svg';

import choose from '../../assets/icons/Returns/choose.svg';
import flag from '../../assets/icons/Returns/flag.svg';
import hourglass from '../../assets/icons/Returns/hourglass.svg';
import refresh from '../../assets/icons/Returns/refresh.svg';

import man from '../../assets/icons/User/man.svg';
import truck from '../../assets/icons/User/truck.svg';
import worker from '../../assets/icons/User/worker.svg';
import workTeam from '../../assets/icons/User/workTeam.svg';

import * as styles from './Card.module.css';


function scrollLeft(element, change, duration) {
  var start = element.scrollLeft,
      currentTime = 0,
      increment = 20;

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

const returns = [flag, hourglass, refresh, choose];
const Product = [grinder, woodCutting, electroScrew, hammerDrill];
const user = [worker, man, truck, workTeam];

class card extends React.Component {
   
  render () {
    const leftButton = styles.button + " " + styles.left;
    const rightButton = styles.button + " " + styles.right;
    let icons = null;
    switch(this.props.title) {
      case 'returns' : 
        icons = [flag, hourglass, refresh, choose];
        break;
      case 'product' :
        icons = [grinder, woodCutting, electroScrew, hammerDrill];
        break;
      case 'user' : 
        icons = [worker, man, truck, workTeam];
        break;
      default : 
        icons = [flag, hourglass, refresh, choose];
    }
    return(
      <div className={styles.card}>
        <button className={leftButton} onClick={() => {scrollLeft(document.getElementById('content'), -300, 1000)}}>
            <FontAwesomeIcon className={styles.icon} icon="chevron-left"/>    
        </button>
        <div className={styles.center} id="content">
            <div className={styles.internal}>
              <div className={`${styles.circle} ${styles.colorDark}`}>
                  <img src={icons[0]} alt='' />
              </div>
              <div>

              </div>
            </div>
            <div className={styles.internal}>
              <div className={`${styles.circle} ${styles.colorOrange}`}>
              <img src={icons[1]} alt='' />
              </div>
              <div>
                
              </div>
            </div>
            <div className={styles.internal}>
            <div className={`${styles.circle} ${styles.colorBlue}`}>
            <img src={icons[2]} alt='' />
            </div>
            <div>

            </div>
            </div>
            <div className={styles.internal}>
            <div className={`${styles.circle} ${styles.colorGreen}`}>
                <img src={icons[3]} alt='' />
            </div>
            <div>

            </div>
            </div>
        </div>
        <div className={rightButton} onClick={() => {scrollLeft(document.getElementById('content'), 300, 1000)}}>
          <FontAwesomeIcon className={styles.icon} icon="chevron-right"/>    
        </div>
    </div>
    )  
  }
}
export default card;