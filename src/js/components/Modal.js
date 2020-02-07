import Inicial from './Pokemons';

export default function Modal (id) {

  const pokemon = Object.entries(Inicial).map(item => item[1]).filter(pok => pok.id == id);

  return `
    <section class="iniciais__modal--item" data-id="${pokemon[0].id}">
      <span class="iniciais__modal--fechar" data-tipo="${pokemon[0].tipo[0]}">X</span>
      <figure class="imagem">
        <img src="${pokemon[0].img}" alt="${pokemon[0].nome}">
      </figure>
      <section class="basico">
        <section class="identificacao">
          <span>${pokemon[0].id}</span>
          <h2>${pokemon[0].nome}</h2>
        </section>
        <p class="descricao">${pokemon[0].descricao}</p>
      </section>
      <section class="anatomia">
        <section class="item">
          <h3>Altura</h3>
          <p>5" 03"</p>
        </section>
        <section class="item">
          <h3>Peso</h3>
          <p>0.2 lbs</p>
        </section>
        <section class="item">
          <h3>Categoria</h3>
          <p>Gas</p>
        </section>
        <section class="item">
          <h3>Gêneros</h3>
          <p>M/F</p>
        </section>
      </section>
      <section class="batalha">
        <section class="caracteristicas">
          <section class="tipo">
            <h4>Tipo</h4>
            <div>${pokemon[0].tipo[0]}</div>
            <div>${pokemon[0].tipo[1]}</div>
          </section>
          <section class="fraqueza">
            <h4>Fraqueza</h4>
            <div></div>
            <div></div>
            <div></div>
          </section>
        </section>
        <section class="habilidades">
          <section class="habilidade">
            <h4>HP</h4>
            <p class="nivel">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </p>
          </section>
          <section class="habilidade">
            <h4>Ataque</h4>
            <p class="nivel">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </p>
          </section>
          <section class="habilidade">
            <h4>Defesa</h4>
            <p class="nivel">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </p>
          </section>
          <section class="habilidade">
            <h4>Velocidade</h4>
            <p class="nivel">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </p>
          </section>
        </section>
      </section>
      <section class="evolucoes">
        <h3 data-tipo="${pokemon[0].tipo[0]}">Evoluções</h3>
        <section class="evolucoes__wrapper">
          <section class="forma">
            <figure>
              <img src="${Inicial["pikachu"].img}" alt="${Inicial["pikachu"].nome}">
            </figure>
            <h4 class="forma__nome">${Inicial["pikachu"].nome}</h4>
            <p class="tipo">${Inicial["pikachu"].tipo[0]}</p>
          </section>
          <section class="forma">
            <figure>
              <img src="${Inicial["pikachu"].img}" alt="${Inicial["pikachu"].nome}">
            </figure>
            <h4 class="forma__nome">${Inicial["pikachu"].nome}</h4>
            <p class="tipo">${Inicial["pikachu"].tipo[0]}</p>
          </section>
          <section class="forma">
            <figure>
              <img src="${Inicial["pikachu"].img}" alt="${Inicial["pikachu"].nome}">
            </figure>
            <h4 class="forma__nome">${Inicial["pikachu"].nome}</h4>
            <p class="tipo">${Inicial["pikachu"].tipo[0]}</p>
          </section>
        </section>
      </section>
      <button class="btn-escolher" data-tipo="${pokemon[0].tipo[0]}">Eu escolho você!</button>
    </section>
    `

}