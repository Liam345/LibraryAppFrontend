import React from "react";
import { Field, reduxForm } from "redux-form";

const validate = values => {
  const errors = {};

  if (!values.firstName) {
    errors.firstName = "First Name is required.";
  }

  if (!values.lastName) {
    errors.lastName = "Last Name is required.";
  }

  if (!values.email) {
    errors.email = "Please enter an email.";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.password) {
    errors.password = "Please enter a password.";
  } else if (values.password.length < 6) {
    errors.password = "Password must be atleast 6 characters long.";
  }

  if (!values.passwordConfirmation) {
    errors.passwordConfirmation = "Please enter a password confirmation.";
  }

  if (values.password !== values.passwordConfirmation) {
    errors.password = "Passwords do not match";
  }

  return errors;
};

class Signup extends React.Component {
  handleFormSubmit = values => {
    console.log(values);

    // fetch(`/api/users`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify(values)
    // })
    //   .then(response => {
    //     if (response.status >= 400) {
    //       throw new Error("Bad response from server");
    //     }
    //     message.success("User added successfully!");
    //     return response.json();
    //   })
    //   .then(() => props.getApi())
    //   .catch(err => console.log("caught it", err));
  };

  renderField = ({ input, label, type, meta: { touched, error } }) => (
    <fieldset className="form-group">
      <label>{label}</label>
      <div>
        <input
          {...input}
          placeholder={label}
          className="form-control"
          type={type}
        />
        {touched && error && <span>{error}</span>}
      </div>
    </fieldset>
  );

  render() {
    return (
      <div className="container">
        <div className="col-md-6 col-md-offset-3">
          <h3 className="text-center">New User? Sign Up to continue</h3>
          <form onSubmit={this.props.handleSubmit(this.handleFormSubmit)}>
            <Field
              name="firstName"
              type="text"
              component={this.renderField}
              label="First Name"
            />
            <Field
              name="lastName"
              type="text"
              component={this.renderField}
              label="Last Name"
            />
            <Field
              name="email"
              type="text"
              component={this.renderField}
              label="Email"
            />
            <Field
              name="password"
              type="password"
              component={this.renderField}
              label="Password"
            />
            <Field
              name="passwordConfirmation"
              type="password"
              component={this.renderField}
              label="Password Confirmation"
            />

            <button action="submit" className="btn btn-primary">
              Sign up
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default reduxForm({
  form: "signup",
  validate
})(Signup);
