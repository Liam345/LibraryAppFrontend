import React, { Component } from "react";
import BookRow from "../components/BookRow";
import BookModal from "../containers/CRUBookModal";
import { message } from "antd";

class BooksTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookList: []
    };
  }

  postData = values => {
    fetch("/api/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(values)
    })
      .then(response => {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
      })
      .then(() => {
        this.getApi();
        message.success("Book added successfully!");
      })
      .catch(err => console.log("caught it", err));
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
  }

  render() {
    const bookRows = this.state.bookList.map(book => {
      return <BookRow key={book.id} book={book} getApi={this.getApi} />;
    });
    return (
      <div className="container">
        <table className="table table-striped table-bordered">
          <thead className="table-header">
            <tr>
              <th>Book Title</th>
              <th>Author</th>
              <th>Price (AUD)</th>
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
