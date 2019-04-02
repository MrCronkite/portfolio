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
    <a className="nav-link" href="#about_me">about me</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#skills">skills</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#works">my works</a>
  </li>
</ul>
   <h4>My love to work helps me to do it well, with attention to detail.</h4>
   <button type="button" className="btn btn-warning down_button"><i className="fa fa-arrow-circle-o-down"></i></button>
</div>
        <div id="about_me" className = "about_me">
          <div className="cointainer">
          <div className="row justify-content-md-center">
    <div className="col-md-auto text">
    <h2>About me</h2>
       <p>Hello! My name is Vladislav Shimchenko. I am web developer.</p>
       <p> Mostly I live in Minsk. But sometimes I like to travel, visit new places. I am ready to go in any moment. That’s why am interested in teleworking.</p>
       <p> Three years ago I decided to change my life and start learning frontend development.</p>
       <p> University experience taught me to be serious about deadlines. I understand that sometimes work should be done in a short time, but working under pressure doesn’t do me any good (and who did).</p>
       <p> I constantly trying to develop myself. That is huge plus in our field. I am non-conflict person with high empathy level. Joining the team is always easy to me.</p>
    </div>
    <div className="col-md-auto">
      <img src="./img/logo.jpg" alt=""/>
    </div>
  </div>
          </div>
        </div>
        <div id="skills" className = "skills">
          <h2>Skills</h2>
          <h3>HTML/CSS</h3>
          <div className="progress">
            <div className="progress-bar bg-warning" role="progressbar" style={{width: "85%"}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">85%</div>
          </div>
          <h3>JavaScript</h3>
          <div className="progress">
            <div className="progress-bar bg-warning" role="progressbar" style={{width: "60%"}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">60%</div>
          </div>
          <h3>Gulp/Webpack</h3>
          <div className="progress">
            <div className="progress-bar bg-warning" role="progressbar" style={{width: "50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div>
          </div>
          <h3>React/Redux</h3>
          <div className="progress">
            <div className="progress-bar bg-warning" role="progressbar" style={{width: "40%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">40%</div>
          </div>
        </div>
        <div id="works" className="myWorks">
        <div className="content-carousel">
          <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="4"></li>
          </ol>
          <div className="carousel-inner">
      <div className="carousel-item active">
        <img  src="./img/less.png" className="d-block w-100" alt="nothing"/>
        <div className="carousel-caption d-none d-md-block">
        <a  href="https://github.com/MrCronkite/portfolio/blob/master/README.md#less">check LESS project</a>
        </div>
      </div>
      <div className="carousel-item">
        <img src="./img/sass.png" className="d-block w-100" alt="nothing"/>
        <div className="carousel-caption d-none d-md-block">
        <a  href="https://github.com/MrCronkite/portfolio/blob/master/README.md#sass">check SASS project</a>
        </div>
      </div>
      <div className="carousel-item">
        <img src="./img/react.png" className="d-block w-100" alt="nothing"/>
        <div className="carousel-caption d-none d-md-block">
        <a  href="https://github.com/MrCronkite/portfolio/blob/master/README.md#reactjs">check REACT project</a>
        </div>
      </div>
      <div className="carousel-item">
        <img src="./img/viar.png" className="d-block w-100" alt="nothing"/>
        <div className="carousel-caption d-none d-md-block">
        <a  href="https://github.com/MrCronkite/portfolio/blob/master/README.md#htmlcss">check HTML/CSS project</a>
        </div>
      </div>
      <div className="carousel-item">
        <img src="./img/transit.png" className="d-block w-100" alt="nothing"/>
        <div className="carousel-caption d-none d-md-block">
         <a  href="https://github.com/MrCronkite/portfolio/blob/master/README.md#html5css3">check HTML5/CSS33 project</a>
        </div>
      </div>
    </div>
    <a className="carousel-control-prev " href="#carouselExampleCaptions" role="button" data-slide="prev">
      <span className="carousel-control-prev-icon button__navs" aria-hidden="true"></span>
      <span className="sr-only button__navs">Previous</span>
    </a>
    <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-sanlide="next">
      <span className="carousel-control-next-icon button__navs" aria-hidden="true"></span>
      <span className="sr-only button__navs">Next</span>
    </a>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;



