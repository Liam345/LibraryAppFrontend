import React from "react";
import { NavLink } from "react-router-dom";
import fakeAuth from "../modules/fakeAuth";

const PrimaryHeader = () => (
  <header>
    Welcome to our Bookstore!
    <NavLink to="/" exact>
      Home
    </NavLink>
    <NavLink to="/cart">Cart</NavLink>
    <NavLink to="/app">App</NavLink>
    {fakeAuth.isAuthenticated ? (
      <NavLink to="/logout">Logout</NavLink>
    ) : (
      <NavLink to="/login">Login</NavLink>
    )}
  </header>
);

export default PrimaryHeader;
