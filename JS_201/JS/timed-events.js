console.log("Successfully loaded times.js");

// console.log("Starting script...");
// setTimeout(function() {
//     console.log("Waited 3 seconds");
// }, 3000);

let count = 0;
const myInterval = setInterval(function() {
    console.log("Checking something...");
    count++;

    if (count === 3){
        //Unset the interval
        clearInterval(myInterval);
        console.log("That was the last one");
    }
}, 2000);