import React, { Component } from 'react';
import { Modal, Button } from 'antd';
import PropTypes from 'prop-types';
import SingleInput from '../components/SingleInput';

class BookModal extends Component {
  state = {
    visible: false,
    confirmLoading:false,
    title:this.props.title||'',
    author:this.props.author||'',
    id:this.props.id||''
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleTitleChange = (e) =>{
    this.setState({title:e.target.value});
  }

  handleAuthorChange = (e) =>{
    this.setState({author:e.target.value});
  }

  handleOk = () => {
    let values = {
      title: this.state.title,
      author: this.state.author,
      id:this.state.id
    };

    this.props.handleData(values);
    this.setState({
      confirmLoading:true,
    });

    setTimeout(() =>{
      this.setState({
        visible:false,
        confirmLoading:false
      });
    },2000)
  }

  handleCancel = () => {
    this.setState({
      visible: false,
    });
  }

  render() {
    const { visible, confirmLoading } = this.state;
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>{this.props.btnText}</Button>
        <Modal title={this.props.header}
          visible={visible}
          onOk={this.handleOk}
          confirmLoading={confirmLoading}
          onCancel={this.handleCancel}
        >
          <SingleInput 
          header="Book title:"
          content={this.state.title}
          onChange={this.handleTitleChange}
          
          />
          <SingleInput 
          header="Book author:"
          content={this.state.author}
          onChange={this.handleAuthorChange}
          />

        </Modal>
      </div>
    );
  }
}

BookModal.propTypes = {
    btnText:PropTypes.string.isRequired,
    header:PropTypes.string.isRequired,
    handleData: PropTypes.func.isRequired
};

export default BookModal;