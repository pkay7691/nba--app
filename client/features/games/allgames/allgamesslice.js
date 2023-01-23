import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

/*
  CONSTANT VARIABLES
*/
const TOKEN = 'token';

/*
  THUNKS
*/
export const fetchAllGamesAsync = createAsyncThunk('fetchAllGames', async () => {
  try {
    const {data} = await axios.get('https://www.balldontlie.io/api/v1/games');
    return data
  } catch (err) {
    console.log(err)
  }
})



/*
  SLICE
*/
export const allGamesSlice = createSlice({
  name: 'allGames',
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllGamesAsync.fulfilled, (state, action) => {
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
export default allGamesSlice.reducer;
