import React from "react";
import PropTypes from "prop-types";
import { Button } from "antd";

const BookOrderRow = props => {
  return (
    <tr className="table-body">
      <td>{props.book.title}</td>
      <td>{props.book.author}</td>
      <td>
        <Button type="primary">Add To Cart</Button>
      </td>
    </tr>
  );
};

BookOrderRow.propTypes = {
  book: PropTypes.object.isRequired
};

export default BookOrderRow;
