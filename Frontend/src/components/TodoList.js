import React, { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import EditTodoForm from './EditTodoForm';
import '../styles/TodoList.css'; // Import TodoList.css

const TodoList = () => {
  const [items, setItems] = useState([]);
  const [editItemId, setEditItemId] = useState(null);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/todo/list');
      setItems(response.data);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  const handleEdit = (id) => {
    setEditItemId(id);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/todo/delete/${id}`);
      setItems(items.filter(item => item._id !== id));
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  const handleMarkAsCompleted = async (id) => {
    try {
      await axios.put(`http://localhost:5000/api/todo/update/${id}`, { completed: true });
      fetchItems(); // Refresh list after marking as completed
    } catch (error) {
      console.error('Error marking item as completed:', error);
    }
  };

  return (
<>

    <div className='title1'>
    <h2>Check <span> Todo List</span> </h2>

    </div>
    <div className="todo-list-container">
      
      <ul className="todo-list">
        {items.map(item => (
          <li key={item._id} className={item.completed ? 'completed-item' : ''}>
            {editItemId === item._id ? (
              <EditTodoForm item={item} fetchItems={fetchItems} />
            ) : (
              <div>
                <h2>{item.itemName}</h2>
                <p className="description">{item.description}</p>
                <p className="date">Date: {moment(item.date).format('MM-DD-YYYY')}</p>
                <button className="update-button" onClick={() => handleMarkAsCompleted(item._id)}>
                  {item.completed ? 'Completed' : 'Mark as Completed'}
                </button>
                <button className="edit-button" onClick={() => handleEdit(item._id)}>Edit</button>
                <button className="delete-button" onClick={() => handleDelete(item._id)}>Delete</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
    </>
  );
};

export default TodoList;
