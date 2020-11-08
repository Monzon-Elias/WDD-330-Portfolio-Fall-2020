//************************************************* */
//*****************CLASS ACTIVITY*********************
//************************************************* */
import { getPokemonAsync, pokemonClicked } from './pokemonApp.js';

const urlP = "https://pokeapi.co/api/v2/type/3";
document
    .getElementById('listElement')
    .addEventListener('click', pokemonClicked);

getPokemonAsync(urlP);

