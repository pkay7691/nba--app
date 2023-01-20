import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

/*
  CONSTANT VARIABLES
*/
const TOKEN = 'token';

/*
  THUNKS
*/
export const fetchSingleTeamAsync = createAsyncThunk('fetchSinglePlayer', async (id) => {
  try {
    const {data} = await axios.get(`https://www.balldontlie.io/api/v1/teams/${id}`);
    return data
  } catch (err) {
    console.log(err)
  }
})


/*
  SLICE
*/
export const singleTeamSlice = createSlice({
  name: 'singleTeam',
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSingleTeamAsync.fulfilled, (state, action) => {
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
export default singleTeamSlice.reducer;
