// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Header = () => (
    <nav>
    <div class="nav-wrapper">
    <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="badges.html">Sign up</a> </li>
        <li><a href="badges.html">Sign in</a></li>
        
      </ul>
      <ul id="nav-mobile" class="left hide-on-med-and-down">
        <li><Link to="/">Links</Link></li>
      </ul>
    </div>
  </nav>
);

export default Header;