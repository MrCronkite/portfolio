import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="header">
      <h1>I <i class="fa fa-heart"></i> JavaScript</h1>
      <ul class="nav justify-content-center">
  <li class="nav-item">
    <a class="nav-link active" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
  </li>
</ul>
   <h4>My love to work helps me to do it well, with attention to detail.</h4>
   <button type="button" class="btn btn-warning down_button"><i class="fa fa-arrow-circle-o-down"></i></button>
</div>
        <div className = "about_me">
          <h2>about me</h2>
          <p></p>
        </div>
        <div className = "my_works">
          <h2>my works</h2>
          <div></div>
        </div>
      </div>
    );
  }
}

export default App;
