import { ADD_TODO, EDIT_TODO, TOGGLE_TODO, DELETE_TODO } from './actionsTypes';

let nextTodoId = 1;

export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: {
    id: nextTodoId++,
    text,
    completed: false,
  },
});

export const editTodo = (id, text) => ({
  type: EDIT_TODO,
  payload: {
    id,
    text,
  },
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: id,
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: id,
});
