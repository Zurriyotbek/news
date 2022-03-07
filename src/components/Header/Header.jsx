import { Typography } from "@material-ui/core";
import React from "react";
import { NavLink } from "react-router-dom";
import "../Header/Header.css";

const Header = () => {
  return (
    <div className="header">
      <NavLink to="/home" className="header-link">
        Home
      </NavLink>
      <NavLink to="/signIn" className="header-link">
        Sign In
      </NavLink>
      <NavLink to="/signup" className="header-link">
        Sign Up
      </NavLink>
    </div>
  );
};

export default Header;
