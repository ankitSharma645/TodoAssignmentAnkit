import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  const token = localStorage.getItem('token');
  const username = localStorage.getItem('username');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    navigate('/login'); // Redirect to login page after logout
  };

  return (
    <header className="header">
      <div className="logo-container">
        <img src="https://cdn0.iconfinder.com/data/icons/illustricon-tech-iv/512/todo-1024.png" alt="Todo List Logo" className="logo" />
        <h1>TaskOnTrack</h1>
      </div>
      <nav className="nav-links">
        <a href="#add-items">Add Items</a>
        <a href="#todo-list">Todo List</a>
        {!token ? (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        ) : (
          <>
            <span className='span1'>Welcome, {username}</span>
            <button onClick={handleLogout}>Logout</button>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
