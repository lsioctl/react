import React, { useEffect, useState } from 'react';
import Link from '../Link';
import './Watch.css';

function Watch() {

  const [now, setnow] = useState(new Date());

  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  const secondHandStyleTransform = {
    transform: `rotate(${secondsDegrees}deg)`
  };

  const mins = now.getMinutes();
  const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
  const minHandStyleTransform = {
    transform: `rotate(${minsDegrees}deg)`
  };

  const hours = now.getHours();
  const hourDegrees = ((hours / 12) * 360) + ((mins/60)*30) + 90;
  const hourHandStyleTransform = {
    transform: `rotate(${hourDegrees}deg)`
  };

  function setDate() {
    setnow(new Date());
  }

  function dateEffect() {
    const timer = setTimeout(setDate, 1000);
    return function cleanup() {
      clearTimeout(timer);
    }
  }

  useEffect(dateEffect);
  
  return (
    <div className="watch__container">
    <div className="watch">
      <div className="watch__face">
        <div 
          className="watch__face__hand"
          style={secondHandStyleTransform}>
        </div>
        <div 
          className="watch__face__hand"
          style={minHandStyleTransform}>
        </div>
        <div 
          className="watch__face__hand"
          style={hourHandStyleTransform}>
        </div>
      </div>
    </div>
    <div className="watch__footer">
      Now is: {now.toLocaleDateString()} {hours}:{mins}:{seconds}
    </div>
    <Link to="/timer"> Timer </Link>
    </div>
  );
}

export default Watch;