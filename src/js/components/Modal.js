import pokemons from './Pokemons';
import { setNumber, getEvolutions } from './../helper/helper';

export default async function Modal (id) {

  return await pokemons().then(async pokemons => {

    const pokemon = Object.entries(pokemons).map(item => item[1]).filter(pok => pok.id == id).reduce((t, pokemon) => pokemon);
    const number = setNumber(pokemon.id);
    const evolutions = await getEvolutions(pokemon.id);
    const types = pokemon.types.map(t => t.type.name);

    const schemaTypes = (() => {

      return types.map(type => {
        return `
          <div>${type}</div>
        `
      });

    })();

    const schemaEvolutions = (() => {
      return evolutions.map(evo => {
        return `
        <section class="forma">
          <figure>
            <img src="${evo.img}" alt="${evo.name}">
          </figure>
          <h4 class="forma__nome">${evo.name}</h4>
          <p class="tipo">${types}</p>
        </section>
        `
      }).join("");
    })();

    return `
      <section class="iniciais__modal--item" data-id="${pokemon.id}">
        <span class="iniciais__modal--fechar" data-type="${types}">X</span>
        <figure class="imagem">
          <img src="${pokemon.avatar}" alt="${pokemon.name}">
        </figure>
        <section class="basico">
          <section class="identificacao">
            <span>${number}</span>
            <h2>${pokemon.name}</h2>
          </section>
          <p class="descricao">${pokemon.description}</p>
        </section>
        <section class="anatomia">
          <section class="item">
            <h3>Altura</h3>
            <p>${pokemon.height}</p>
          </section>
          <section class="item">
            <h3>Peso</h3>
            <p>${pokemon.weight} lbs</p>
          </section>
          <section class="item">
            <h3>Habilidades</h3>
            <p>${pokemon.abilities[0].ability.name}</p>
          </section>
          <section class="item">
            <h3>Habilidades</h3>
            <p>${pokemon.abilities[1].ability.name}</p>
          </section>
        </section>
        <section class="batalha">
          <section class="caracteristicas">
            <section class="tipo">
              <h4>Tipo</h4>
              ${schemaTypes}
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
          <h3 data-type="${types}">Evoluções</h3>
          <section class="evolucoes__wrapper">${schemaEvolutions}</section>
        </section>
        <button class="btn-escolher" data-type="${types}">Eu escolho você!</button>
      </section>
      `

  })

}