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

function button() {
    let rnd = Math.floor((Math.random()* 10) + 1);
    let myNumber = document.getElementById("txtMyNumber").value;

    if(myNumber > rnd) {
        document.getElementById("results").innerHTML = ("The number is greater than" +" " + myNumber);

    } else if (myNumber < rnd){
        document.getElementById("results").innerHTML = ("The number is less than" +" " + myNumber);
    } else {
        document.getElementById("results").innerHTML = ("Congratulations! You picked the correct number!");
    }
}