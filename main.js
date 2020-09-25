//Change the body background with javaScript
//document.body.style.backgroundColor = "black";

//Creating the array that will generate a dynamic list of links to the different weeks notes

const links = [
    {
      label: "Week1 notes",
      url: "../Week 1/form.html"
    },
    {
      label: "Week2 notes",
      url: "../Week 2/index.html"
    },
    {
      label: "Week3 notes",
      url: "../Week 3/index.html"
    }
  ]

function createListElementsWithLinksToTheEachWeekWork(){
  var ol = document.getElementById("links");
  for(var i = 0; i < links.length; i++) {
    var li = document.createElement("li");
    var a = document.createElement("a");
    a.href = links[i].url;
    var label = document.createTextNode(links[i].label);
    a.appendChild(label);
    li.appendChild(a);
    ol.appendChild(li);
    }
  }

  createListElementsWithLinksToTheEachWeekWork();   

//NOTES
//I create a function to dynamicaly create links to all this semester work,
//inside the range of the links array, using links.length. I created li elements inside
//an "ol" element which I store in a variable called "ol".
//Then I create anchor elements that will be appended into the li elements, so they
//become links to the different week folders.
//I add href attribute to the anchor elements feeded with the url part of the links array.
//I append the link array labels into the "a" elements, so I'll have them as the anchor text.
//I append those anchor elements into the "li" elements, and the "li" elements into
//it parent, the "ol" element.
//I call the function.
//Brother, is this a too detailed step by step explanation of what I did?