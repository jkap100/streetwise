import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./Streetwise.png";

function NavBar({ searchTerm, setSearchTerm }) {
  return (
    <nav className="topnav">
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink to="/favorites">Favorites</NavLink>
      <NavLink to="/contribute">Contribute</NavLink>
      <NavLink className="logo" id="logo" to="/" src={logo}></NavLink>
      <div>
        {" "}
        <input
          value={searchTerm}
          type="text"
          placeholder="Search Art"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <i className="">🔎</i>
      </div>
    </nav>
  );
}

export default NavBar;
