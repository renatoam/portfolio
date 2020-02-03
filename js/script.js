const login = document.querySelector('.login');
const modalLogin = document.querySelector('.login__modal');
const pokedex = document.querySelector('.iniciais__botao');
const modalPokedex = document.querySelector('.iniciais__modal');
const fechaModalPokedex = document.querySelector('.iniciais__modal--fechar');

login.addEventListener('click', function(){

  modalLogin.style.display = "block"; 

});

pokedex.addEventListener('click', function() {

  modalPokedex.classList.add('show');

});

fechaModalPokedex.addEventListener('click', function() {

  modalPokedex.classList.remove('show');

});

$(document).ready(function(){

  $('.banner').slick();

})