import React from "react";
import PropTypes from "prop-types";
import { Button } from "antd";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as Actions from "../actions";

class BookOrderRow extends React.Component {
  state = {
    isDisabled: {}
  };

  handleAdd = () => {
    this.props.actions.disableButton(this.props.book.id);
    this.props.actions.addToCart(this.props.book);
    this.props.actions.initQuantity(this.props.book.id);
    this.props.actions.initQuantityPrice(
      this.props.book.id,
      this.props.book.price
    );
  };
  render() {
    const { isButtonDisabled } = this.props; //should be called are buttons disabled instead
    const { id, title, author } = this.props.book;
    let isDisabled = false;
    if (typeof isButtonDisabled[id] != "undefined" && isButtonDisabled[id]) {
      isDisabled = true;
    }
    return (
      <tr className="table-body">
        <td>{this.props.book.title}</td>
        <td>{this.props.book.author}</td>
        <td>
          <Button
            type="primary"
            //disabled={this.state.isDisabled[this.props.book.id] || false}
            disabled={isDisabled}
            onClick={this.handleAdd}
          >
            Add To Cart
          </Button>
        </td>
      </tr>
    );
  }
}

BookOrderRow.propTypes = {
  book: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    isButtonDisabled: state.isButtonDisabled
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BookOrderRow);
