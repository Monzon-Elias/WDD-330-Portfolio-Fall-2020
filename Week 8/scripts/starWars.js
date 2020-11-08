
//let pokemon = [];
function convertToJson(res) {
    if (res.ok) {
        document.getElementById('noMorePages').innerHTML = '';
        return res.json(); //json() is a method inside the response object. It returns the data as a json object.
    } else { document.getElementById('noMorePages').innerHTML = 'No more pages to show!';
    throw new Error(res.statusText); }
}

export async function getPeople(url) {
    let people = await fetch(url).then(convertToJson);
    let results = people.results; //list of persons from the api
    console.log(results);
    displayPeople(results);
}

export function displayPeople(results) {
    const listPeople = document.getElementById('listPeople');
    let newArray = results.map((item) => {
        return `<li>${item.name}</li>`;
    });
    listPeople.innerHTML = newArray.join("");
}

