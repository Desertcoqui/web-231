// Title: Exercise 2.2
// Author: Professor Krasso
// Date: 28 Oct 21
// Modified By: Ferdinand "Papo" Detres Jr
// Description: This is week's project shows how to target elements on the html file
// with Javascript
//Code Ref:
//How to link javascript to html
//https://www.johnpatel.com/how-to-link-javascript-to-html/
//stackoverflow.com document.getElementByID w onclick
//https://stackoverflow.com/questions/20941160/javascript-document-getelementbyid-with-onclick

//This targets the #txtMyWorld in the html document and passes a value to the p tag
document.getElementById("txtMyWorld").innerHTML =
  "You are now in Detres' world!";

//This target the button id btnMyCourse and passes a function to alert
document.getElementById("btnMyCourse").onclick = function () {
  alert("Web 231 - Enterprise Javascript I");
};
