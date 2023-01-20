import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllGamesAsync } from '../games/allgames/allgamesslice';
import { fetchPlayersAsync } from '../players/allplayers/allplayersslice';
import { fetchAllTeamsAsync } from '../teams/allTeams/allTeamsSlice';
import { fetchSingleTeamAsync } from '../teams/singleTeam/singleTeamSlice';
import { fetchSinglePlayerAsync } from '../players/singleplayer/singleplayerslice';
import { fetchSingleGameAsync } from '../games/singlegame/singlegameslice';
import { fetchTodaysGamesAsync, selectTodaysGames } from '../scoreboard/todaysGames/todaysGamesSlice';
import { Template } from 'webpack';
/**
 * COMPONENT
 */
const Scoreboard = () => {

  const dispatch = useDispatch()
  const todaysGames = useSelector(selectTodaysGames);


  useEffect(() => {
    dispatch(fetchTodaysGamesAsync())


  }, [dispatch])

  return (

    <div id='scoreboard'>
      {todaysGames.map((game) => {
        game.status === "Final" ?

        <div className='game-container'>
        <div>{game.date}FINAL</div>
        <div className='team-container-final'>
          <div className='team-abbreviation'>{game.away_team.abbreviation}</div>
          <div>{game.home_team_score}</div>
        </div>
        <div className='team-container-final'>
          <div className='team-abbreviation'>{game.home_team.abbreviation}</div>
          <div className='team-score'>{game.away_team_score}</div>
        </div>
      </div>
      : 
      game.status ===  '1st Qtr'|| '2nd Qtr'|| 'Halftime' || '3rd Qtr' || '4th Qtr' ?
      <div className='game-container'>
      <div className='time-container'>
        <div className='period'>{game.status}  {game.time_in_period}</div>
      </div>
      <div className='team-container-inprogress'>
        <div className='team-abbreviation'>{game.away_team.abbreviation}</div>
        <div>{game.away_team_score}</div>
      </div>
      <div className='team-container-inprogress'>
        <div className='team-abbreviation'>{game.home_team.abbreviation}</div>
        <div className='team-score'>{game.home_team_score}</div>
      </div>
    </div> 
    :  
    <div className='game-container'>
    <div>{game.status}</div>
    <div>{game.away_team.abbreviation}</div>
    <div>{game.home_team.abbreviation}</div>
  </div>

      })}



      <div className='game-container'>
        <div>7:00 PM ET</div>
        <div>CHI</div>
        <div>BKN</div>
      </div>

      <div className='game-container'>
        <div className='time-container'>
          <div className='period'>3rd  7:56</div>
        </div>
        <div className='team-container-inprogress'>
          <div className='team-abbreviation'>CHI</div>
          <div>96</div>
        </div>
        <div className='team-container-inprogress'>
          <div className='team-abbreviation'>BKN</div>
          <div className='team-score'>76</div>
        </div>
      </div>
      <div className='game-container'>
        <div>7/6 FINAL</div>
        <div className='team-container-final'>
          <div className='team-abbreviation'>CHI</div>
          <div>103</div>
        </div>
        <div className='team-container-final'>
          <div className='team-abbreviation'>BKN</div>
          <div className='team-score'>89</div>
        </div>
      </div>
    </div>
  );
};

export default Scoreboard;
