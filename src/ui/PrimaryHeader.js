import React from "react";
import { NavLink } from "react-router-dom";

const PrimaryHeader = () => (
  <header>
    Welcome to our Bookstore!
    <NavLink to="/" exact>
      Home
    </NavLink>
    <NavLink to="/cart">Cart</NavLink>
    <NavLink to="/app">App</NavLink>
  </header>
);

export default PrimaryHeader;
