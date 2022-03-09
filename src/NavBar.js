import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./Streetwise.png";

function NavBar() {
  return (
    <nav className="topnav">
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink to="/favorites">Favorites</NavLink>
      <NavLink to="/contribute">Contribute</NavLink>
      <NavLink className="logo" id="logo" to="/" src={logo}></NavLink>
    </nav>
  );
}

export default NavBar;
