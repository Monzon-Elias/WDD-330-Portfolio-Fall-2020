//************************************************* */
//*****************TEAM ACTIVITY*********************
//************************************************* */
import { getPeople } from './starWars.js';

const urlSW = "https://swapi.dev/api/people";
getPeople(urlSW);

let counter = 1;
let prevButton = document.getElementById('previous');
prevButton.addEventListener('click', () => {
    if(counter >= 9) counter = 9;
    counter = --counter; 
    console.log(counter);
    let prev= "https://swapi.dev/api/people/?page=" + counter;
    getPeople(prev);
});

let nextButton = document.getElementById('next');
nextButton.addEventListener('click', () => {
    if(counter <= 0) counter = 1;
    counter = ++counter; 
    console.log(counter);
    let next= "https://swapi.dev/api/people/?page=" + counter;
    getPeople(next);
});