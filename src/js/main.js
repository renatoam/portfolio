import Header from "./components/Header";
import Card from './components/Card';
// import Modal from './components/Modal';
import { qs } from './helper/helper';
import Events from './helper/events';
import './../css/style.css';

document.addEventListener('readystatechange', event => {

  if (event.target.readyState === "interactive") {

    qs.sl('header').innerHTML = Header;
    qs.sl('.iniciais__wrapper').innerHTML = Card(["bulbassauro", "squirtle", "charmander"]);
  }

  if (event.target.readyState === "complete") {

    Events()

  }

});

// document.addEventListener("DOMContentLoaded", () => {

//   qs.sl('header').innerHTML = Header;
//   qs.sl('.iniciais__wrapper').innerHTML = Card(["bulbassauro", "squirtle", "charmander"]);
//   qs.sl('.iniciais__modal--wrapper').innerHTML = Modal(["bulbassauro", "squirtle", "charmander"]);

//   qs.sl('header').isConnected ? Events() : false;

// }); 
