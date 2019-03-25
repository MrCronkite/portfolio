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
          <h2>About me</h2>
          <div className="cointainer">
          <div className="row justify-content-md-center">
    <div className="col-md-auto">
       <p>Привет! Меня зовут Алёна Батицкая. Я — верстальщик. Большую часть времени я живу в Санкт-Петербурге. Но часто путешествую, люблю посещать новые места. Могу быстро собрать чемодан и уехать. Поэтому я ищу удалённую работу. В прошлой жизни работала руководителем IT‑проектов в Эр‑Телеком и Индустрия Медиа. 3 года назад решила изменить свою жизнь и занялась изучением вёрстки и frontend‑разработки. Последние два года я являюсь старшим аспирантом, методистом и тренером в Нетологии. Менеджерский опыт научил меня серьёзно относиться к дедлайнам. С пониманием отношусь к авралам, но долгая работа в постоянном напряжении не идет мне на пользу (с кем‑то бывает иначе?). Успешно приручила комплекс студента и использую его для постоянного саморазвития. Что в нашей области является огромным плюсом. Я неконфликтный человек с высоким уровнем эмпатии. Легко вливаюсь в коллектив. Активно проявляю себя в комьюнити: пишу и перевожу статьи, выступаю на митапах, веду пет-проект Junior Friendly. Даже в подкасте записалась — SPB Frontend Drinkcast 😁</p>
    </div>
    <div className="col-md-auto">
      <img src="//public/1485619668179451547.jpg"/>
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



