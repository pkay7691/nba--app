import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

/*
  CONSTANT VARIABLES
*/


/*
  THUNKS
*/

export const fetchTodaysGamesAsync = createAsyncThunk('fetchGames', async () => {
  try {
    let date = new Date()
    date = date.toJSON()
    console.log(date)
    const {data} = await axios.get(`https://www.balldontlie.io/api/v1/games/?seasons[]=2022&dates[]=${date.slice(0,10)}T00:00:00.000Z`);
    return data
  } catch (err) {
    console.log(err)
  }
})

/*
  SLICE
*/
export const todaysGamesSlice = createSlice({
  name: 'todaysGames',
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTodaysGamesAsync.fulfilled, (state, action) => {
      return action.payload
    });
  }
  });

  export const selectTodaysGames = (state, action) => {
    return state.todaysGames
  }


  export default todaysGamesSlice.reducer
