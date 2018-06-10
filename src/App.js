import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
//import BooksTable from './containers/BooksTable';
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

export default App;
