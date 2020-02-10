import pokemons from './Pokemons';
import pokebola from './../../assets/icon-pokebola.svg'
import { setNumber, getEvolutions, getWeakness } from './../helper/helper';

export default async function Modal (id) {

  return await pokemons().then(async pokemons => {

    const pokemon = Object.entries(pokemons).map(item => item[1]).filter(pok => pok.id == id).reduce((t, pokemon) => pokemon);
    const number = setNumber(pokemon.id);
    const evolutions = await getEvolutions(pokemon.id);
    const types = pokemon.types.map(t => t.type.name);
    const weakness = await getWeakness(types);
    const stats = pokemon.stats.map(item => {
      return {
        base: Math.round(item.base_stat / 10), 
        name: item.stat.name
      }
    });

    const schemaStats = (() => {

      const createLevel = x => {
        let template = "";
        for (let i = 0; i < x; i++) {
          template += '<span></span>'
        }
        return template;
      }

      return stats.map(stat => {
        return `
          <section class="habilidade">
            <h4>${stat.name}</h4>
            <p class="nivel">
              ${createLevel(stat.base)}
            </p>
          </section>  
        `
      }).join("")

    })();

    const schemaTypes = (() => {

      return types.map(type => {
        return `
          <div data-type-label="${type}">${type}</div>
        `
      }).join("");

    })();

    const schemaEvolutions = (() => {
      return evolutions.map(evo => {
        return `
        <section class="forma">
          <figure>
            <img src="${evo.img}" alt="${evo.name}">
          </figure>
          <h4 class="forma__nome">${evo.name}</h4>
          <p class="tipo" data-type-label="${types}">${types}</p>
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
              <section class="tipo__wrapper">
                ${schemaTypes}
              </section>
            </section>
            <section class="fraqueza">
              <h4>Fraqueza</h4>
              <section class="fraqueza__wrapper">
                ${weakness}
              </section>
            </section>
          </section>
          <section class="habilidades">${schemaStats}</section>
        </section>
        <section class="evolucoes">
          <h3 data-type="${types}">Evoluções</h3>
          <section class="evolucoes__wrapper">${schemaEvolutions}</section>
        </section>
        <figure class="btn-escolher" data-type="${types}">
          <img src="${pokebola}" alt="${pokemon.name}">
        </figure>
      </section>
      `

  })

}