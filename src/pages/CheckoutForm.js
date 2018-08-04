import React from "react";
import { CardElement, injectStripe } from "react-stripe-elements";

class CheckoutForm extends React.Component {
  state = { complete: false };

  handleSubmit = e => {
    e.preventDefault();
    this.props.stripe
      .createToken({ name: "Jenny Rosen" })
      .then(({ token }) => {
        console.log("Received Stripe token:", token);
        fetch("/api/charge", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: token.id
        }).then(response => {
          if (response.ok) this.setState({ complete: true });
        });
      })
      .catch(err => console.log("Error in credit card fields", err));
  };

  //   fetch("/api/books", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify(values)
  //   })
  //     .then(response => {
  //       if (response.status >= 400) {
  //         throw new Error("Bad response from server");
  //       }
  //       return response.json();
  //     })
  //     .then(() => {
  //       this.getApi();
  //       message.success("Book added successfully!");
  //     })
  //     .catch(err => console.log("caught it", err));

  render() {
    if (this.state.complete) return <h1>Purchase Complete</h1>;
    return (
      <form onSubmit={this.handleSubmit}>
        <p>Would you like to complete the purchase?</p>
        <CardElement />
        <br />
        <br />
        <button>Confirm order</button>
      </form>
    );
  }
}

export default injectStripe(CheckoutForm);
