// description: Assignment 9 Card Game
// Author: Professor Krasso
// Date: 14 Dec 21
// Modified By: Ferdinand "Papo" Detres Jr
// Description: This week's project we will use arrays, classes, functions and switch statement
// https://www.w3schools.com/js/js_if_else.asp
//https://www.codegrepper.com/code-examples/javascript/javascript+alphabet+array

function button() {
 getDeckOfCards();
shuffle();
   console.log(cards);
 newCards();
 buildPlayerCard();
}


  

class Card {
  constructor(face, suit) {
    this.face = face;
    this.suit = suit;
  }
}

class Dealer {
  constructor() {
    //Check here if program breaks
    getDeckOfCards();
  }
}

var card_count = 52;
var cards = [];
var faces = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
var suits = ["H", "D", "C", "S"];

function getDeckOfCards() {
  for (var counter = 0; counter < card_count; counter++) {
    cards[counter] = new Card(
      this.faces[counter % 13],
      this.suits[Math.floor(counter / 13)]
    );
  }
  return cards;
}

function shuffle() {
  for (var firstCard = 0; firstCard < card_count; firstCard++) {
    var tempCard = cards[firstCard];
    var secondCard = Math.floor(Math.random() * card_count);
    cards[firstCard] = cards[secondCard];
    cards[secondCard] = tempCard;
  }
  return shuffle;
}



function buildPlayerCard(card, suitIcon, faceColor, suitColor) {



  var newCard = document.getElementById("card-title");
  newCard.innerHTML = `<div class="card player-card">
<div class="card-description card-title"
    style="color: ${faceColor} text-align:left; font-size:20px; padding-left:10px">
    <p>What in the FUCK</p>${card.face}
</div>
<div class="card-description card-content material-icons" id="shuffledCards"
    style="font-size: 28px; padding-bottom: 25px;">
    <span class="${suitIcon}" style="color: ${suitColor}"></span>
</div>`;
}


var cardOutputWithIcon = "";
function newCards() {
  for (let x of cards) {
    switch (x.suit) {
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
          "mdi mdi-cards-diamonds",
          "red",
          "red"
        );
        break;
      case "C":
        cardOutputWithIcon += buildPlayerCard(
          card,
          "mdi mdi-cards-clubs",
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
    console.log(x);
  }
}
