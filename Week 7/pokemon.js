const url = "https://pokeapi.co/api/v2/pokemon/";
let message = document.getElementById("pf");

function convertToJson(res) {
    console.log(res);
    if (res.ok) {
       message.innerHTML = "Pokemon found! =D";
        return res.json();
    } else { 
        message.innerHTML = "Pokemon not found! XP"
        throw new Error("Pokemon not found") }
}
function doStuff(data) {
    console.log("first", data);
}
function getPokemon() {
    message.innerHTML = '';
    const pokemonName = document.getElementById("whichOne").value;
    fetch(url + pokemonName)
        .then(convertToJson)
        .then(doStuff).catch((error) => { console.log(error) });
}

document.getElementById("submitButton").addEventListener("touchend", getPokemon);
document.getElementById('whichOne').addEventListener('touchend', () =>{
    message.innerHTML = '';
});

function getFoods() {
    fetch("data.json").then(convertToJson).then((data) => console.log(data));
}
getFoods();