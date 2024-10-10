import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:4000/api/User';                             // --> Base URL


export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {  //createAsyncThunk() is a function from redux toolkit that helps you manage asynchronous actions like API calls
  const response = await axios.get(`${API_URL}/get`);                         //axios is used to make a request to the Api end point
  return response.data.data;                                                  // Assuming the response structure based on your code
});

export const createUser = createAsyncThunk('users/createUser', async (newUser) => {
  const response = await axios.post(`${API_URL}/create`, newUser);             //axios is used to make a request to the Api end point
  return response.data;
});

export const updateUser = createAsyncThunk('users/updateUser', async ({ id, data }) => {
  const response = await axios.patch(`${API_URL}/${id}`, data);               //axios is used to make a request to the Api end point
  return response.data;
});

export const deleteUser = createAsyncThunk('users/deleteUser', async (id) => {
  await axios.delete(`${API_URL}/${id}`);                                     //axios is used to make a request to the Api end point
  return id;
});

// User Slice
const userSlice = createSlice({                           //createSlice() is function that allow us to define a slice of the redux store
  name: 'users',                                          //here we define the name of the slice 
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {                     //The builder pattern used here makes it easy to define what should happen to the state 
    builder                                        //when an action occurs like pending, fulfilled, or rejected from createAsyncThunk
      // Fetch Users
      .addCase(fetchUsers.pending, (state) => {   //The addCase() function is used inside extraReducers to define how the state 
        state.loading = true;                     //should be updated in response to asynchronous actions that 
      })                                          //were created using createAsyncThunk
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // Create User
      .addCase(createUser.fulfilled, (state, action) => {
        state.users.push(action.payload);
      })

      // Update User
      .addCase(updateUser.fulfilled, (state, action) => {
        const index = state.users.findIndex(user => user.id === action.payload.id);
        if (index !== -1) {
          state.users[index] = action.payload;
        }
      })

      // Delete User
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.users = state.users.filter(user => user.id !== action.payload);
      });
  },
});

export default userSlice.reducer;
