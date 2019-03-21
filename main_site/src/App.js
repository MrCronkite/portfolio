import React, { Component } from 'react';
import './App.css';



class App extends Component {


  render() {
    return (
      <div className="App">
      <div className="header">
      <h1>I <i id="heart" className="fa fa-heart"></i> JavaScript</h1>
      <ul className="nav justify-content-center">
  <li className="nav-item">
    <a className="nav-link" href="#">about me</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">skills</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">my works</a>
  </li>
</ul>
   <h4>My love to work helps me to do it well, with attention to detail.</h4>
   <button type="button" class="btn btn-warning down_button"><i class="fa fa-arrow-circle-o-down"></i></button>
</div>
        <div className = "about_me">
          <h2>about me</h2>
          <div className="cointainer">
          <div className="row justify-content-md-center">
    <div className="col-md-auto">
      1 of 3
    </div>
    <div className="col-md-auto">
      Variable width content
    </div>
  </div>
          </div>
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



