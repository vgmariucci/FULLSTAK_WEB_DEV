// Conditional Statements in JavaScript

console.log("================================");
console.log("Successfully loaded conditional_statement.js");

const twitter = "@ElonMusk";

if(twitter == "@ViniciusMariucci"){
    // Execute this code in here
    console.log("Twitter handle is " + twitter);
}
else {
    // If the first condition is false, then execute this condition
    console.log("Twitter handle is not @ViniciusMariucci");
}


const age = 18;
if (age >= 18){
    console.log("I'm allowed to vote");
}

if (age >= 21){
    console.log("I can drink alcohol");
}
else{
    console.log("I can't drink alcohol yet!");
}

const StudentName = "Nathan";

if( StudentName == "Nathan"){
    console.log("Welcome " + StudentName + "!");
}
else if (StudentName == "Vinicius"){
     console.log("Hello " + StudentName + "!");   
}
else{
    console.log("Are you a new student?");
}