import React from "react";
import PropTypes from "prop-types";
import Auth from "../modules/Auth";
import fakeAuth from "../modules/fakeAuth";
import { Redirect } from "react-router-dom";

class LogoutFunction extends React.Component {
  // state = {
  //     redirect
  // }
  componentDidMount() {
    // deauthenticate user
    Auth.deauthenticateUser();
    fakeAuth.signout();
    // change the current URL to / after logout
    this.props.history.push("/");
  }

  render() {
    return (
      <div>
        <p>Logging out...</p>
      </div>
    );
  }
}

LogoutFunction.contextTypes = {
  router: PropTypes.object.isRequired
};

export default LogoutFunction;
