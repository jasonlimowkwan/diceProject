const diceTriggerEl = document.querySelector(".dice__trigger");
const diceImageEl = document.querySelector(".dice__image");

var diceSound = new Audio();
diceSound.src = "sounds/dice.mp3"

function getRandomNumber() {
	return 1 + Math.floor(Math.random() * 6);
}



function showDice() {
	diceTriggerEl.addEventListener("click", function() {
		let myRandomNumber = getRandomNumber();
		diceImageEl.src = "images/dice" + myRandomNumber + ".png";
		diceSound.play();
		setTimeout(function() {
			diceImageEl.classList.add("dice__change");
		},);

		setTimeout(function() {
			diceImageEl.classList.remove("dice__change");
		}, 500);
		
	})


}



showDice();