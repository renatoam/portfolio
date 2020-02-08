import Header from "./components/Header";
import Card from './components/Card';
import { qs } from './helper/helper';
import Events from './helper/events';
import './../css/style.css';

document.addEventListener('readystatechange', event => {

  if (event.target.readyState === "interactive") {

    qs.sl('header').innerHTML = Header;
    
    Card().then(data => {
    
      qs.sl('.iniciais__wrapper').innerHTML = data

      Events();
    
    });
  }

}); 
