import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../app/store';

const Navbar = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();


  return (
    <div>
      <nav></nav>
    </div>
  );
};

export default Navbar;
