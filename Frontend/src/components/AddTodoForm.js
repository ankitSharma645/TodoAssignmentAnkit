import React, { useState } from 'react';
import axios from 'axios';
import '../styles/AddTodoForm.css'; // Import CSS for styling

const AddTodoForm = () => {
  const [itemName, setItemName] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/todo/add', { itemName, date, description });
      setItemName('');
      setDate('');
      setDescription('');
      window.location.reload(); // Reload page after adding item (consider other ways to handle this)
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };

  return (

    <>
    <div className='title1' id='add-items'>
    <h2>Add <span> Task Here</span> </h2>

    </div>
    <div className="add-todo-container">
       
      <div className="left-container">
        <img src="https://clipart-library.com/2023/working-in-office-clipart-xl.png" alt="Image" />
      </div>
      <div className="right-container">
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="itemName">Item Name:</label>
            <input type="text" id="itemName" value={itemName} onChange={e => setItemName(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="date">Date:</label>
            <input type="date" id="date" value={date} onChange={e => setDate(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <textarea id="description" value={description} onChange={e => setDescription(e.target.value)} required />
          </div>
          <button type="submit">Add Item</button>
        </form>
      </div>
    </div>
    
    </>
  );
};


export default AddTodoForm;
