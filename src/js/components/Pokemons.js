import imgBulbassauro from './../../assets/icon-bullbasaur.svg';
import imgSquirtle from './../../assets/icon-squirtle.svg';
import imgCharmander from './../../assets/icon-charmander.svg';
import imgPikachu from './../../assets/icon-pikachu.svg';

const Iniciais = {
  bulbassauro: {
    id: "#001",
    nome: "Bulbassauro",
    img: imgBulbassauro,
    descricao: "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.",
    tipo: ["Planta", "Veneno"]
  },
  squirtle: {
    id: "#004",
    nome: "Squirtle",
    img: imgSquirtle,
    descricao: "Squirtle's shell is not merely used for protection. The shell's rounded shape and the grooves on its surface help minimize resistance in water, enabling this Pokémon to swim at high speeds.",
    tipo: ["Água"]
  },
  charmander: {
    id: "#007",
    nome: "Charmander",
    img: imgCharmander,
    descricao: "The flame that burns at the tip of its tail is an indication of its emotions. The flame wavers when Charmander is enjoying itself. If the Pokémon becomes enraged, the flame burns fiercely.",
    tipo: ["Fogo"]
  },
  pikachu: {
    id: "#025",
    nome: "Pikachu",
    img: imgPikachu,
    descricao: "Whenever Pikachu comes across something new, it blasts it with a jolt of electricity. If you come across a blackened berry, it's evidence that this Pokémon mistook the intensity of its charge.",
    tipo: ["Elétrico"]
  } 
}

export default Iniciais;