// description: Assignment 8 Alphabet Game App
// Author: Professor Krasso
// Date: 12 Dec 21
// Modified By: Ferdinand "Papo" Detres Jr
// Description: This week's project we will use arrays to loop through the Alphabet
//Code attributions:
// https://www.w3schools.com/js/js_if_else.asp
//https://www.codegrepper.com/code-examples/javascript/javascript+alphabet+array

// assigned variables to two set of DIVs
let cardLetters = document.getElementById("card-example2");
let result = document.getElementById("card-example3");

cardLetters.style.display = "none";
result.style.display = "none";
//  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split();
//Created Array literal. Split was too difficult so configure string commas with white space
let alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "T",
  "S",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
function button() {
  let pos = document.getElementById("txtPosition").value; //holds input value
  let alphabetArray = ""; //empty string which will append alphabet array
  let letter = alphabet[pos - 1]; //tying input value minus index of 1 to a letter in array

  //loop for alphabetArray variable which separate each index of the array
  for (let i in alphabet) {
    alphabetArray += alphabet[i] + ", ";
  }
  document.getElementById("allLetters").innerHTML = alphabetArray.slice(0, -2);

  // console.log(alphabet);

  //compares input to undefined
  if (letter == undefined) {
    document.getElementById("finalResults").innerHTML =
      "There are not " + pos + " letters in the alphabet";
    cardLetters.style.display = "block";
    result.style.display = "block";
  } else {
    document.getElementById("finalResults").innerHTML =
      letter + " is at position " + pos + " in the alphabet";
    cardLetters.style.display = "block";
    result.style.display = "block";
  }
}
