import React, { Component } from "react";
import BookOrderRow from "../components/BookOrderRow";
import BookModal from "../containers/CRUBookModal";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as Actions from "../actions";

import { message } from "antd";

class BooksOrder extends Component {
  state = {
    buttonDisabled: {}
  };

  componentDidMount() {
    //this.getApi();
    this.props.actions.requestBooks();
  }

  handleAddCart = () => {};

  render() {
    const bookOrderRows = this.props.bookList.map((book, index) => {
      return (
        <BookOrderRow
          key={book.id}
          book={book}
          handleAddCart={this.handleAddCart}
        />
      );
    });
    return (
      <div className="container">
        <table className="table table-striped table-bordered">
          <thead className="table-header">
            <tr>
              <th>Book Title</th>
              <th>Author</th>
              <th>Add To Cart</th>
            </tr>
          </thead>
          <tbody>{bookOrderRows}</tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    bookList: state.bookList.data
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksOrder);
