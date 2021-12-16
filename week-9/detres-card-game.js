// description: Assignment 9 Card Game
// Author: Professor Krasso
// Date: 14 Dec 21
// Modified By: Ferdinand "Papo" Detres Jr
// Description: This week's project we will use arrays, classes, functions and switch statement
// https://www.w3schools.com/js/js_if_else.asp
//https://www.codegrepper.com/code-examples/javascript/javascript+alphabet+array
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects
//https://ultimatecourses.com/blog/deprecating-the-switch-statement-for-object-literals
//https://www.digitalocean.com/community/tutorials/how-to-add-javascript-to-html



class Card {
  constructor(face, suit) {
    this.face = face;
    this.suit = suit;
  }
}

class Dealer {
  constructor() {
    getDeckOfCards();
  }
}


var card_count = 52;
var cards = [];
var faces = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
var suits = ["H", "D", "C", "S"];


//Iterates through the variable card_count and spits out an array to the cards[] variable 
// then it uses the class Card to create two separate objects
//One for face and one for suits
function getDeckOfCards() {
  for (let counter = 0; counter < this.card_count; counter++) {
    this.cards[counter] = new Card(
      this.faces[counter % 13],
      this.suits[Math.floor(counter / 13)]
    );
  }
}

//It shuffles the cards array because magic. 
//Pulls out first card of the array and holds it
//then it finds a random index of whats left and 
//reassigns that cards there while then taking that card
//holding it and reassigning it to another index
function shuffle() {
  for (var firstCard = 0; firstCard < this.card_count; firstCard++) {
    var tempCard = this.cards[firstCard];
    var secondCard = Math.floor(Math.random() * card_count);
    this.cards[firstCard] = this.cards[secondCard];
    this.cards[secondCard] = tempCard;
  }
}

//this function takes in four parameters to build our html div
//card.face uses the class Cards property of face and feeds in from the
//cardOutPutWithIcon variable after the switch statement is ran
function buildPlayerCard(card, suitIcon, faceColor, suitColor) {
  return `
  <div class="card player-card">
        <div class="card-title" style="text-align: left; font-size: 20;padding-left: 10px; color:${faceColor}">
        ${card.face}
            <div class="card-content" style="font: size 28px; padding-bottom: 25px;">
                <span class="${suitIcon}" style="color: ${suitColor}"></span>
            </div>

        </div>

    </div>
     
    `;
}

//This initiates the app
//calls the getDeckOfCards function with the new Dealer object
//since the class Dealer holds that function.
//shuffle function is ran and then the cards iterate through the cards
//array and looks for the suit parameter in the switch statement.
//if the case is true, the buildPlayerCard() is ran and takes in the string from 
//cardOutputWithIcon variable.

function button() {
  let cardOutputWithIcon = "";
  var dealer = new Dealer();
  shuffle();
  for (let card of cards) {
    switch (card.suit) {
      case "H":
        cardOutputWithIcon += buildPlayerCard(
          card,
          "mdi mdi-cards-heart",
          "red",
          "red"
        );
        break;
      case "D":
        cardOutputWithIcon += buildPlayerCard(
          card,
          "mdi mdi-cards-diamond",
          "red",
          "red"
        );
        break;
      case "C":
        cardOutputWithIcon += buildPlayerCard(
          card,
          "mdi mdi-cards-club",
          "black",
          "black"
        );
        break;
      case "S":
        cardOutputWithIcon += buildPlayerCard(
          card,
          "mdi mdi-cards-spade",
          "black",
          "black"
        );
    }

    console.log(card);
  }
  //gets binded to the html id'player-card'
  document.getElementById("player-card").innerHTML = cardOutputWithIcon;
}
