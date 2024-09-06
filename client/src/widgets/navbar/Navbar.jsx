import React from 'react';
import { NavLink } from 'react-router-dom';
function Navbar() {
  return (
    <header>
    <nav>
        <span>
          <NavLink to='/topics'>start game</NavLink>
        </span>
        <span>
          <NavLink to='/'>Main</NavLink>
        </span>
    
    </nav>
    </header>
  );
}

export default Navbar;