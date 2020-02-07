import Inicial from './Pokemons';

export default function Card (pokemons) {

  return pokemons.map(pokemon => {

    return `
    <section class="iniciais__item" data-tipo="${Inicial[pokemon].tipo[0]}" data-id="${Inicial[pokemon].id}">
      <figure class="iniciais__imagem">
        <img src="${Inicial[pokemon].img}" alt="${Inicial[pokemon].nome}">
      </figure>
      <p class="iniciais__descricao">${Inicial[pokemon].descricao}</p>
      <button class="iniciais__botao" data-tipo="${Inicial[pokemon].tipo[0]}" data-id="${Inicial[pokemon].id}">Pokédex</button>
    </section>
    `;

  }).join("");


};