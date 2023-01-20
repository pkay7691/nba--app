import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllGamesAsync } from '../games/allgames/allgamesslice';
import { fetchPlayersAsync } from '../players/allplayers/allplayersslice';
import { fetchAllTeamsAsync } from '../teams/allTeams/allTeamsSlice';
import { fetchSingleTeamAsync } from '../teams/singleTeam/singleTeamSlice';
import { fetchSinglePlayerAsync } from '../players/singleplayer/singleplayerslice';
import { fetchSingleGameAsync } from '../games/singlegame/singlegameslice';
import { fetchTodaysGamesAsync } from '../scoreboard/todaysGames/todaysGamesSlice';
/**
 * COMPONENT
 */
const Home = (props) => {

  const dispatch = useDispatch()

  useEffect(()=> {

    
  },[dispatch])

  return (
    <div>
      <h3>Welcome</h3>
    </div>
  );
};

export default Home;
