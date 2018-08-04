import React from "react";
import PropTypes from "prop-types";
import Auth from "../modules/Auth";
import fakeAuth from "../modules/fakeAuth";
import { connect } from "react-redux";
import * as UserActions from "../actions/user";
import { bindActionCreators } from "redux";

class LogoutFunction extends React.Component {
  componentDidMount() {
    // deauthenticate user
    Auth.deauthenticateUser();
    fakeAuth.signout();

    this.props.userActions.userLogout();

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

function mapDispatchToProps(dispatch) {
  return {
    userActions: bindActionCreators(UserActions, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(LogoutFunction);
