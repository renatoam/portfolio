import { qs } from './helper';
import Modal from './../components/Modal';

export default function Events () {
  
  const login = qs.sl('.login');
  const modalLogin = qs.sl('.login__modal');
  const pokedex = qs.sla('.iniciais__botao');
  const modalInicialContainer = qs.sl('.iniciais__modal');
  const modalInicialItemsWrapper = qs.sl('.iniciais__modal--wrapper');
  const modalInicialItem = qs.sla('.iniciais__modal--item');
  const fechaModalPokedex = qs.sla('.iniciais__modal--fechar');

  login.addEventListener('click', function(){

    modalLogin.style.display = "block"; 
  
  });
  
  pokedex.forEach(element => {

    element.addEventListener('click', () => {

      modalInicialContainer.classList.add('show');
      modalInicialItemsWrapper.setAttribute('data-tipo', element.getAttribute('data-tipo'))
      modalInicialItemsWrapper.innerHTML = Modal(element.getAttribute('data-id'));
    
    });

  });

  if (modalInicialItem.isConnected) {

    fechaModalPokedex.forEach(element => {
  
      console.log("Fechar", element);
  
      element.addEventListener('click', () => {
  
        console.log("evetn", event.target);
      
        modalInicialContainer.classList.remove('show');
        modalInicialItemsWrapper.innerHTML = "";
      
      });
  
    });

  }

}