console.log("Successfully loaded random_number_game.js");

"use strict";



// Generates a random number between 1 and 10
function randomNumber(){
    
    rdmNumber = Math.floor(1+9*Math.random());
    
    return rdmNumber;

}

while(true){
    
    let number = prompt("Guess the number: ");
        number = Number(number);

    const random = randomNumber();

    if(number === random){
        alert("You have Successfully guessed the number!");
        console.log("Guessed number: " + number);
        break;
    }
    else{
        console.log("You guessed " + number + ". But the right number was " + random);
    }
}