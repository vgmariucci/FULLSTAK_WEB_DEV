console.log("Successfully loaded DRY_method.js");

console.log("DRY means Don't Repeat Yourself");

concept_of_DRY = "DRY is the habit of not"
                + " repeating anything in the process, mainly functions which are"
                + " used many times in the code";

console.log(concept_of_DRY);

// Example of functions declared once and called multiple times

function addNumbers(n1, n2){
    sum = Number(n1) + Number(n2);
return sum;
}


function sayHello(name){
console.log(`Hello ${name}`);
}


let number_1 = 3;
let number_2 = 5;

const total = addNumbers(number_1,number_2);

//call addNumbers function once
console.log("call addNumbers function once")

console.log("The sum of " + number_1 + " and " + number_2 + " is equal to " + total);

//call addNumbers function 5 times
console.log("call addNumbers function 5 times");

for (let i = 1, j = 2; i <= 5 ; i++, j += 2){

    console.log("The sum of " + i + " and " + j + " is equal to " + addNumbers(i, j));

}





let myName = "Vinícius";

//call sayHello function once
console.log("Calling sayHello function once");
sayHello(myName);



let listNames = ["Ana", "Sahra", "Giovanna", "Isabelle"]
console.log("Listing names: " + listNames);
//call sayHello function for each name in the array
console.log("Calling sayHello function for each name in the array");
listNames.forEach(element => sayHello(element));

