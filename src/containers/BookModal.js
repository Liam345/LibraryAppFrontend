import React, { Component } from 'react';
import { Modal, Button } from 'antd';
import PropTypes from 'prop-types';
import SingleInput from '../components/SingleInput';

class BookModal extends Component {
  state = {
    visible: false,
  }

  showModal = () => {
    this.setState({
      visible: true,
      confirmLodaing:false,
    });
  }

  

  handleOk = () => {
    this.props.postData();
    this.setState({
      confirmLodaing:true,
    });

    setTimeout(() =>{
      this.setState({
        visible:false,
        confirmLodaing:false
      });
    },2000)
  }
  handleCancel = () => {
    console.log('Clicked cancel button');
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
          content={this.props.title}
          //controlFunc={this.handleTitleChange}
          onChange={this.props.controlTitleFunc}
          
          />
          <SingleInput 
          header="Book author:"
          content={this.props.author}
          //controlFunc={this.handleAuthorChange}
          onChange={this.props.controlAuthorFunc}
          />

        </Modal>
      </div>
    );
  }
}

// BookModal.propTypes = {
//     btnText:PropTypes.string.isRequired,
//     header:PropTypes.string.isRequired,
//     title:PropTypes.string.isRequired,
//     author:PropTypes.string.isRequired,
//     controlTitleFunc: PropTypes.func.isRequired,
//     controlAuthorFunc: PropTypes.func.isRequired,
//     //function to handle handleOk (i.e. submit) function
// };

export default BookModal;
//1) the state items should'nt come from state but in turn should come from props so as
//it can also handle edit functionality

