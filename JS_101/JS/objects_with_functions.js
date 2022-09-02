console.log("successfully loaded objects_with_functions.js")

// Here we present an example of how to create a new object with functions

// Create a new object called person
const person ={
    'name': 'John',
    'age': 34,
    'height': 1.67,

}

//This command create a new attribute for the person object
person['Favorite_Food'] = "Piza";

console.log("The favorite food of " + person.name + " is " + person.Favorite_Food);

// Create a new object called person
const person2 ={
    'name': 'Mike',
    'age': 32,
    'height': 1.75,
    'speak': function(want){
        console.log(`I want ${want}`);
    },
    talk(to){
        console.log(`I am talking to ${to}`);
    }
}

person2.speak("Pizza");

person2.talk("Lisa");