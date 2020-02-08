import { qs } from './helper';
import Modal from './../components/Modal';

export default function Events () {
  
  const login = qs.sl('.login');
  const modalLogin = qs.sl('.login__modal');
  const pokedex = qs.sla('.iniciais__botao');

  login.addEventListener('click', function(){

    modalLogin.style.display = "block"; 
  
  });

  pokedex.forEach(element => {
  
    element.addEventListener('click', () => {

      Modal(element.getAttribute('data-id')).then(data => {
    
        const modalInicialContainer = qs.sl('.iniciais__modal');
        const modalInicialItemsWrapper = qs.sl('.iniciais__modal--wrapper');
        let fechaModalPokedex = "";
        
        const fnAbreModalPokedex = element => {
          modalInicialContainer.classList.add('show');
          modalInicialItemsWrapper.setAttribute('data-type', element.getAttribute('data-type'))
          modalInicialItemsWrapper.innerHTML = data;
        }
      
        const fnFechaModalPokedex = () => {
          modalInicialContainer.classList.remove('show');
          setTimeout(() => { modalInicialItemsWrapper.innerHTML = "" }, 500)
        }

        fnAbreModalPokedex(element);

        fechaModalPokedex = qs.sla('.iniciais__modal--fechar');
        fechaModalPokedex.forEach(element => element.addEventListener('click', fnFechaModalPokedex));
    
      }); 
    
    });

  }); 

}