import React from "react";
import { Link } from "react-router-dom";
import "../CSS/NavBar.css";
const NavBar = () => {
  return (
    <div className="navbar">
      <h1 className="title">Movie App</h1>
      <div className="nav-elements">
        <Link to="/">Home</Link>
        <Link to="/favourites">Favourites</Link>
      </div>
    </div>
  );
};

export default NavBar;
