import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/Register.css'
const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    phone: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', formData);
      if (response && response.data) {
        console.log('Registration successful:', response.data);
        navigate('/login');
      } else {
        console.error('Registration error: Response data undefined or empty');
       
      }
    } catch (error) {
      console.error('Registration error:', error); 
      if (error.response) {
        console.error('Response data:', error.response.data); 
      }
      
    }
  };

  return (
    <div className="registration-container">
    <div className="registration-image">
      <img src="https://videoigniter.com/wp-content/uploads/2022/10/Working-with-your-animation-studio-to-create-a-custom-animated-video.png" alt="Registration" />
    </div>
    <div className="registration-form">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
        <input type="text" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
        <button type="submit">Register</button>
      </form>
    </div>
  </div>
  
  );
};

export default Register;
