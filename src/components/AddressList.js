import React from "react";
import styled from "styled-components";
import { Radio } from "antd";
import AddressRadio from "./AddressRadio";

const RadioGroup = Radio.Group;

const Div = styled.div`
  margin: 5%;
`;

class AddressList extends React.Component {
  state = {
    value: 0
  };

  onChange = e => {
    console.log("radio checked from AddressList", e.target.value);
    this.setState({
      value: e.target.value
    });
    this.props.addressIdSelected(e.target.value);
  };
  render() {
    const renderAddress = this.props.addressList.map((address, i) => {
      return (
        <Div key={i}>
          <Radio value={address.id}>
            <AddressRadio address={address} />
          </Radio>
        </Div>
      );
    });

    return (
      <div>
        <RadioGroup onChange={this.onChange} value={this.state.value}>
          {renderAddress}
        </RadioGroup>
      </div>
    );
  }
}

export default AddressList;
