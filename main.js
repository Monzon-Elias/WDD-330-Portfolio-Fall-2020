//Change the body background with javaScript
//document.body.style.backgroundColor = "black";
//Change the body text alignment to center
document.body.style.textAlign = "center";
//Creating the array that will generate a dynamic list of links to the different weeks notes
const links = [
    {
      label: "Week 1 notes",
      url: "https://monzon-elias.github.io/WDD-330-Portfolio-Fall-2020/Week%201/index.html"
    },
    {
      label: "Week 2 notes",
      url: "https://monzon-elias.github.io/WDD-330-Portfolio-Fall-2020/Week%202/index.html"
    },
    {
      label: "Week 3 notes",
      url: "https://monzon-elias.github.io/WDD-330-Portfolio-Fall-2020/Week%203/index.html"
    },
    {
      label: "Week 4 notes",
      url: "https://monzon-elias.github.io/WDD-330-Portfolio-Fall-2020/Week%204/index.html"
    },
    {
      label: "Week 5 notes",
      url: "https://monzon-elias.github.io/WDD-330-Portfolio-Fall-2020/Week%205/index.html"
    },
    {
      label: "Week 6 - Todo App",
      url: "https://monzon-elias.github.io/WDD-330-Portfolio-Fall-2020/Week%206/index.html"
    },
    {
      label: "Week 7 notes",
      url: "https://monzon-elias.github.io/WDD-330-Portfolio-Fall-2020/Week%207/index.html"
    },
    {
      label: "Week 8 notes",
      url: "https://monzon-elias.github.io/WDD-330-Portfolio-Fall-2020/Week%208/htmlFiles/index.html"
    }
    ,
    {
      label: "Week 9 notes",
      url: "https://monzon-elias.github.io/WDD-330-Portfolio-Fall-2020/Week%209/index.html"
    },
    {
      label: "Week 10 notes",
      url: "https://monzon-elias.github.io/WDD-330-Portfolio-Fall-2020/Week%210/index.html"
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