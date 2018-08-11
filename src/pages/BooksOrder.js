import React, { Component } from "react";
import BookOrderRow from "../components/BookOrderRow";
import { connect } from "react-redux";

// import { bindActionCreators } from "redux";
// import * as Actions from "../actions";

class BooksOrder extends Component {
  state = {
    bookList: []
  };
  getApi = () => {
    fetch("/api/books", {
      cache: "reload",
      method: "GET"
    })
      .then(response => {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
      })
      .then(data => this.setState({ bookList: data }))
      .catch(err => console.log("caught it", err));
  };

  componentDidMount() {
    this.getApi();
    //Reverted this code as it cause err
    //this.props.actions.requestBooks();
  }

  render() {
    const bookOrderRows = this.state.bookList.map(book => {
      return <BookOrderRow key={book.id} book={book} />;
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

// function mapStateToProps(state) {
//   return {
//     bookList: state.bookList.data
//   };
// }
// function mapDispatchToProps(dispatch) {
//   return {
//     actions: bindActionCreators(Actions, dispatch)
//   };
// }

//export default connect(mapStateToProps, mapDispatchToProps)(BooksOrder);
export default BooksOrder;
