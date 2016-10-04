import React, { Component } from 'react';
import './App.css';
require('es6-promise').polyfill();
require('isomorphic-fetch');

class App extends Component {

  constructor() {
    super();
    this.state = {
      users: [],
      loading: true
    }
  }

  componentDidMount() {
    const url = 'http://api.randomuser.me/?results=5000';

    fetch(url)
    .then((response) => {
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        return response.json();
    })
    .then((data) => {
        this.setState({ loading: false })
    });
  }

  render() {
    return (
      <div className="App">
        Hello World!
        {this.state.loading ? <p>Loading...</p> : <p>Finished loading!</p>}
      </div>
    );
  }
}

export default App;
