import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
        <i class="fa fa-rocket"></i>
        </div>
        <div className = "about_me">
          <h2>about me</h2>
          <p></p>
        </div>
        <div className = "my_works">
          <h2>my works</h2>
        </div>
      </div>
    );
  }
}

export default App;
