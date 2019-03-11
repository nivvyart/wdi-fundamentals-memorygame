// Java Starts here
console.log("Up and running!") ;
// Card Identification
//var cardOne = "queen" ;
//var cardTwo = "queen" ;
//var cardThree = "king" ;
//var cardFour = "king" ;
var cards = [ "queen" , "queen" , "king" , "king" ] ;
var cardsInPlay = [] ;
var cardOne = cards[0];
cardsInPlay.push('cardOne') ;
var cardTwo = cards[1];
cardsInPlay.push('cardTwo') ;
//Write an if statement that checks to see if the length of the cardsInPlay array is 2. 
if (cardsInPlay.length === 2 && cardOne === cardTwo) {
	alert("You found a match!");
} else {
	alert("sorry try again :(");
}


// ConsoleLog
console.log("user flipped" + " " + cardOne) ;
console.log("user flipped" + " " + cardTwo) ;