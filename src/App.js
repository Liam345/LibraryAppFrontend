import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import { connect } from "react-redux";
import PrimaryLayout from "./layouts/PrimaryLayout";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Route path="" component={PrimaryLayout} />
        </BrowserRouter>
      </div>
    );
  }
}
// function mapStateToProps(state) {
//   // return {
//   //   bookList: this.state.bookList
//   // };
// }

export default connect()(App);
