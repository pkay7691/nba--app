import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import AuthForm from '../features/auth/AuthForm';
import Home from '../features/home/Home';
import Scoreboard from '../features/scoreboard/Scoreboard'
import { fetchTodaysGamesAsync } from '../features/scoreboard/todaysGames/todaysGamesSlice';

import AllTeams from '../features/teams/allTeams/allTeams';


/**
 * COMPONENT
 */

const AppRoutes = () => {

  let dispatch = useDispatch()

  useEffect(()=> {
    dispatch(fetchTodaysGamesAsync())
    

  })


  return (
    <div>

        <Routes>
          <Route path='/*' element ={<Scoreboard />} />
          <Route path="/*" element={<Home />} />
          <Route path="/allteams" element={<AllTeams />} />
        </Routes>
    </div>
  );
};

export default AppRoutes;
