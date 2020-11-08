
//let pokemon = [];
function convertToJson(res) {
    if (res.ok) {
        return res.json(); //json() is a method inside the response object. It returns the data as a json object.
    } else { throw new Error(res.statusText); }
}

// function getPokemon(url) {  //this function does the same thing as 'getPokemonAsync'
//     fetch(url)
//     .then(convertToJson)
//     .then((data) => {pokemon = data.pokemon;});
// }

export async function getPokemonAsync(url) {
    let pokemon = await fetch(url).then(convertToJson);
    console.log(pokemon.pokemon);
    displayPokemon(pokemon.pokemon);
}

function displayPokemon(list) {
    const listElement = document.getElementById('listElement');
    const newArray = list.map((item) => {
        return `<li data-url="${item.pokemon.url}">${item.pokemon.name}</li>`;
    });
    listElement.innerHTML = newArray.join("");
    //console.log(newArray);
}

function displayDetails(details) {}

export async function pokemonClicked(event) {
    console.log(event.target.dataset.url);
    const details = await fetch(event.target.dataset.url).then(convertToJson);
    console.log(details);
    displayDetails(details);
}
