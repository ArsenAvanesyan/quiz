import React from 'react';
import { NavLink } from 'react-router-dom';
function Navbar({firstTopic, secondTopic}) {
  return (
    <header>
    <nav>
        <span>
          <NavLink to={`/${firstTopic}`}>{firstTopic}</NavLink>
        </span>
        <span>
          <NavLink to='/'>Main</NavLink>
        </span>
        <span>
          <NavLink to={`/${secondTopic}`}>{secondTopic}</NavLink>
        </span>
    
    </nav>
    </header>
  );
}

export default Navbar;