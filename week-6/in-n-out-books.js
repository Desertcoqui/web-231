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

let divTwo = document.getElementById("card-example2");
let divThree = document.getElementById("card-example3");

divTwo.style.display = "none";
divThree.style.display = "none";

function button() {
  let choice = document.querySelector("#favoriteList").value;

  if (choice == "books") {
    divTwo.style.display = "block";
    divThree.style.display ="none";
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

    console.log(children);
  } else if (choice == "authors") {
    divThree.style.display = "block";
    divTwo.style.display ="none";

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
