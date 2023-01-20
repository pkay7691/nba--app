import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

/*
  CONSTANT VARIABLES
*/

/*
  THUNKS
*/
export const fetchSingleGameAsync = createAsyncThunk('fetchSingleGame', async (id) => {
  try {
    const {data} = await axios.get(`https://www.balldontlie.io/api/v1/games/${id}`);
    return data
  } catch (err) {
    console.log(err)
  }
})


/*
  SLICE
*/
export const singleGameSlice = createSlice({
  name: 'SingleGame',
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSingleGameAsync.fulfilled, (state, action) => {
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
export default singleGameSlice.reducer;
