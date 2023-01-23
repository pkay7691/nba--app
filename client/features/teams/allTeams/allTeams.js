import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import anime from 'animejs'

import { fetchAllTeamsAsync } from './allTeamsSlice';

/**
 * COMPONENT
 */
const AllTeams = () => {

 

const dispatch = useDispatch()





  useEffect(() => {
    dispatch(fetchAllTeamsAsync())
  }, [dispatch])



  return (
    <div className='all-teams-container'>
   <div className='team-img-container'>
    <img className='team-img' src='atlanta-hawks-2.svg' />
    </div>
    <div className='team-img-container'>
    <img className='team-img' src='boston-celtics-1.svg' />
    </div>
    <div className='team-img-container'>
    <img className='team-img' src='brooklyn-nets.svg' />
    </div>
    <div className='team-img-container'>
    <img className='team-img' src='chicago-bulls.svg' />
    </div>
    <div className='team-img-container'>
    <img  className='team-img' src='cleveland-cavaliers.svg' />
    </div>
    <div className='team-img-container'>
    <img className='team-img' src='dallas-mavericks.svg' />
    </div>
    <div className='team-img-container'>
    <img className='team-img' src='denver-nuggets.svg' />
    </div>
    <div className='team-img-container'>
    <img className='team-img' src='detroit-pistons.svg' />
    </div>
    <div className='team-img-container'>
    <img className='team-img' src='golden-state-warriors-4.svg' />
    </div>
    <div className='team-img-container'>
    <img className='team-img' src='SVG-rockets.svg' />
    </div>
    <div className='team-img-container'>
    <img className='team-img' src='indiana-pacers.svg' />
    </div>
    <div className='team-img-container'>
    <img className='team-img' src='los-angeles-clippers.svg' />
    </div>
    <div className='team-img-container'>
    <img className='team-img' src='memphis-grizzlies-1.svg' />
    </div>
    <div className='team-img-container'>
    <img className='team-img' src='miami-heat.svg' />
    </div>
    <div className='team-img-container'>
    <img className='team-img' src='milwaukee-bucks-1.svg' />
    </div>
    <div className='team-img-container'>
    <img className='team-img' src='minnesota-timberwolves-1.svg' />
    </div>
    <div className='team-img-container'>
    <img className='team-img' src='new-orleans-pelicans.svg' />
    </div>
    <div className='team-img-container'>
    <img className='team-img' src='new-york-knicks-1.svg' />
    </div>
    <div className='team-img-container'>
    <img className='team-img' src='orlando-magic.svg' />
    </div>
    <div className='team-img-container'>
    <img  className='team-img'src='philidephia-76ers.svg' />
    </div>
    <div className='team-img-container'>
    <img className='team-img' src='phoenix-suns.svg' />
    </div>
    <div className='team-img-container'>
    <img className='team-img' src='portland-trail-blazers.svg' />
    </div>
    <div className='team-img-container'>
    <img  className='team-img'src='sacramento-kings-2.svg' />
    </div>
    <div className='team-img-container'>
    <img className='team-img' src='san-antonio-spurs-1.svg' />
    </div>
    <div className='team-img-container'>
    <img className='team-img' src='toronto-raptors-3.svg' />
    </div>
    <div className='team-img-container'>
    <img className='team-img' src='washington-wizards-3.svg' />
    </div>
    <div className='team-img-container'>
    <img className='team-img' src='utah-jazz.svg' />
    </div>
    <div className='team-img-container'>
    <img className='team-img' src='SVG-thunder.svg' />
    </div>
    <div className='team-img-container'>
    <img className='team-img' src='SVG-clippers.svg' />
    </div>
    <div className='team-img-container'>
    <img className='team-img' src='SVG-hornets.svg' />
    </div>

  </div>


  )
}

export default AllTeams;


  