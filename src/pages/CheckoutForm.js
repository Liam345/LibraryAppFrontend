import React from "react";
import { CardElement, injectStripe } from "react-stripe-elements";
//import { Button } from "antd";
import styled from "styled-components";
import { Helmet } from "react-helmet";

const Container = styled.div`
  max-width: 80%;
  margin: auto;
`;

const Div = styled.div`
  margin: 5%;
`;

const LabelInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  max-height: 100%;
`;

const Label = styled.section`
  font-size:125%
  flex: 1;
  margin-left:20%;
  @media (max-width: 900px) {
    margin:0%;
  }
`;

const Input = styled.input`
  flex: 1;
  width: 500px;
  margin-left: 20%;
  @media (max-width: 900px) {
    margin: 0%;
  }
  @media (max-width: 700px) {
    width: 100%;
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
  state = { complete: false };

  handleSubmit = e => {
    e.preventDefault();
    this.props.stripe
      .createToken()
      .then(({ token }) => {
        fetch("/api/charge", {
          method: "POST",
          headers: { "Content-Type": "text/plain" },
          body: token.id
        }).then(response => {
          console.log(response);
          if (response.ok) this.setState({ complete: true });
        });
      })
      .catch(err => console.log("Error in credit card fields", err));
  };

  render() {
    if (this.state.complete) return <h1>Purchase Complete</h1>;
    return (
      <Container>
        <Helmet>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Helmet>
        <Div>
          <Label>SHIPPING AND BILLING INFORMATION</Label>
          <br />
          <LabelInputWrapper>
            <Label>Address:</Label>
            <Input />
          </LabelInputWrapper>
          <LabelInputWrapper>
            <Label>City:</Label>
            <Input />
          </LabelInputWrapper>
          <LabelInputWrapper>
            <Label>State:</Label>
            <Input />
          </LabelInputWrapper>
          <LabelInputWrapper>
            <Label>ZIP:</Label>
            <Input />
          </LabelInputWrapper>
          <LabelInputWrapper>
            <Label>Country:</Label>
            <Input disabled defaultValue="Australia" />
          </LabelInputWrapper>
        </Div>
        <Div>
          <Label>PAYMENT INFORMATION</Label>
          <br />
          <CardElementWrap>
            <CardElement />
            <Button type="primary" onClick={this.handleSubmit}>
              Pay
            </Button>
          </CardElementWrap>
        </Div>
      </Container>
    );
  }
}

export default injectStripe(CheckoutForm);
