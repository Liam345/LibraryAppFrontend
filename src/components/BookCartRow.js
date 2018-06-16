import React from "react";
import BookModal from "../containers/CRUBookModal";
import DeleteModal from "./DeleteModal";
import PropTypes from "prop-types";

const BookCartRow = props => {
  const removeBook = id => {
    console.log(`Delete id= ${id} clicked`);
  };

  return (
    <tr className="table-body">
      <td>{props.book.title}</td>
      {/* <td>{props.book.author}</td> */}
      <td>1</td>
      <td>
        <DeleteModal
          id={props.book.id}
          btnText="Remove"
          btnType="danger"
          header="Confirm removing book?"
          handleData={removeBook}
        />
      </td>
    </tr>
  );
};

BookCartRow.propTypes = {
  book: PropTypes.object.isRequired
};

export default BookCartRow;
