# Etapas

1. Criei o protótipo em HTML e CSS simples;
2. Criei o ambiente de desenvolvimento com Webpack;
3. Transformei o protótipo em components Javascript;
4. Refiz os componentes com consumo da API PokeApi;
5. Subi o site no Netlify;
6. Finalizar funcionalidades e comportamentos;
7. Refazer alguns componentes com Web Components;
    1. Criar estrutura de componentes com Sass e JS;
    2. Adequar ao paradigma OOP;
    3. Aplicar Design Patterns;
8. Verificar parte de Back-end e aplicar estrutura MVC;
9. Testes;
10. Deploy;

> **Finalizado?** Fazer a mesma aplicação com React.

## Conteúdo Site

- Busca por pokémons
- Escolha do inicial
- Criação de squad pokémon personalizada
  - Traking de usuário (session/local storage)
  - Cadastro de Usuário (login)
- Habilitar pokémons por tipo e exibir listagem
- Escolha de um pokémon por tipo, totalizando 6 pokémons (batalhas oficiais)
- Montar espécie de Super Trunfo, baseado nos stats
- Criar "repositório" de pokémons. Trocados, ganhos em batalha, capturados*, etc.
- Criar páginas específicas para os tipos de pokémons
- Criar páginas para os meus favoritos (Arcanine, Charizard, Hunter, etc.) e para os lendários (Entei, Lugia, Rayquaza, etc.)
- Definir regiões específicas para cada pokémon, como animais de verdade
  - Usar API do Google Maps

> *: Os pokémons capturados serão adquiridos ao resolver os puzzles ** <br>
> **: Puzzles a definir. Sugestões: jogo da memória, quizes, simulação de safari

## Ideias

 A ideia é usar gamification. Então o cara vai ser introduzido com um texto ou alguma forma de informação e vai sendo direcionado às ações. 

1. Ele entra na página e vê a intro. 
2. Ele escolhe o pokémon inicial dele. 
3. Depois, ele terá que escolher mais 5 pokémons em uma lista dividida por tipos. 
4. Cada pokémon tem atributos de batalha e as batalhas serão baseadas nesses atributos.
5. Conforme a pessoa for ganhando, vai recebendo alguma espécie de premiação dentro do jogo.
6. Ele pode adquirir mais pokémons e guardá-los em um "repositório".
7. Pode trocar os pokémons da equipe principal por pokemons do repositório (variar a equipe).
8. Vai ter um sistema de login e rankeamento.
9. Vai ter algumas páginas especiais referente aos pokemons, informativas.
10. Vou usar a API do Google Maps pra mostrar os pokemons por região, como se fosse o mundo deles.
