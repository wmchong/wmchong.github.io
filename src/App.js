import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import './App.css';

const App = () => {
  const [animateNo, setAnimateNo] = useState(false);
  const [animateYes, setAnimateYes] = useState(false);

  const [scaleFactor, setScaleFactor] = useState(1);

  const scaleAndOpacity = useSpring({
    //opacity: animateNo ? 1 : 1,
    transform: `scale(${animateNo ? scaleFactor : 1})`,
  });

  const springPropsYes = useSpring({
    opacity: animateYes ? 1 : 1,
    transform: animateYes ? 'scale(5)' : 'scale(1)',
  });

  const handleClickNo = () => {
    setAnimateNo(!animateNo);
    setScaleFactor(scaleFactor - 0.1);
  };

  const handleClickYes = () => {
    setAnimateYes(!animateYes);
    const delay = 2000; // 2 seconds in milliseconds
    setTimeout(() => {
      // Open a new tab with the YouTube video after the delay
      window.open('https://www.youtube.com/watch?v=3qgjbiRcfzs&ab_channel=PeppaPig-OfficialChannel', '_blank');
      // Replace 'VIDEO_ID' with the actual ID of the YouTube video you want to share
    }, delay);
  };

  return (
    <div className="app">
      <h1>Hello Ms. Shannon!!!</h1>
      <img
          src="/pep.jpeg"
          alt='MS SHANNON CHIA piggy i stole from her tiktok'
        />
      <h1>Will you be my Valentine?</h1>
      <animated.div style={{ ...scaleAndOpacity }} className="heart" onClick={handleClickNo}>
        No
      </animated.div>
      <animated.div style={springPropsYes} className="heart" onClick={handleClickYes}>
        <span role="img" aria-label="heart">
          Yes
        </span>
      </animated.div>
      <p className="message">Click the Yes to reveal the magic!</p>
    </div>
  );
};

export default App;
