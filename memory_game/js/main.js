// Java Starts here
//console.log("Up and running!") ;
// Card Identification
//var cardOne = "queen" ;
//var cardTwo = "queen" ;
//var cardThree = "king" ;
//var cardFour = "king" ;
var cards = [ "queen" , "queen" , "king" , "king" ] ;
var cardsInPlay = [] ;


//oldcode
//var cardOne = cards[0];
//cardsInPlay.push('cardOne') ;
//var cardTwo = cards[2];
//cardsInPlay.push('cardTwo') ;
//ConsoleLog
//console.log("user flipped" + " " + cardOne) ;
//console.log("user flipped" + " " + cardTwo) ;

//check for match
var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1])
	//if (cardsInPlay.length === 2)
	{
	console.log("You found a match!") ;
	} else {
  	console.log("Sorry, try again.") ;
	}
} ;



// cardId function to store game steps
var flipCard = function (cardId){
console.log("user flipped " + cards[cardId]) ;
cardsInPlay.push(cards[cardId]);
if (cardsInPlay.length===2) {
checkForMatch();
} 
}

flipCard(0);
flipCard(2);












