console.log("Successfully loaded array_iteration.js");

const arr = ["Zero", "One", "Two", "Three", "Four", "Five"];

for(let i = 0; i < arr.length; i++){

    console.log(i,  arr[i]);

}

arr.forEach(num => console.log(num)); //This is a modern implementation of Array iteration

