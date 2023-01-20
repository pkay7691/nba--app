import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

/*
  CONSTANT VARIABLES
*/
const TOKEN = 'token';

/*
  THUNKS
*/
export const fetchSeasonAveragesAsync = createAsyncThunk('fetchSeasonAverages', async () => {
  try {
    const {data} = await axios.get('https://www.balldontlie.io/api/v1/season_averages');
    return data
  } catch (err) {
    console.log(err)
  }
})


/*
  SLICE
*/
export const allSeasonAvgSlice = createSlice({
  name: 'allSeasonAvg',
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSeasonAveragesAsync.fulfilled, (state, action) => {
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
export default allSeasonAvgSlice.reducer;
