import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as Actions from "../actions";

class Checkout extends React.Component {
  render() {
    return <div> Checkout </div>;
  }
}
// function mapStateToProps(state) {
//   return {
//     isLoggedIn: state.isLoggedIn
//   };
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     actions: bindActionCreators(Actions, dispatch)
//   };
// }

//export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
export default Checkout;
