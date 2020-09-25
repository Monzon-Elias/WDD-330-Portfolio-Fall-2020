//----------------------------------------------------------------------------------------------
//------------------------------ TEAM ACTIVITY 9/24/2020 ---------------------------------------
//----------------------------------------------------------------------------------------------
//Step 1
function displayMe() {
    const result = document.getElementById("output");
    const input = document.getElementById("text").value;
    result.innerHTML = "User typed this: " + input;
}

//Step 2
function displayMe2() {
    const result = document.getElementById("output2");
    const input = document.getElementById("text2").value;
    var integer = parseInt(input);
    if (Number.isInteger(integer)) {
        result.innerHTML = "Sum = " + adding(integer);
    } else { result.innerHTML = "Only numbers, please" };
}
// NOTES
//Number object holds methods to work with numbers, like "isInteger". In java we have wrapping classes.
//The "if" statement assures that the user type only numbers.
//Adding doubles or decimals would be an improvement to this program.
function adding(num) {
    var sum = 0;
    for (var i = 1; i <= num; i++) {
        sum += i
    }
    return sum;
}

//Step 3
function addingNumbersFromBothInputs() {
    const input1 = document.getElementById("text2").value;
    const input2 = document.getElementById("text3").value;
    let firstInput = parseInt(input1);
    let secondInput = parseInt(input2);
    // NOTES
    //We need to parse the strings comming from the text inputs to integers using parseInt() method.
    //The "if" statement assures that the user type only numbers.
    //Adding doubles or decimals would be an improvement to this program.
    const result = document.getElementById("output3");
    if (Number.isInteger(firstInput) && Number.isInteger(secondInput)) {
        result.innerHTML = sumOfTwoValues(firstInput, secondInput);
    } else { result.innerHTML = "Only numbers, please" };

}

function sumOfTwoValues(num1, num2) {
    let sum = num1 + num2;
    return sum;
}

//----------------------------------------------------------------------------------------------
//------------------------------ END OF TEAM ACTIVITY ------------------------------------------
//----------------------------------------------------------------------------------------------


//----------------------------------------------------------------------------------------------
//------------------------------ CLASS JAVASCRIPT REVIEW ---------------------------------------
//----------------------------------------------------------------------------------------------

//Arrays, foreach, fat arrow functions, map method, and random numbers code generator.
const colors = ["red", "blue", "green", "yellow", "orange"];
const adjectives = ["bold", "shy", "strong", "lazy", "round", "flat", "old"];
const nouns = ["bike", "cat", "plate", "computer", "student", "car", "house"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 123];
const ships = ["plane", "boat", "space ship", "ufo", "kite"];

colors.forEach(element => { // with the function keyword: "colors.forEach(function(element){console.log(element);})"
    console.log(element);
}); // fat arrow functions remove the function keyword and in simple function it removes the return key word as well.

//map method used to add a string at the end of each element of the colors array.
console.log(colors.map((el) => el + " opa!"));

// random numbers from 0 to 12. This's the way to create random numbers from a given numberin javaScript.
console.log(Math.floor(Math.random() * 12) + 1);
