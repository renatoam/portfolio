import logo from './../../assets/logo.png';
import pokebola from './../../assets/icon-pokebola.svg';
import procurar from './../../assets/icon-procurar.svg';
import user from './../../assets/icon-user.svg';

export default (function Header() {

  return `
    <section class="header">
      <section class="logo">
        <h1 class="logo__imagem">
          <picture>
            <source srcset="${pokebola}" media="(max-width: 768px)">
            <source srcset="${logo}">
            <img srcset="${pokebola}" alt="Pokébola">
        </picture>
        </h1>
      </section>
      <section class="busca">
        <input type="text" name="busca" id="busca" placeholder="Buscar pokémon...">
        <figure class="busca__imagem">
          <img src="${procurar}" alt="Busca">
        </figure>
      </section>
      <section class="login">
        <figure class="login__imagem">
          <img src="${user}" alt="Login">
        </figure>
        <p>Login</p>

        <section class="login__modal">
          <section class="login__modal--overlay"></section>
          <section class="login__modal--container">
            <h2>Login</h2>
            <label for="usuario">Usuário: </label>
            <input type="text" name="usuario" id="usuario">
            <label for="senha">Senha:</label>
            <input type="password" name="senha" id="senha">
            <button class="login__modal--entrar" data-tipo="fogo">ENTRAR</button>
          </section>
        </section>
      </section>
    </section>
  `

})();