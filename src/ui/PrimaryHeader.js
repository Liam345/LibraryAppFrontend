import React from "react";
import { NavLink } from "react-router-dom";
import fakeAuth from "../modules/fakeAuth";
import { connect } from "react-redux";

const PrimaryHeader = (
  props //console.log(props.user.userData.firstName);
) => (
  <header>
    Welcome to our Bookstore!
    {props.user.userData ? props.user.userData.lastName : ""}
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

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps)(PrimaryHeader);
