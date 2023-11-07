import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/todoActions';
import './AddTodo.css';

const AddTodo = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      addTodo(newTodo);
      setNewTodo('');
    }
  };

  return (
    <div className="add-todo-container">
      <input type="text" placeholder="What to do" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} className="todo-input form-control" />
      <button onClick={handleAddTodo} className="add-button btn btn-primary">
        Add
      </button>
    </div>
  );
};

const mapDispatchToProps = {
  addTodo,
};

export default connect(null, mapDispatchToProps)(AddTodo);
