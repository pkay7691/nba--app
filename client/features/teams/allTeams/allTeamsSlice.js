import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

/*
  CONSTANT VARIABLES
*/
const TOKEN = 'token';

/*
  THUNKS
*/
export const fetchAllTeamsAsync = createAsyncThunk('fetchteams', async () => {
  try {
    const {data} = await axios.get('https://www.balldontlie.io/api/v1/teams');
    return data
  } catch (err) {
    console.log(err)
  }
})


/*
  SLICE
*/
export const allTeamsSlice = createSlice({
  name: 'teams',
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllTeamsAsync.fulfilled, (state, action) => {
      return action.payload
    });
  }
  });

/*
  ACTIONS
*/


/*
  REDUCER
*/
export default allTeamsSlice.reducer;
