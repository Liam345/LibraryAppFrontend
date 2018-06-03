import React from "react";
import BookModal from "../containers/CRUBookModal";
import DeleteModal from "./DeleteModal";
import EmailModal from "./EmailModal";
import PropTypes from "prop-types";
import { message } from "antd";

const sendEmail = (id, values) => {
  fetch(`/api/books/contact/${id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(values)
  })
    .then(response => {
      if (response.status === 200) {
        message.success("Email sent successfully!");
      } else {
        message.error("Email failed to send.");
      }
    })
    .catch(error => console.error("Error:", error));
};

const deleteData = id => {
  fetch(`/api/books/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    }
  });
  //this.props.getApi;
  //this.getApi();
};

const putData = values => {
  fetch(`/api/books/${values.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(values)
  });
  //this.props.getApi;
  //this.getApi();
};

const BookRow = props => {
  return (
    <tr className="table-body">
      <td>{props.book.title}</td>
      <td>{props.book.author}</td>
      <td className="highlight">
        <BookModal
          id={props.book.id}
          btnText="Edit book"
          header="Edit book details"
          title={props.book.title}
          author={props.book.author}
          email={props.book.email}
          handleData={putData}
        />
      </td>
      <td>
        <EmailModal
          id={props.book.id}
          btnText="Send Email"
          btnType="dashed"
          header="Send Email to author"
          receiver={props.book.email}
          handleData={sendEmail}
        />
      </td>
      <td>
        <DeleteModal
          id={props.book.id}
          btnText="Delete"
          btnType="danger"
          header="Confirm deleting book?"
          handleData={deleteData}
        />
      </td>
    </tr>
  );
};

BookRow.propTypes = {
  book: PropTypes.object.isRequired
};

export default BookRow;
