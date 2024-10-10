import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/users/userSlice';

export const store = configureStore({ //configureStore() is function from redux toolkit that helps you manage the global state of your application
  reducer: {  users: userReducer,}, //reducer object in configureStore combines differnet slices of states.
});
