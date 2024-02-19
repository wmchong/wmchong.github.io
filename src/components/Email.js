import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Email = () => {
  const [inputText, setInputText] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    // Save the input text (you can use context, Redux, or other state management)
    // For simplicity, we'll use localStorage in this example
    localStorage.setItem('inputText', inputText);
    // Navigate to the next page
    navigate('/Eat');
  };

  return (
    <form onSubmit={handleSubmit}>
    <label>
      <h1>Please enter your gmail :DDD</h1>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
    </label>
    <button type="submit">Ok Lets GOOO</button>
  </form>
  )
}

export default Email