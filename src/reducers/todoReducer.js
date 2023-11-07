import { ADD_TODO, EDIT_TODO, TOGGLE_TODO, DELETE_TODO } from '../actions/actionsTypes';

const initialState = [];

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case EDIT_TODO:
      return state.map((todo) => (todo.id === action.payload.id ? { ...todo, text: action.payload.text } : todo));
    case TOGGLE_TODO:
      return state.map((todo) => (todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo));
    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
};

export default todoReducer;
