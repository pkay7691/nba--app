import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

/*
  CONSTANT VARIABLES
*/


/*
  THUNKS
*/

export const fetchTodaysGamesAsync = createAsyncThunk('fetchTodaysGames', async (page) => {
  try {
    if (!page) {
      page = 1
    }
    let today = new Date()
    let yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1)
    today = today.toJSON();
    yesterday = yesterday.toJSON()
    console.log(yesterday.slice(0,10))
    const {data} = await axios.get(`https://www.balldontlie.io/api/v1/games/?page=${page}?&per_page=6&?seasons[]=2022&dates[]=${today.slice(0,10)}T00:00:00.000Z&dates[]=${yesterday.slice(0,10)}T00:00:00.000Z`);
    data.data.sort((a, b) => (a.status > b.status) ? 1 : (a.status < b.status) ? -1 : 0)
    data.data.sort((a, b) => (a.date > b.date) ? 1 : (a.date < b.date) ? -1 : 0)
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
