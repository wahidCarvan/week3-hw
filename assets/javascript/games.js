
/* math random picks a number between 0 and .99 and math floor removes the decimal the *26 is there because there 
are 26 letters in the alphabet*/
var computerGuesses= Math.floor(Math.random()*26);
// var letters is where the random items go count the items and do above code
// this is an array
var letters = [ 'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z' ];
// makes the computer choose a random letter
// var wrong letters stores the wrong letters the user guessed

var wrongletters=[];
// var random is the letters the computer guesses
var random = letters[computerGuesses];
// var wins stores the scores of the wins
var wins=0;
var loses=0;
var guessesLeft=9;

//COMMAS AND '' ADD SPACES AFTER EACH LETTER
 //displays on the page
 document.getElementById('wins').innerHTML = wins;
 document.getElementById('losses').innerHTML =loses;
 document.getElementById('guessesleft').innerHTML =guessesLeft;




// document.onkeyup is when a key is pressed
// when a key is pressed run the function that is entered
document.onkeyup = function(event) {
console.log(random);
// the code below makes the keys all lowercase regardless
//saves all responses in to a key press
var keypress = String.fromCharCode(event.keyCode).toLowerCase();





// keypress equals the random letter the computer chose we will alert the message in the box
//if the correct key is pressed the wins go up by ones
//player wins code section
if(keypress==random){
	alert("You Won! Congrats.")
	wins++;
	guessesLeft = 9;
	// resets the guesses back to 9
	document.getElementById('guessesleft').innerHTML=9;
	//the quotes mean to show a blank section
	document.getElementById('guesses').innerHTML="";
	 //++ keeps adding 1
	
}
//keypress is what ever the letter the user chooses
//random is the computers guess
// if player loses code
if(keypress!=random) {
	if (wrongletters.indexOf(keypress) < 0) {
		wrongletters.push(keypress);
	//.push pushes to the array keypress is the letters they pressed
	 document.getElementById('guesses').innerHTML += (keypress + ", ");
		guessesLeft--;
	}// indexOf 
	
	
	//alert('try again')

}
// if guesses 
if(guessesLeft==0) {
	alert("you lose, play again!");
	console.log('resetting guess');
	guessesLeft = 9;
	// the code below is to reset the page
 document.getElementById('guessesleft').innerHTML=guessesLeft;

	//the quotes mean to show a blank section
	document.getElementById('guesses').innerHTML="";
// the code below makes the score of the loses go up
loses++;

}





//COMMAS AND '' ADD SPACES AFTER EACH LETTER

 document.getElementById('wins').innerHTML = wins;
 document.getElementById('losses').innerHTML =loses;
 document.getElementById('guessesleft').innerHTML =guessesLeft;
 
};



























// Refernece for later

// hangemanGame is a object {}

// objects look like
// var myAwesomeObject = {
// 	arrayInstideObject: ["a", "b", "c"],
// 	someNumber: 36
// }

// If we wanted values out of this we would use t
// myAwesomeObject.someNumber = 36
// myAwesomeObject.arrayInsideObject[1] = "b"

// var hangmanGame = {
// 	// guessedLetters is an array []
// 	guessedLetters: []
// }

// //hangmanGame.gussedLetters[1]
// document.onkeyup = function(event) {
// 	console.log("Key Code: " + event.keyCode + " was hit.");
// 	// Convert keycode to Letter
// 	var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
// 	console.log("letter guessed converted: " + letterGuessed);
// 	// .push(value) lets you append to the end of an array
// 	hangmanGame.guessedLetters.push(letterGuessed);
// 	console.log("guessed letters are:");
// 	console.log(hangmanGame.guessedLetters);

// 	document.querySelector("#user-guess").innerHTML = hangmanGame.guessedLetters;


// }
