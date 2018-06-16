//import React from "react";

// const Cart = () => <div>The Cart is Empty</div>;

// export default Cart;

import React, { Component } from "react";
import BookCartRow from "../components/BookCartRow";
import BookModal from "../containers/CRUBookModal";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as Actions from "../actions";

import { message } from "antd";

class BooksCart extends Component {
  render() {
    const bookCartRows =
      !Array.isArray(this.props.cartItems) ||
      this.props.cartItems.length == 0 ? (
        <tr>
          <td>Cart</td>
          <td>is</td>
          <td>Empty</td>
        </tr>
      ) : (
        this.props.cartItems.map((book, index) => {
          return <BookCartRow key={book.id} book={book} />;
        })
      );
    return (
      <div className="container">
        <table className="table table-striped table-bordered">
          <thead className="table-header">
            <tr>
              <th>Book Title</th>
              <th>Quantity</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>{bookCartRows}</tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cartItems: state.cartItems
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksCart);
