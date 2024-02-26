import React from 'react'

let loadingGif = require("../assets/finger_cat.gif")

const formatDate = (dateString) => {
    const options = { day: 'numeric', month: 'short' };
    const date = new Date(dateString);
    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
    
    const day = date.getDate();
    const suffix = day === 1 ? 'st' : day === 2 ? 'nd' : day === 3 ? 'rd' : 'th';
  
    return `${formattedDate}${suffix}`;
};

const Weee = () => {
    const temp = localStorage.getItem('date').toString();
    const result = formatDate(temp);
  return (
    <div><h1>See ya on {result} 😘😘😘</h1>
    <img style={{ width: 200, height: 300}} src={loadingGif} alt="my-gif" />
    <p>ok you can exit the browser now!!</p>
    </div>
  )
}

export default Weee