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
    console.log(`Added ${this.props.book.title}`);
    console.log(`Key is ${this.props.book.id}`);
    this.setState(prevState => {
      const index = this.props.book.id;
      const isDisabled = {
        ...prevState.isDisabled,
        [index]: !prevState.isDisabled[index]
      };
      console.log(isDisabled);
      return { isDisabled };
    });
    this.props.actions.addToCart(this.props.book);
    //this.setState({ isDisabled: !this.state.isDisabled });
    //We are doing this the React way first
    this.props.handleAddCart(this.props.book);
  };
  render() {
    return (
      <tr className="table-body">
        <td>{this.props.book.title}</td>
        <td>{this.props.book.author}</td>
        <td>
          <Button
            type="primary"
            disabled={this.state.isDisabled[this.props.book.id] || false}
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
    isAdded: state.isAdded.data //change here
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BookOrderRow);
