import React, { Component } from 'react';
import './App.css';
import BooksTable from './containers/BooksTable';

class App extends Component {
  render() {
    return (
      <div>
        <BooksTable/>
      </div>
    );
  }
}

export default App;
