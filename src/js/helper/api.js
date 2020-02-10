const base = "https://pokeapi.co/api/v2/";
const axios = require('axios');

const Pokedex = {
  
  Pokemons: async params => {

    if (params == void 0) params = "";
    
    const response = await fetch(`${base}pokemon/${params}`);
    const pokemons = await response.json();

    return pokemons;

  },

  Evolutions: async id => {

    if (id == void 0) id = "";
    
    const response = await fetch(`${base}evolution-chain/${id}`);
    const evolutions = await response.json();

    return evolutions;

  },

  Types: async type => {

    if (type == void 0) type = "";
    
    const response = await fetch(`${base}type/${type}`);
    const types = await response.json();

    return types;

  }

}

export default Pokedex;

// Disclaimer: response.json() ou response.text() só podem ser consumidos uma única vez,
// por isso, quando usei console.log e depois o .then, o 'body' da resposta foi bloqueado
// Nesse caso, clonamos a resposta pra poder usar mais de uma vez (no console e no .then)
// console.log("response.json", response.clone().json());
