import React from "react";
// import Login from "../components/Login";
// import Signup from "../components/Signup";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as Actions from "../actions";
import Auth from "../modules/Auth";
import Login from "./Login";

class Checkout extends React.Component {
  render() {
    return <div> Checkout </div>;
  }
}
function mapStateToProps(state) {
  return {
    isLoggedIn: state.isLoggedIn
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
