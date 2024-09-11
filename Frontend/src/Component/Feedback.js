import React, { useState } from 'react';
import './Feedback.css';
 import { useNavigate } from 'react-router-dom'; 
import axios from 'axios'; 

function Feedback() {
  const [formData, setFormData] = useState({
    name: '',
    message: '',
    phoneNumber: '',
    city: '',
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


    try {
        
        await axios.post('http://localhost:8989/feedbacks/add', formData);
        alert('Thanks for your Feedback!');
         navigate('/'); // Redirect to homepage
        console.log(formData.data)
      } catch (error) {
        console.error('There was an error submitting the form!', error);
        alert('Failed to send feedback. Please try again later.');
      }
  };

  return (
    <div className="feedback-container">
    <form className="feedback-form" onSubmit={handleSubmit}>
      <h1>Feedback Form</h1>
      <label htmlFor="name">Name:</label>
      <input 
        type="text" 
        id="name" 
        name="name" 
        value={formData.name} 
        onChange={handleChange} 
        required 
      />

      <label htmlFor="message">Message:</label>
      <textarea 
        id="message" 
        name="message" 
        value={formData.message} 
        onChange={handleChange} 
        required 
      />

      <label htmlFor="phone">Phone Number:</label>
      <input 
        type="tel" 
        id="phone" 
        name="phoneNumber" 
        value={formData.phone} 
        onChange={handleChange} 
        required 
      />

      <label htmlFor="city">City:</label>
      <input 
        type="text" 
        id="city" 
        name="city" 
        value={formData.city} 
        onChange={handleChange} 
        required 
      />

      <button type="submit">Send Feedback</button>
    </form>
  </div>
  );
}

export default Feedback;
