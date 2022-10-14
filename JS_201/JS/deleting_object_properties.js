"use strict";

console.log("Successfully loaded deleting_object_properties.js");

const person4 = {
    'name': 'John',
    'age': 36,
}

delete person4['age'];
console.log(person4['age']);

// delete person4; //delete an object causes an error