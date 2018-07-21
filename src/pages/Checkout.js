import React from "react";
// import Login from "../components/Login";
// import Signup from "../components/Signup";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as Actions from "../actions";

class Checkout extends React.Component {
  render() {
    if (!this.props.isLoggedIn) {
      return <Redirect to="/login" />;
    } else {
      return <div> Checkout </div>;
    }
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

//const isLoggedIn = false;

// const Checkout = () => {
//   if (!isLoggedIn) {
//     return <Redirect to="/login" />;
//   } else {
//     return <div> Checkout </div>;
//   }
// };

//export default Checkout;
