import React from "react";
// import Login from "../components/Login";
// import Signup from "../components/Signup";
import { Route, Link, Switch, Redirect, history } from "react-router-dom";
//import isLoggedIn from '../../helpers/is_logged_in';

// class Checkout extends React.Component {
//   render() {
//     return (
//       <div>
//         Checkout
//       </div>
//     );
//   }
// }
const isLoggedIn = false;
const Checkout = () => {
  if (!isLoggedIn) {
    return <Redirect to="/login" />;
  } else {
    return <div> Checkout </div>;
  }
};

export default Checkout;
