import React from "react";
import styled from "styled-components";

const Div = styled.div`
  display: inline;
`;
const AddressRadio = ({ address }) => {
  return (
    <Div>
      {address.addressLine}, {address.city}, {address.state}, {address.zip},
      {address.country}
    </Div>
  );
};

export default AddressRadio;
