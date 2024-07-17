import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css'
const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate(); // Get the navigate function from React Router

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', formData);
      if (response && response.data){
        const { token, user } = response.data;
        localStorage.setItem('token', token); 
        localStorage.setItem('username', user.username); 
        navigate('/'); 
      } else {
        console.error('Login error: Response data undefined or empty');
        
      }
    } catch (error) {
      console.error('Login error:', error); 
      if (error.response) {
        console.error('Response data:', error.response.data); 
      }
      
    }
  };
  

  return (
    <div className="login-container">
  <div className="login-image">
    <img
      src="https://i.pinimg.com/originals/50/78/a0/5078a05eb1b6847d93383eaa4c0ed500.gif"
      alt="Login Image"
    />
  </div>
  <div className="login-form">
    <h2>Login</h2>
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        required
      />
      <button type="submit">Login</button>
    </form>
  </div>
</div>

  );
};

export default Login;
