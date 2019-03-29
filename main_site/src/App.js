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
   <button type="button" className="btn btn-warning down_button"><i className="fa fa-arrow-circle-o-down"></i></button>
</div>
        <div className = "about_me">
          <div className="cointainer">
          <div className="row justify-content-md-center">
    <div className="col-md-auto text">
    <h2>About me</h2>
       <p>Привет! Меня зовут Владислав Шимченко. Я — верстальщик.</p>
       <p> Большую часть времени я живу в Минске. Но иногда путешествую, люблю посещать новые места. Могу быстро собрать чемодан и уехать. Поэтому я хотел бы удалённую работу.</p>
       <p> 3 года назад решил изменить свою жизнь и занялся изучением вёрстки и frontend‑разработки.</p>
       <p> Опыт в универе научил меня серьёзно относиться к дедлайнам. С пониманием отношусь к авралам, но долгая работа в постоянном напряжении не идет мне на пользу (с кем‑то бывает иначе?).</p>
       <p> Успешно приручил комплекс студента и использую его для постоянного саморазвития. Что в нашей области является огромным плюсом. Я неконфликтный человек с высоким уровнем эмпатии. Легко вливаюсь в коллектив.</p>
    </div>
    <div className="col-md-auto">
      <img src="./img/logo.jpg"/>
    </div>
  </div>
          </div>
        </div>
        <div className = "skills">
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
        <div className="myWorks">
        <div className="bd-example">
          <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="./img/less.png" className="d-block w-100" alt="nothing"/>
        <div className="carousel-caption d-none d-md-block">
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </div>
      </div>
      <div className="carousel-item">
        <img src="./img/sass.png" className="d-block w-100" alt="nothing"/>
        <div class="carousel-caption d-none d-md-block">
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
      <div className="carousel-item">
        <img src="./img/viar.png" className="d-block w-100" alt="nothing"/>
        <div className="carousel-caption d-none d-md-block">
          <h5>Third slide label</h5>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </div>
      </div>
    </div>
    <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="sr-only">Next</span>
    </a>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;



