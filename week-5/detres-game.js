// Title: Assignment 5 Sequence Game
// Author: Professor Krasso
// Date: 19 Nov 21
// Modified By: Ferdinand "Papo" Detres Jr
// Description: This week's project is to create a sequence game
//Code attributions:
//https://www.codegrepper.com/code-examples/javascript/javascript+compare+two+numbers
//
//https://www.geeksforgeeks.org/create-a-string-with-multiple-spaces-in-javascript/
//
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#comparison_operators
//https://www.youtube.com/watch?v=E7lhNyG1wE0
//https://ricardometring.com/getting-the-value-of-a-select-in-javascript

function button() {
  let choice = document.querySelector("#sequence").value;

  if (choice == "fibonacci") {
    
    let number = 40;
    let next = 0;
    let num1 = 0;
    let num2 = 1;
    let fibonacciSequenceText = "";

    while (num1 <= number) {
      fibonacciSequenceText += num1 + ",";
      next = num1 +num2;
      num1=num2;
      num2=next;
    }
    document.getElementById("results").innerHTML = fibonacciSequenceText.slice(0,-1);
//testing output with line below
    // document.getElementById("results").innerHTML = "3";
  } else if (choice == "even") {
    let oddSequenceText = '';
    for (let counter = 2; counter < 20; counter += 2) {
      oddSequenceText += counter + ",";
    }
    document.getElementById("results").innerHTML =
      oddSequenceText.slice(0, -1);
      //testing out with line below
    // document.getElementById("results").innerHTML = "even";
  } else {

    let oddSequenceText = '';
    for (let counter = 1; counter < 20; counter += 2) {
      oddSequenceText += counter + ', ';
    }
    document.getElementById("results").innerHTML =
      oddSequenceText.slice(0, -2);
    // document.getElementById("results").innerHTML = "odd";
  }
}
