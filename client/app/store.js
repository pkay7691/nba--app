import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import authReducer from '../features/auth/authSlice';

import allPlayersReducer from '../features/players/allplayers/allplayersslice';
import singlePlayerReducer from '../features/players/singleplayer/singleplayerslice'
import allTeamsReducer from '../features/teams/allTeams/allTeamsSlice';
import singleTeamReducer from '../features/teams/singleTeam/singleTeamSlice';
import AllGamesReducer from '../features/games/allgames/allgamesslice';
import singleGameReducer from '../features/games/singlegame/singlegameslice';
import todaysGamesReducer from '../features/scoreboard/todaysGames/todaysGamesSlice';


const store = configureStore({
  reducer: {
     auth: authReducer,
     allPlayers: allPlayersReducer,
     singlePlayer: singlePlayerReducer,
     allTeams: allTeamsReducer,
     singleTeam: singleTeamReducer,
     allGames: AllGamesReducer,
     singleGame: singleGameReducer,
     todaysGames: todaysGamesReducer,
     
     


    },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
export * from '../features/auth/authSlice';
