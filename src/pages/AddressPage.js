import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import AddressList from "../components/AddressList";
import { Button, Icon, message } from "antd";
import styled from "styled-components";
import { bindActionCreators } from "redux";
import * as OrderActions from "../actions/order";

const Container = styled.div`
  max-width: 80%;
  margin-top: 10%;
  margin-left: 10%;
`;

const Label = styled.section`
  font-size:125%
  flex: 1;
  margin-left:20%;
  @media (max-width: 900px) {
    margin:0%;
  }
`;

class AddressPage extends React.Component {
  state = {
    addressList: [],
    addressId: -1
  };

  handlePaymentBtnClick = () => {
    if (this.state.addressId === -1) {
      message.error("Delivery address needs to be selected");
    } else {
      this.props.orderActions.addOrderAddressId(this.state.addressId);
      this.props.history.push("/checkout/pay");
    }
  };

  changeSelectedAddressId = id => {
    this.setState({ addressId: id });
  };

  getUserAdresses = () => {
    const userId = this.props.user.id;
    console.log("Fetching user address");
    fetch(`/api/address/${userId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ addressList: data });
      })
      .catch(error => console.error("Error:", error));
  };
  componentDidMount() {
    this.getUserAdresses();
  }
  render() {
    let existingAddress;
    if (this.state.addressList.length != 0) {
      existingAddress = (
        <AddressList
          addressIdSelected={this.changeSelectedAddressId}
          addressList={this.state.addressList}
        />
      );
    } else {
      existingAddress = <div>No Existing address added</div>;
    }
    return (
      <Container>
        <h3>SELECT ADDRESS FOR DELIVERY</h3>
        {existingAddress}
        <NavLink to="/checkout/address/add">
          <Button type="primary">
            <Icon type="plus-circle-o" />
            Add new Address
          </Button>
        </NavLink>
        <Button type="primary" onClick={this.handlePaymentBtnClick}>
          Go to Payment
        </Button>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user.userData
  };
}
function mapDispatchToProps(dispatch) {
  return {
    orderActions: bindActionCreators(OrderActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddressPage);
