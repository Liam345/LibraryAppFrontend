import React from "react";
import { CardElement, injectStripe } from "react-stripe-elements";
import styled from "styled-components";
import { connect } from "react-redux";

import AddressForm from "../components/AddressForm";

const Container = styled.div`
  max-width: 80%;
  margin: auto;
`;

const Div = styled.div`
  margin: 5%;
`;

const Label = styled.section`
  font-size:125%
  flex: 1;
  margin-left:20%;
  @media (max-width: 900px) {
    margin:0%;
  }
`;

const CardElementWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20%;
  @media (max-width: 900px) {
    margin: 0%;
  }
`;

const Button = styled.button`
  width: 300px;
  margin-left: 20%;
  color: #fff;
  border-radius: 4px;
  padding: 4px 15px;
  display: inline-block;
  background-color: #108ee9;
  @media (max-width: 700px) {
    width: 100%;
    margin: 0%;
  }
  @media (min-width: 950px) {
    margin-left: 15%;
  }
  @media (min-width: 950px) {
    margin-left: 10%;
  }
`;

class CheckoutForm extends React.Component {
  state = {
    complete: false,
    customerStripeId: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    this.handlePayment();
  };

  createCharge = () => {
    const { customerStripeId } = this.state;

    fetch("/api/charge", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ customerStripeId, amount: 1200 })
    })
      .then(res => {
        return res.json();
      })
      .then(response => {
        if (response.captured) {
          this.setState({ complete: true });
        }
      })
      .catch(err => {
        console.log("Payment was unsuccessful", err);
      });
  };

  createOrRetrieveStripeCustomer = () => {
    const { email, lastName } = this.props.user;
    this.props.stripe
      .createToken({
        name: lastName,
        email: email
      })
      .then(({ token }) => {
        fetch("/api/customer", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ token: token.id, email: email })
        })
          .then(res => {
            return res.json();
          })
          .then(response => {
            this.setState({ customerStripeId: response.customerStripeId }, () =>
              this.createCharge()
            );
          });
      })
      .catch(err => {
        console.log("Payment was unsuccessful", err);
      });
  };
  handlePayment = () => {
    this.createOrRetrieveStripeCustomer();
  };

  render() {
    if (this.state.complete) return <h1>Purchase Complete</h1>;
    return (
      <Container>
        <Div>
          <Label>PAYMENT INFORMATION</Label>
          <br />
          <CardElementWrap>
            <CardElement />
            <Button onClick={this.handleSubmit}>Pay</Button>
          </CardElementWrap>
        </Div>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user.userData
  };
}

export default injectStripe(connect(mapStateToProps)(CheckoutForm));
