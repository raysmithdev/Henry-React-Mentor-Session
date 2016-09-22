import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import Intro from './Intro';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Intro
          title="Welcome"
          name="Henry"
        />
      </div>
    );
  }
}

export default App;
