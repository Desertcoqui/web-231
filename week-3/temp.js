// Title: Assignment 3 Temperature Conversion App
// Author: Professor Krasso
// Date: 7 Nov 21
// Modified By: Ferdinand "Papo" Detres Jr
// Description: This week's project has us convert Fahrenheit to Celsius w/Javascript
//Code attributions:
//https://stackoverflow.com/questions/17449796/why-am-i-getting-nan-when-all-variables-inputs-are-numbers
//https://www.codegrepper.com/code-examples/html/javascript+display+value+onclick
//https://stackoverflow.com/questions/32571349/store-math-formula-in-variable
//Prof. Krasso (parse conversion function)

//this functions is triggered when the Convert Temp button is clicked
function button() {
  let fahrenheit = document.getElementById("txtFahrenheit").value;
  document.getElementById("results").innerHTML = (
    (parseFloat(fahrenheit) - 32) /
    1.8
  ).toFixed(2);
}
