// GitHub version
console.log("Up and running!");

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
cardsInPlay.push(cards[0]);

var flipCard = function(cardId) {
    console.log("User flipped " + cards[cardId]);
    if (cardsInPlay.length === 2) {
        if (cardsInPlay[0] === cardsInPlay[1]) {
            alert("You found a match!");
        } else {
            alert("Sorry, try again");
        }
    }
}
flipCard(2);
flipCard(3);

