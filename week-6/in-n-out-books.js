// Title: Assignment 6 In-Out-Books
// Author: Professor Krasso
// Date: 26 Nov 21
// Modified By: Ferdinand "Papo" Detres Jr
// Description: This week's project is to object literals that display
// my favorite books and authors
//Code attributions:
// https://www.w3schools.com/js/js_if_else.asp
// https://stackoverflow.com/questions/17684201/create-html-table-from-javascript-object/17684427
// https://stackoverflow.com/questions/56111480/how-can-i-hide-a-div-until-a-button-is-clicked/56111499



// assigned variables two both set of DIVs
let divTwo = document.getElementById("card-example2");
let divThree = document.getElementById("card-example3");

//Targeting DIVs to not display on page load
divTwo.style.display = "none";
divThree.style.display = "none";

function button() {
  let choice = document.querySelector("#favoriteList").value;

  // First condition checking for "Top 3 Favorite books" to be selected

  if (choice == "books") {
    divTwo.style.display = "block";
    divThree.style.display ="none";

    //My Fav books held in object variables w/ three name:value properties
    let ofMiceAndMen = {
      isbn: "6582356985",
      title: "Of Mice and Men",
      pages: "100",
    };

    let blackBeauty = {
      isbn: "6582356984",
      title: "Black Beauty",
      pages: "101",
    };
    let children = {
      isbn: "6582356982",
      title: "Children of the Corn",
      pages: "102",
    };

    
    document.getElementById("topFavoriteBooks").innerHTML =
      "Top 3 Favorite Books";

      //Object variables binded to the html and executed if condition is true
    document.getElementById("isbn").innerHTML = "ISBN";
    document.getElementById("title").innerHTML = "Title";
    document.getElementById("pages").innerHTML = "Pages";

    document.getElementById("ofMiceAndMenIsbn").innerHTML = ofMiceAndMen.isbn;
    document.getElementById("ofMiceAndMenTitle").innerHTML = ofMiceAndMen.title;
    document.getElementById("ofMiceAndMenPages").innerHTML = ofMiceAndMen.pages;

    document.getElementById("blackBeautyIsbn").innerHTML = blackBeauty.isbn;
    document.getElementById("blackBeautyTitle").innerHTML = blackBeauty.title;
    document.getElementById("blackBeautyPages").innerHTML = blackBeauty.pages;

    document.getElementById("childrenIsbn").innerHTML = children.isbn;
    document.getElementById("childrenTitle").innerHTML = children.title;
    document.getElementById("childrenPages").innerHTML = children.pages;

    //if condition is true console log will print object literal of children
    //for testing purposes
    console.log(children);

    //if first condition is false this final condition will execute if
    //if top three favorite authors is clicked
  } else if (choice == "authors") {
    divThree.style.display = "block";
    divTwo.style.display ="none";


    //object literals with variable of favorite author
    let taraWinston = {
      name: "Tara Winston",
      genre: "Fiction",
    };

    let allenGreenspan = {
      name: "Allen GreenSpan",
      genre: "Politics",
    };
    let colinPowell = {
      name: "Colin Powell",
      genre: "Political Science",
    };

document.getElementById("favoriteAuthors").innerHTML = 
"Top 3 Favorite Authors"

//object literals binded to html and printed with variable.name properties

    document.getElementById("name").innerHTML = "Name";
    document.getElementById("genre").innerHTML = "Genre";

    document.getElementById("winston").innerHTML = taraWinston.name;
    document.getElementById("winstonGenre").innerHTML = taraWinston.genre;

    document.getElementById("greenSpan").innerHTML = allenGreenspan.name;
    document.getElementById("greenSpanGenre").innerHTML = allenGreenspan.genre;

    document.getElementById("powell").innerHTML = colinPowell.name;
    document.getElementById("powellGenre").innerHTML = colinPowell.genre;

    console.log(taraWinston);
    document.getElementById("results").innerHTML;
  }
}
