import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="topnav">
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink to="/favorites">Favorites</NavLink>
      <NavLink to="/contribute">Contribute</NavLink>
    </nav>
  );
}

export default NavBar;
