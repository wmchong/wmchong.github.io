import React, { useState } from 'react';
import { useNavigate  } from 'react-router-dom'

const input_name_here = 'WOI'

const Accept = () => {

  let pic = require("../assets/pep.jpeg")
  let loadingGif = require("../assets/begging_cat.gif")
  const navigate = useNavigate();
  const goToCalendar = () => {
    alert('YIPPPEEEE!!!');
    navigate("Calendar");
  }

  const [buttonDisabled, setButtonDisabled] = useState(false);
  const handleClick = () => {
    // Show a message using the browser's alert
    alert('Hello??? why you click no!!! 😭, MUHAHAHA i have disabled the button');

    // Hide the button
    setButtonDisabled(true);
  };

  const buttonStyle = {
    marginRight: '10px', // Add right margin to create spacing between buttons
  };


  return (
    <div>
        <h1>Hello Miss {input_name_here}</h1>
        <img src={pic} alt="my-gif" />
        <h2>Would you like to be my valentines? 😊</h2>
        <img src={loadingGif} alt="my-gif" />
        <p></p>
        <button style={buttonStyle} onClick={handleClick} disabled={buttonDisabled}>No</button> 
        <button style={buttonStyle} onClick={goToCalendar}>Yes</button>
    </div>
  )
}

export default Accept