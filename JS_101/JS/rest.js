console.log("Successfully loaded rest.js");

//rest is used in functions enabling it to accept a unlimited number of parameters (being them of equal 
// or different data types).



//Example of a rest function
function addNumbers(...numbers){
    let addedValues = 0;
    for(index in numbers){
        addedValues += numbers[index];
    }
return addedValues;
}

let total = addNumbers(1, 4, 7, 13);
console.log("Total: " + total);

//Another example of a rest function evaluated from the above example
function multiplyNumbers(personName, ...numbers){
    let multipliedValues = 1;
    for(index in numbers){
        multipliedValues *= numbers[index];
    }
return `${personName}: the result is ${multipliedValues}`;
}

let result = multiplyNumbers("Vinícius", 1, 4, 7, 13);
console.log(result);

