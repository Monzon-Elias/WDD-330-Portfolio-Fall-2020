//Change the body background with javaScript
document.body.style.backgroundColor = "black";
//Creating the array that will generate a dynamic list of links to the different weeks notes

const links = [
    {
      label: "Week1 notes",
      url: "../Week 1/form.html"
    },
    {
      label: "Week2 notes",
      url: "../Week 2/index.html"
    }
  ]

var parent = document.getElementById("links");

function create(text, element) {
    var para = document.createElement(element);
    para.style.color = "white";
    var node = document.createTextNode(text);
    para.appendChild(node);
    parent.appendChild(para);
}

function createElements(){
  for(let i = 0; i <= links.length; i++) {
    create(links[i].label, "li");
    create(links[i].url, "a");
  }
}

function createAnchorElementsInsideLiElements() {
  var liElement = document.getElementsByTagName("li");
  var aElement = document.getElementsByTagName("a");
  liElement.appendChild(aElement);
}
createLinks();


//document.getElementById("w1").innerHTML = links[0]["label"];
//document.getElementById("w2").innerHTML = links[0]["url"];

//Tengo q lograr q popule el array definiendo:
// 1- links.length = cantidad de li elements
// 2- tengo q tener un index.html dentro de cada carpeta "Week 1", "Week 2", etc.
// 3- en la li par, debe haber un anchor element con la dirección de cada "url" 
// correspondiente dentro del links array. 