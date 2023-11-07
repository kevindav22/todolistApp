import React, { useState } from 'react';
import { connect } from 'react-redux';
import { editTodo, toggleTodo, deleteTodo } from '../actions/todoActions';
import TodoItem from './TodoItem';
import './TodoList.css';

const TodoList = ({ todos, editTodo, toggleTodo, deleteTodo }) => {
  const [filter, setFilter] = useState('all');

  const filteredTodos = filter === 'all' ? todos : filter === 'active' ? todos.filter((todo) => !todo.completed) : todos.filter((todo) => todo.completed);

  return (
    <div className="todo-container">
      <div className="filter-buttons">
        <button className={`filter-button ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>
          All
        </button>
        <button className={`filter-button ${filter === 'active' ? 'active' : ''}`} onClick={() => setFilter('active')}>
          Active
        </button>
        <button className={`filter-button ${filter === 'completed' ? 'active' : ''}`} onClick={() => setFilter('completed')}>
          Completed
        </button>
      </div>
      {filteredTodos && filteredTodos.map((todo) => <TodoItem key={todo.id} todo={todo} editTodo={editTodo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />)}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

const mapDispatchToProps = {
  editTodo,
  toggleTodo,
  deleteTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
