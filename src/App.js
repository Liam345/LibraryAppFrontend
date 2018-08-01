import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
//import { connect } from "react-redux";
import PrimaryHeader from "./ui/PrimaryHeader";
import BooksTable from "./pages/BooksTable";
import BooksOrder from "./pages/BooksOrder";
import BooksCart from "./pages/BooksCart";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import LogoutFunction from "./pages/LogoutFunction";
import Auth from "./modules/Auth";
import fakeAuth from "./modules/fakeAuth";

const Authorization = (WrappedComponent, allowedRoles) =>
  class WithAuthorization extends React.Component {
    constructor(props) {
      super(props);

      // In this case the user is hardcoded, but it could be loaded from anywhere.
      // Redux, MobX, RxJS, Backbone...
      this.state = {
        user: {
          lastName: "admin",
          email: "liam205@outlook.com"
        }
      };
    }
    render() {
      const { lastName } = this.state.user;
      if (allowedRoles.includes(lastName)) {
        return <WrappedComponent {...this.props} />;
      } else {
        return <h1>No page for you!</h1>;
      }
    }
  };

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      fakeAuth.isAuthenticated ? (
        <Component {...props} {...rest} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

class App extends Component {
  // componentDidMount() {
  //   // check if user is logged in on refresh
  //   this.toggleAuthenticateStatus();
  // }

  // toggleAuthenticateStatus() {
  //   this.setState({ authenticated: Auth.isUserAuthenticated() });
  // }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <main>
              <PrimaryHeader />
              <Switch>
                <Route path="/" exact component={BooksOrder} />
                <Route path="/login" exact component={Login} />
                <Route path="/signup" exact component={Signup} />
                <Route path="/cart" exact component={BooksCart} />
                <Route
                  path="/app"
                  component={Authorization(BooksTable, ["admin"])}
                />
                <PrivateRoute path="/checkout" component={Checkout} />
                <Route path="/logout" component={LogoutFunction} />
              </Switch>
            </main>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
