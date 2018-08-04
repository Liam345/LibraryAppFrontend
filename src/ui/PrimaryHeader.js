import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

const PrimaryHeader = ({ user }) => (
  <header>
    Welcome to our Bookstore!
    {user.userData ? user.userData.lastName : ""}
    <NavLink to="/" exact>
      Home
    </NavLink>
    <NavLink to="/cart">Cart</NavLink>
    {user.isAdmin && <NavLink to="/app">App</NavLink>}
    {user.isLoggedIn ? (
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
