// Title: Assignment 2.2
// Author: Professor Krasso
// Date: 29 Oct 21
// Modified By: Ferdinand "Papo" Detres Jr
// Description: This week's project shows how to target elements on the html file 
// with Javascript to create a payroll chart
//Code Refer:
// How to format date in javascript
//https://www.tabnine.com/academy/javascript/how-to-format-date/
//Declaring js variables
//https://www.better.dev/declaring-javascript-variables-var-let-const
//Javascript Number toFixed()
//https://www.w3schools.com/jsref/jsref_tofixed.asp


//First name variables defined as strings and binded to innerHTML by their specified ID
let firstNameLudwig = "Ludwig";
document.getElementById("txtFirstNameLudwig").innerHTML=firstNameLudwig;
let firstNameJohann = "Johann";
document.getElementById("txtFirstNameJohann").innerHTML=firstNameJohann;
let firstNameWolfgang = "Wolfgang";
document.getElementById("txtFirstNameWolfgang").innerHTML=firstNameWolfgang;


//Last name variables defined as strings and binded to innerHTML by their specified ID
let lastNameBeethoven = "Beethoven";
document.getElementById("txtLastNameBeethoven").innerHTML=lastNameBeethoven;
let lastNameBach = "Bach";
document.getElementById("txtLastNameBach").innerHTML=lastNameBach;
let lastNameMozart = "Mozart";
document.getElementById("txtLastNameMozart").innerHTML=lastNameMozart;


// Address variables defined as strings and binded to innerHTML by their specified ID
let addressLudwig = "505 Main street";
document.getElementById("txtAddressLudwig").innerHTML=addressLudwig;
let addressJohann = "512 Main street";
document.getElementById("txtAddressJohann").innerHTML=addressJohann;
let addressWolfgang = "600 Main street";
document.getElementById("txtAddressWolfgang").innerHTML=addressWolfgang;

//Hire date object converted to a string with .toLocalDateString function
// with format mm/dd/yyyy showing current date 
let hireDateLudwig = new Date();
document.getElementById("txtHireDateLudwig").innerHTML=(hireDateLudwig.toLocaleDateString('en-US'));
let hireDateJohann = new Date ();
document.getElementById("txtHireDateJohann").innerHTML=(hireDateJohann.toLocaleDateString('en-US'));
let hireDateWolfgang = new Date ();
document.getElementById("txtHireDateWolfgang").innerHTML=(hireDateWolfgang.toLocaleDateString('en-US'));





//Pay rate variable declared with 1 decimal place binded to innerHTML by their ID
let payRateLudwig = 18.9000.toFixed(1);
document.getElementById("txtPayRateLudwig").innerHTML= payRateLudwig;
let payRateJohann = 25.5000.toFixed(1);
document.getElementById("txtPayRateJohann").innerHTML= payRateJohann;
let payRateWolfgang = 50.1000.toFixed(1);
document.getElementById("txtPayRateWolfgang").innerHTML=payRateWolfgang;
