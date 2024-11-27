import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './todosslice';

const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});

export default store;
