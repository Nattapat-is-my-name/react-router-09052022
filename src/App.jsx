import React, { Component } from 'react'
import Main from './components/Main.component';
import { BrowserRouter as Router } from 'react-router-dom';
import './css/App.css';

export default class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Main />
        </div>
      </Router>
    );
  }
}
