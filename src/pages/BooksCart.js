import React, { Component } from "react";
import BookCartRow from "../components/BookCartRow";
import { Divider } from "antd";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as Actions from "../actions";

class BooksCart extends Component {
  render() {
    const { bookQuantity } = this.props;
    let TotalPrice = 0;

    this.props.cartItems.forEach(book => {
      Object.keys(bookQuantity).forEach(bookId => {
        if (book.id == bookId) {
          TotalPrice += book.price * bookQuantity[bookId];
        }
      });
    });

    const bookCartRows =
      !Array.isArray(this.props.cartItems) ||
      this.props.cartItems.length === 0 ? (
        <tr>
          <td>Cart</td>
          <td>is</td>
          <td>Empty</td>
        </tr>
      ) : (
        this.props.cartItems.map(book => {
          return (
            <BookCartRow
              key={book.id}
              book={book}
              quantity={this.props.bookQuantity[book.id]}
              currentQuantityPrice={this.handleItemQuantityPrice}
            />
          );
        })
      );
    return (
      <div className="container">
        <table className="table table-striped table-bordered">
          <thead className="table-header">
            <tr>
              <th>Book Title</th>
              <th>Quantity</th>
              <th>Price (AUD)</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>{bookCartRows}</tbody>
        </table>
        <Divider />
        <div>Total: {TotalPrice}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cartItems: state.cartItems,
    bookQuantity: state.bookQuantity,
    bookQuantityPrice: state.bookQuantityPrice
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksCart);
