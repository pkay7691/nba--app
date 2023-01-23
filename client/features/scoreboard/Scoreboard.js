import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import anime from 'animejs'

import { fetchTodaysGamesAsync, selectTodaysGames } from '../scoreboard/todaysGames/todaysGamesSlice';

/**
 * COMPONENT
 */
const Scoreboard = () => {



  const dispatch = useDispatch()
  const games = useSelector(selectTodaysGames);
  let scoreboardGames = games.data;

  const [animateSB, setAnimateSB] = useState(false)

  const handleNextPage = () => {
    setAnimateSB(!animateSB)
    dispatch(fetchTodaysGamesAsync(games.meta.next_page))
    
  }

  const handlePreviousPage = () => {
    dispatch(fetchTodaysGamesAsync(games.meta.current_page - 1))
    setAnimateSB(!animateSB)
  }

  const handleMouseOverLogo = () => {
    console.log("Hovering")
    anime({
      targets: '.league-logo',
      scale: 1.1
    });
  }

  const handleMouseOutLogo = () => {
    console.log("Hovering")
    anime({
      targets: '.league-logo',
      scale: 1.0
    });
  }

  const handleMouseOverGame = (id) => {
    console.log(id)
    anime({
      targets: `#game-container-${id}`,
      translateY: '15'
    });
  }

  const handleMouseOutGame = (id) => {
    console.log(id)
    anime({
      targets: `#game-container-${id}`,
      translateY: '0'
    });
  }




  useEffect(() => {
    dispatch(fetchTodaysGamesAsync())
  }, [dispatch])



  return (
    <>
    <div id='scoreboard'>
        <img onMouseOut={(e)=> handleMouseOutLogo()} onMouseOver={(e)=> handleMouseOverLogo()} className='league-logo' src='nba-seeklogo.com.svg' />
      <div onClick={(e) => handlePreviousPage()} className='scoreboard-arrow-container-left'>
        <img className='arrow' src='left-arrow.png' />
      </div>
      {scoreboardGames && scoreboardGames.length ? 
      scoreboardGames.map((game)=> (
        game.status === "Final" ?
        <div onMouseOut={(e)=> handleMouseOutGame(game.id)} onMouseOver={(e)=> handleMouseOverGame(game.id)} key={game.id} id={`game-container-${game.id}`} className='game-container'>
          <div>FINAL</div>
          <div className='team-container-final'>
            <div className='team-abbreviation'>{game.visitor_team.abbreviation}</div>
            <div>{game.visitor_team_score}</div>
          </div>
          <div className='team-container-final'>
            <div className='team-abbreviation'>{game.home_team.abbreviation}</div>
            <div className='team-score'>{game.home_team_score}</div>
          </div>
        </div>
         :
          game.period === 0 ?
          <div onMouseLeave={(e)=> handleMouseOutGame(game.id)} onMouseEnter={(e)=> handleMouseOverGame(game.id)} key={game.id} id={`game-container-${game.id}`} className='game-container'>
          <div>{game.status}</div>
          <div>{game.visitor_team.abbreviation}</div>
          <div>{game.home_team.abbreviation}</div>
          </div>
          : 
          <div onMouseOut={(e)=> handleMouseOutGame(game.id)} onMouseOver={(e)=> handleMouseOverGame(game.id)} key={game.id} id={`game-container-${game.id}`} className='game-container'>
          <div className='time-container'>
            <div className='period'>{game.period}  {game.time}</div>
          </div>
          <div className='team-container-inprogress'>
            <div className='team-abbreviation'>{game.visitor_team.abbreviation}</div>
            <div>{game.visitor_team_score}</div>
          </div>
          <div className='team-container-inprogress'>
            <div className='team-abbreviation'>{game.home_team.abbreviation}</div>
            <div className='team-score'>{game.home_team_score}</div>
          </div>
          </div>
      )) 
      : <>idk</> }
      <div onClick={(e) => handleNextPage()}className='scoreboard-arrow-container-right'>
        <img className='arrow' src='right-arrow.png' />
      </div>
    </div>
    </>
  )
}

export default Scoreboard;


  



{/* <div className='game-container'>
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
</div> */}
