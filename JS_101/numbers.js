console.log("Successfully loaded numbers.js");

num = 123; // Number data type

num2 = "456"; // String data type

// This just put together the variables num and num2 because they are different data types
dummySum= num + num2; 

console.log("This is the result of \"adding\" different data types: " + dummySum);

// This is the correct way to do math operations with different data types. First we need to cast the
// variables such a way they became all the same data type.
correctSum = num + Number(num2); 

console.log("This is the correct result of adding different data types: " + correctSum);

