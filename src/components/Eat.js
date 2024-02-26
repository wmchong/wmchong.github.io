import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';

const Eat = () => {
  let loadingGif = require("../assets/noodle_hamster.gif")
  const navigate = useNavigate();
  const [selectedImages, setSelectedImages] = useState([]);

  const handleImageClick = (imageId) => {
    // Check if the image is already selected
    if (selectedImages.includes(imageId)) {
      // If selected, remove it from the array
      setSelectedImages(selectedImages.filter((id) => id !== imageId));
    } else {
      // If not selected, add it to the array
      setSelectedImages([...selectedImages, imageId]);
    }
  };
  var templateParams = {
    selectedDate: localStorage.getItem('date').toString(),
    selectedMeals: selectedImages.toString(),
  };
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send('service_fqf5dju', 'template_v3cjqr8', templateParams, {
        publicKey: 'zfHLB2kuEsfdswLt1',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save the input text (you can use context, Redux, or other state management)
    // For simplicity, we'll use localStorage in this example
    //localStorage.setItem('selectedImages', selectedImages);
    sendEmail(e);
    //send email to me

    alert('wah you can eat alot ah 🤣🤣🤣');
    // Navigate to the next page
    navigate('/Weee');
  };

  const images = [
    { id: 0, src: require('../assets/pasta.jpg'), detail: 'pasta'},
    { id: 1, src: require('../assets/burger.jpg'), detail: 'burger'},
    { id: 2, src: require('../assets/steak.jpg'), detail: 'steak' },
    { id: 3, src: require('../assets/sushi.jpg'), detail: 'sushi'},
    { id: 4, src: require('../assets/ramen.jpg'), detail: 'ramen'},
    { id: 5, src: require('../assets/taco.jpg'), detail: 'taco' },
    { id: 6, src: require('../assets/pizza.jpg'), detail: 'pizza' },
    { id: 7, src: require('../assets/bingsu.jpg'), detail: 'bingsu' },
    { id: 8, src: require('../assets/cake.jpg'), detail: 'cake' },
    { id: 9, src: require('../assets/icecream.jpg'), detail: 'icecream' },
    { id: 10, src: require('../assets/waffle.jpg'), detail: 'waffle' },
    { id: 11, src: require('../assets/me.jpg'), detail: 'u are so noti noti' },
    // Add more images as needed
  ];

  return (
    <div>
      <h1>What are we having ? 🤩</h1>
      <img style={{ width: 200, height: 200 }} src={loadingGif} alt="my-gif" />
      <p>(p.s. hamster is not a choice!)</p>
      <div>
      <h1>Meals and/or desserts</h1>
      <div className="image-container">
        {images.map((image) => (
          <img style={{ width: 200, height: 200 }}
            key={image.id}
            src={image.src}
            alt={`hello ${image.id}`}
            className={selectedImages.includes(image.id) ? 'selected' : ''}
            onClick={() => handleImageClick(image.id)}
          />
        ))}
      </div>
      <div>
        <h2>Selected meals</h2>
        <ul>
          {selectedImages.map((id) => (
            <li key={id}> {images[id].detail}</li>
          ))}
        </ul>
      </div>
    </div>

    <button onClick={handleSubmit}>Lets GOOOOOOO</button>
    </div>
  )
}

export default Eat