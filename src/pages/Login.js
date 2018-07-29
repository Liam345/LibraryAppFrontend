import React from "react";
import { Field, reduxForm, SubmissionError } from "redux-form";
import { Redirect, NavLink } from "react-router-dom";
import Auth from "../modules/Auth";
import fakeAuth from "../modules/fakeAuth";

class Login extends React.Component {
  constructor(props) {
    super(props);

    const storedMessage = localStorage.getItem("successMessage");
    let successMessage = "";

    if (storedMessage) {
      successMessage = storedMessage;
      localStorage.removeItem("successMessage");
    }

    this.state = {
      errors: {},
      successMessage,
      redirectToReferrer: false
    };
  }

  processForm = values => {
    console.log(values);

    return fetch("/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(values)
    })
      .then(res => {
        return res.json();
      })
      .then(response => {
        console.log("res: " + JSON.stringify(response));

        this.setState({
          errors: {}
        });

        if (response.success) {
          console.log("Login successful");

          fakeAuth.authenticate(() => {
            this.setState({ redirectToReferrer: true });
          });

          //save the token
          Auth.authenticateUser(response.token);

          //return <Redirect to="/app" />;
          //this.props.history.push("/checkout");
        } else {
          console.log("error");

          console.log(response);
          //console.log(response.message);
        }
        throw new SubmissionError({
          _errors: `${response.message}`
        });
      });
  };

  renderErrorMessage = ({ meta: { error } }) => {
    return <div>{error && <span>{error}</span>}</div>;
  };

  render() {
    const { redirectToReferrer } = this.state;
    const { from } = this.props.location.state || { from: { pathname: "/" } };

    if (redirectToReferrer === true) {
      return <Redirect to={from} />;
    }
    return (
      <div className="container">
        <div className="col-md-6 col-md-offset-3">
          <h3 className="text-center">
            Already have an account? Please Sign in
          </h3>
          <form onSubmit={this.props.handleSubmit(this.processForm)}>
            <fieldset className="form-group">
              <label>Email</label>
              <Field
                name="email"
                component="input"
                className="form-control"
                type="text"
                placeholder="Email"
              />
            </fieldset>

            <fieldset className="form-group">
              <label>Password</label>
              <Field
                name="password"
                component="input"
                className="form-control"
                type="password"
                placeholder="Password"
              />
              <Field name="_errors" component={this.renderErrorMessage} />
            </fieldset>

            <button action="submit" className="btn btn-primary">
              Sign In
            </button>
            <br />
            <NavLink to="/signup">New user? Sign Up</NavLink>
          </form>
        </div>
      </div>
    );
  }
}

export default reduxForm({
  form: "login"
})(Login);