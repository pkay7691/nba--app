import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

/*
  CONSTANT VARIABLES
*/
const TOKEN = 'token';

/*
  THUNKS
*/
export const fetchPlayersAsync = createAsyncThunk('fetchplayers', async () => {
  try {
    const {data} = await axios.get('https://www.balldontlie.io/api/v1/players');
    return data
  } catch (err) {
    console.log(err)
  }
})


/*
  SLICE
*/
export const allPlayersSlice = createSlice({
  name: 'allPlayers',
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPlayersAsync.fulfilled, (state, action) => {
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
export default allPlayersSlice.reducer;
