import Initial from './Pokemons';

export default async function Card () {

  return await Initial().then(pokemons => {
    return Object.entries(pokemons).map(data => {

      if (data[0] == "pikachu") return;

      const pokemon = data[1];
      const types = pokemon.types.map(t => t.type.name);
      
      return `
      <section class="iniciais__item" data-type="${types}" data-id="${pokemon.id}">
        <figure class="iniciais__imagem">
          <img src="${pokemon.avatar}" alt="${pokemon.name}">
        </figure>
        <p class="iniciais__descricao">${pokemon.description}</p>
        <button class="iniciais__botao" data-type="${types}" data-id="${pokemon.id}">Pokédex</button>
      </section>
      `;
  
    }).join("");
    
  })

};