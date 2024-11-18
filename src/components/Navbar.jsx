import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';

function Navbar() {
  return (
    <nav className='navbar'>
      <ul>
        <li>
          <NavLink to="/" exact activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/work" activeClassName="active">
            Work
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;