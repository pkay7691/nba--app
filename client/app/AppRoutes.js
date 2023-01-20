import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import AuthForm from '../features/auth/AuthForm';
import Home from '../features/home/Home';
import Scoreboard from '../features/scoreboard/Scoreboard'
import { me } from './store';

/**
 * COMPONENT
 */

const AppRoutes = () => {


  return (
    <div>

        <Routes>
          {/* <Route path='/*' element ={<Scoreboard />} /> */}
          <Route path="/*" element={<Home />} />
          <Route to="/home" element={<Home />} />
        </Routes>
    </div>
  );
};

export default AppRoutes;
