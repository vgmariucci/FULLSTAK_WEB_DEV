console.log("Successfully loaded destructuring_arrays_&_objects.js");

// Destructuring an array
// const months = ['jan', 'feb', 'mar', 'apr', 'may'];

// const [jan, feb] = months;

// console.log(jan, feb);



const person3 = {
    'name': 'John',
    'instagram': '@ViniciusMariucci',
    'somethingelse': 'something else'
}

// Traditional access of an object's item
console.log("Traditional access of an object's item");
const name_of_person3 = person3.name;
console.log(name_of_person3);
const instagram_of_person3 = person3.instagram;
console.log(instagram_of_person3);



console.log("Destructuring and object");
// Destructuring and object
const {name, instagram} = person3;
console.log(name, instagram);
