import React, { useState } from 'react';
import axios from 'axios';

const EditTodoForm = ({ item, fetchItems }) => {
  const [itemName, setItemName] = useState(item.itemName);
  const [date, setDate] = useState(item.date);
  const [description, setDescription] = useState(item.description);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/todo/update/${item._id}`, { itemName, date, description });
      setItemName('');
      setDate('');
      setDescription('');
      window.location.reload();
      
    } catch (error) {
      console.error('Error updating item:', error);
    }
  };

  return (

    
    <>
    <div className='title2'>
    <h2>Edit <span> Task </span> </h2>

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
          <button type="submit">Update Item</button>
        </form>
      </div>
    </div>
    
    </>


    /*
    <form onSubmit={handleSubmit}>
      <h2>Edit Todo Item</h2>
      <input type="text" placeholder="Item Name" value={itemName} onChange={e => setItemName(e.target.value)} required />
      <input type="date" value={date} onChange={e => setDate(e.target.value)} required />
      <textarea placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} required />
      <button type="submit">Update Item</button>
    </form>*/


  );
};

export default EditTodoForm;
