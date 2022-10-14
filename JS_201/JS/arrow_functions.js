console.log("Successfully loaded arrow_functions.js");

// The arrow functions do the same thing as a traditional function as shown below:

//Traditional function to print a message
function print_message(message) {
    console.log(message);
}

print_message("Hello, world using traditional function!");

//The same result obtained above is possible with an arrow function
print_message = (message) => console.log(message);

print_message("Hello, world with arrow (=>) function!");

//Other axamples are presented in the sequence below:

const hello = () => {
    console.log("Hello!");
}

hello();

const hello2 = () => console.log("Hello from one line function!");
hello2();


const myNewGreeting = (name) => console.log(`Welcome ${name}!`);


myNewGreeting("Coding for everybody...");