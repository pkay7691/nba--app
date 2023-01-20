import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

/*
  CONSTANT VARIABLES
*/
const TOKEN = 'token';

/*
  THUNKS
*/
export const fetchStatsAsync = createAsyncThunk('fetchStats', async () => {
  try {
    const {data} = await axios.get('https://www.balldontlie.io/api/v1/stats');
    return data
  } catch (err) {
    console.log(err)
  }
})


/*
  SLICE
*/
export const allStatsSlice = createSlice({
  name: 'allStats',
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchStatsAsync.fulfilled, (state, action) => {
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
export default allStatsSlice.reducer;
