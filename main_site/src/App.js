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
        <div className="container"></div>
        </div>
      </div>
    );
  }
}

export default App;



