import imgBullbasaur from './../../assets/icon-bullbasaur.svg';
import imgSquirtle from './../../assets/icon-squirtle.svg';
import imgCharmander from './../../assets/icon-charmander.svg';
import imgPikachu from './../../assets/icon-pikachu.svg';
import Pokedex from './../helper/api';

const setInitials = async () => {
  
  const newBullbasaur = {
    avatar: imgBullbasaur,
    description: "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger."
  }

  const newCharmander = {
    avatar: imgCharmander,
    description: "The flame that burns at the tip of its tail is an indication of its emotions. The flame wavers when Charmander is enjoying itself. If the Pokémon becomes enraged, the flame burns fiercely."
  }

  const newSquirtle = {
    avatar: imgSquirtle,
    description: "Squirtle's shell is not merely used for protection. The shell's rounded shape and the grooves on its surface help minimize resistance in water, enabling this Pokémon to swim at high speeds."
  }

  const newPikachu = {
    avatar: imgPikachu,
    description: "Whenever Pikachu comes across something new, it blasts it with a jolt of electricity. If you come across a blackened berry, it's evidence that this Pokémon mistook the intensity of its charge."
  }
  
  const bullbasaur = Object.assign(await Pokedex.Pokemons('1'), newBullbasaur)
  const charmander = Object.assign(await Pokedex.Pokemons('4'), newCharmander)
  const squirtle = Object.assign(await Pokedex.Pokemons('7'), newSquirtle)
  const pikachu = Object.assign(await Pokedex.Pokemons('25'), newPikachu)

  return { bullbasaur, charmander, squirtle, pikachu };

}

export default setInitials;