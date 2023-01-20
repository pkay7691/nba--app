import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

/*
  CONSTANT VARIABLES
*/
const TOKEN = 'token';

/*
  THUNKS
*/
export const fetchSinglePlayerAsync = createAsyncThunk('fetchSinglePlayer', async ({id}) => {
  try {
    const {data} = await axios.get(`https://www.balldontlie.io/api/v1/players${id}`);
    return data
  } catch (err) {
    console.log(err)
  }
})


/*
  SLICE
*/
export const singlePlayerSlice = createSlice({
  name: 'singlePlayer',
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSinglePlayerAsync.fulfilled, (state, action) => {
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
export default singlePlayerSlice.reducer;
