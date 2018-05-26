import React, { Component } from "react";
import BookRow from "../components/BookRow";
import BookModal from "./BookModal";

class BooksTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookList: []
    };
  }

  postData = values => {
    fetch("https://library-api.glitch.me/api/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(values)
    });
    this.getApi();
  };

  getApi = () => {
    fetch("https://library-api.glitch.me/api/books", {
      cache: "reload",
      method: "GET"
    })
      .then(response => response.json())
      .then(data => this.setState({ bookList: data }));
  };

  componentDidMount() {
    this.getApi();
  }

  render() {
    const bookRows = this.state.bookList.map((book, index) => {
      return <BookRow key={index} book={book} />;
    });
    return (
      <div className="container">
        <table className="table table-striped table-bordered">
          <thead className="table-header">
            <tr>
              <th>Book Title</th>
              <th>Author</th>
              <th />
              <th />
              <th>
                <BookModal
                  btnText="Add book"
                  header="Add a new book"
                  handleData={this.postData}
                />
              </th>
            </tr>
          </thead>
          <tbody>{bookRows}</tbody>
        </table>
      </div>
    );
  }
}

export default BooksTable;
