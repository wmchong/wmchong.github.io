import React from 'react'
import { useNavigate  } from 'react-router-dom'
//import myGif from './begging_cat.gif';

const input_name_here = 'WOI'

const Accept = () => {

  let pic = require("../assets/pep.jpeg")
  let loadingGif = require("../assets/begging_cat.gif")
  const navigate = useNavigate();
  const goToCalendar = () => navigate("Calendar");
  return (
    <div>
        <h1>Hello Miss {input_name_here} <img src={pic} alt="my-gif" /></h1>
        <h2>Would you like to be my valentines? 😊</h2>
        <img src={loadingGif} alt="my-gif" />
        <button>No</button> <button onClick={goToCalendar}>Yes</button>
    </div>
  )
}

export default Accept