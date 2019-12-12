import React, {useState, useEffect} from 'react';
import './Timer.css';
import Link from '../Link';

function Timer() {
  const [counter, setCounter] = useState(5);

  function launchTimer() {
    if (counter >= 1) {
      const timer = setTimeout(() => {
        setCounter(counter - 1);
      }, 1000);
      // clean the effect if the component is unmounted
      // timer is a closure on current setTimeout value
      return function cleanup() {
        clearTimeout(timer);
      }
    };
  };

  useEffect(launchTimer);

  return (
    <div className="timer__container">
      <div> this is the timer: {counter} </div>
      <Link to="/"> Watch </Link>
    </div>
  );
}

export default Timer;