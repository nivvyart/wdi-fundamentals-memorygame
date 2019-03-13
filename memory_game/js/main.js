// Java Starts here
//console.log("Up and running!") ;
// Card Identification
//var cardOne = "queen" ;
//var cardTwo = "queen" ;
//var cardThree = "king" ;
//var cardFour = "king" ;
var cards = [ 
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png",
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png",
},
{	
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png",
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png",
}
];

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
	alert("You found a match!") ;
	} else {
  	alert("Sorry, try again.") ;
	}
} ;



// cardId function to store game steps
var flipCard = function (cardId){
console.log("user flipped " + cards[cardId].rank) ;
console.log(cards[cardId].cardImage);
console.log(cards[cardId].suit);
cardsInPlay.push(cards[cardId].rank);
if (cardsInPlay.length===2) {
checkForMatch();
} 
}

flipCard(0);
flipCard(2);












