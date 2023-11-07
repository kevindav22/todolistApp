import React, { useState } from 'react';
import { connect } from 'react-redux';
import { editTodo, toggleTodo, deleteTodo } from '../actions/todoActions';
import './TodoItem.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faSave } from '@fortawesome/free-solid-svg-icons';

const TodoItem = ({ todo, editTodo, toggleTodo, deleteTodo }) => {
  const [isEditing, setEditing] = useState(false);
  const [updatedText, setUpdatedText] = useState(todo.text);

  const handleEditTodo = () => {
    if (updatedText.trim() !== '') {
      editTodo(todo.id, updatedText);
      setEditing(false);
    }
  };

  return (
    <div className={`todo-item ${isEditing ? 'editing' : ''}`}>
      <div className="checkbox-container">
        <input type="checkbox" checked={todo.completed} onChange={() => toggleTodo(todo.id)} />
      </div>
      {isEditing ? (
        <div className="edit-container">
          <input type="text" value={updatedText} onChange={(e) => setUpdatedText(e.target.value)} />
          <button onClick={handleEditTodo}>
            <FontAwesomeIcon icon={faSave} />
          </button>
        </div>
      ) : (
        <div className="text-container">
          <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}</span>
          <div className="icon-container">
            <button onClick={() => setEditing(true)}>
              <FontAwesomeIcon icon={faEdit} />
            </button>
            <button onClick={() => deleteTodo(todo.id)}>
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const mapDispatchToProps = {
  editTodo,
  toggleTodo,
  deleteTodo,
};

export default connect(null, mapDispatchToProps)(TodoItem);
