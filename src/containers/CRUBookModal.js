import React, { Component } from "react";
import { Modal, Button } from "antd";
import PropTypes from "prop-types";
import SingleInput from "../components/SingleInput";
import FormErrors from "../components/FormErrors";

class BookModal extends Component {
  state = {
    visible: false,
    confirmLoading: false,
    title: this.props.title || "",
    author: this.props.author || "",
    email: this.props.email || "",
    price: this.props.price || "",
    id: this.props.id || "",
    formErrors: {
      title: "field is empty",
      author: "field is empty",
      email: "field is invalid"
    },
    titleValid: false,
    authorValid: false,
    emailValid: false,
    formValid: false,
    showErrors: false
  };

  showModal = () => {
    this.setState({
      visible: true
    });
    this.validateField("title", this.state.title);
    this.validateField("author", this.state.author);
    this.validateField("email", this.state.email);
  };

  validateField(fieldName, value) {
    let formErrors = this.state.formErrors;
    let titleValid = this.state.titleValid;
    let emailValid = this.state.emailValid;
    let authorValid = this.state.authorValid;
    let emailMatch;

    switch (fieldName) {
      case "title":
        titleValid = value.length > 0;
        formErrors.title = titleValid ? "" : "field is empty";
        break;
      case "author":
        authorValid = value.length > 0;
        formErrors.author = authorValid ? "" : "field is empty";
        break;
      case "email":
        emailMatch = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        emailValid = emailMatch === null ? false : true;
        formErrors.email = emailValid ? "" : "field is invalid";
        break;
      default:
        break;
    }

    this.setState(
      {
        formErrors: formErrors,
        titleValid: titleValid,
        authorValid: authorValid,
        emailValid: emailValid
      },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({
      formValid:
        this.state.titleValid && this.state.authorValid && this.state.emailValid
    });
  }

  handleUserInput = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
  };

  handleOk = () => {
    if (this.state.formValid) {
      let values = {
        title: this.state.title,
        author: this.state.author,
        email: this.state.email,
        price: this.state.price,
        id: this.state.id
      };
      //Send back values to parent to update book
      this.props.handleData(values);
      this.setState({
        confirmLoading: true,
        showErrors: false
      });

      setTimeout(() => {
        this.setState({
          visible: false,
          confirmLoading: false
        });
      }, 2000);
    } else {
      this.setState({ showErrors: true });
    }
  };

  handleCancel = () => {
    this.setState({
      visible: false,
      showErrors: false
    });
  };

  render() {
    const { visible, confirmLoading } = this.state;
    const showErrors = this.state.showErrors;
    const formError = showErrors ? (
      <FormErrors formErrors={this.state.formErrors} />
    ) : (
      <div />
    );
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          {this.props.btnText}
        </Button>
        <Modal
          title={this.props.header}
          visible={visible}
          onOk={this.handleOk}
          confirmLoading={confirmLoading}
          onCancel={this.handleCancel}
        >
          {formError}
          <SingleInput
            header="Book title:"
            content={this.state.title}
            name="title"
            onChange={this.handleUserInput}
          />
          <SingleInput
            header="Book author:"
            content={this.state.author}
            name="author"
            onChange={this.handleUserInput}
          />
          <SingleInput
            header="Author Email:"
            content={this.state.email}
            name="email"
            onChange={this.handleUserInput}
          />
          <SingleInput
            header="Book Price (AUD)"
            content={this.state.price}
            name="price"
            onChange={this.handleUserInput}
          />
        </Modal>
      </div>
    );
  }
}

BookModal.propTypes = {
  btnText: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  handleData: PropTypes.func.isRequired
};

export default BookModal;
