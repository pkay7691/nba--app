import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

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
