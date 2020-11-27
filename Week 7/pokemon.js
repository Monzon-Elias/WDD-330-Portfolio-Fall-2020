const url = "https://pokeapi.co/api/v2/pokemon/";
let whichPokemon = document.getElementById('whichOne');
let message = document.getElementById("pf");

function convertToJson(res) {
    if (res.ok) {
        return res.json();
    } else {
        throw new Error("Pokemon not found");
    }
}

function getPokemon(url) {
    fetch(url)
        .then(convertToJson)
        .then((data) => {
            let pokemons = [];
            pokemons = data.results;
            pokemons.map((poke) => {
                let pokemonNames = pokemons[pokemons.indexOf(poke)].name;
                console.log(pokemonNames);
                let pokemonName = pokemonNames.filter(pn => pn == whichPokemon.value);
                if(pokemonName == whichPokemon.value){
                message.innerHTML = 'Pokemon found! =D';
                } else message.innerHTML = 'Pokenom not found XP';    
            });
        })
        .catch((error) => { throw new Error(error); });
}

document.getElementById("submitButton").addEventListener("click", () => {
    console.log('it is working!');
    getPokemon(url);
});

whichPokemon.addEventListener('touchend', (e) => {
    e.target.innerHTML = '';
});

function getFoods() {
    fetch("data.json").then(convertToJson).then((data) => console.log(data));
}
getFoods();