import React from "react";
import { Field, reduxForm } from "redux-form";

class Login extends React.Component {
  handleFormSubmit = values => {
    console.log(values);
  };

  render() {
    return (
      <div className="container">
        <div className="col-md-6 col-md-offset-3">
          <h3 className="text-center">
            Already have an account? Please Sign in
          </h3>
          <form onSubmit={this.props.handleSubmit(this.handleFormSubmit)}>
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
            </fieldset>

            <button action="submit" className="btn btn-primary">
              Sign In
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default reduxForm({
  form: "login"
})(Login);
