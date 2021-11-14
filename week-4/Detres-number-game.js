// Title: Assignment 4 Number guessing game
// Author: Professor Krasso
// Date: 14 Nov 21
// Modified By: Ferdinand "Papo" Detres Jr
// Description: This week's project has creat a random # generator guessing game
//Code attributions:
//https://www.codegrepper.com/code-examples/javascript/javascript+compare+two+numbers
// Professor Krasso random number generator Exhibit B. Assignment 4 instructions
//https://www.geeksforgeeks.org/create-a-string-with-multiple-spaces-in-javascript/
//
//

//function runs when the onClick property with a value of button() is clicked
function button() {
  //will hold a random number
  let rnd = Math.floor(Math.random() * 10 + 1);
  //will hold the value in put into the input field
  let myNumber = document.getElementById("txtMyNumber").value;

  //first statement compares if the input variable is greater than the randomly held variable
  //and prints result if true
  if (myNumber > rnd) {
    document.getElementById("results").innerHTML =
      "The number is greater than" + " " + myNumber;
    // if false the next statement is applied
  } else if (myNumber < rnd) {
    document.getElementById("results").innerHTML =
      "The number is less than" + " " + myNumber;

    //final statement is applied since first two statements are false
  } else {
    document.getElementById("results").innerHTML =
      "Congratulations! You picked the correct number!";
  }
}
