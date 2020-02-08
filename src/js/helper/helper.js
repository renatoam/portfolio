import Pokedex from './api';

const qs = {

  sl: element => document.querySelector(element),
  sla: element => document.querySelectorAll(element)

}

const setNumber = idPokemon => {

  const id = Number(idPokemon);

  if (id < 10) return '#00' + id;
  if (id > 9 && id < 100) return '#0' + id;
  if (id > 99) return '#' + id;

}

const getEvolutions = async idPokemon => {

  let number = Number(idPokemon);
  let forms = [];

  let levelOne = await Pokedex.Pokemons(number).then(data => {
    forms.push({
      name: data.name,
      img: data.sprites.front_default
    })
  });

  let levelTwo = await Pokedex.Pokemons(number + 1).then(data => {
    forms.push({
      name: data.name,
      img: data.sprites.front_default
    })
  });

  let levelThree = await Pokedex.Pokemons(number + 2).then(data => {
    forms.push({
      name: data.name,
      img: data.sprites.front_default
    })
  });

  return forms;

}

export {qs, setNumber, getEvolutions};