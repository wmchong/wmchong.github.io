import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Calendar = () => {
  const [date, setDate]=useState();
  console.log("Date", date);
  const navigate = useNavigate();
  
  let loadingGif = require("../assets/typing_cat.gif")

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('date', date);
    // Navigate to the next page
    navigate('/Eat');
  };

  return (
    <form onSubmit={handleSubmit}>
    <label>
      <h1>Please select the date you are free!</h1>
      <img src={loadingGif} alt="my-gif" />
      {/* <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      /> */}
    </label>
    <div>
      <p>Selected Date : {date}</p>
      <input type="date" onChange={(e) => setDate(e.target.value)} />
    </div>
    <p></p>
    <button type="submit">OK confirm free on this date!</button>
  </form>
  )
}

export default Calendar