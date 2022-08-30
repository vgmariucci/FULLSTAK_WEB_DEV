console.log("Successfully loaded String_Methods.js");

const course = "JavaScript 101: coding for beginners";

let another_course = "      HTML 101: coding for developers";

console.log(".search() string method:" + course.search("Scrip")); // example of .search() string method

console.log(".slice() string method: " + course.slice(16, 22)); // example of .slice() string method

console.log(".substr() string method: " + course.substr(16,6)); // example of .substr() string method

console.log(".replace() string method: " + another_course.replace("HTML", "CSS")); // example of .replace() string method

console.log(".toUpperCase() string method:" + course.toUpperCase()); // example of .toUpperCase() string method

console.log(".toLowerCase() string method:" + course.toLowerCase()); // example of .totoLowerCase() string method

console.log(".split() string method:" + another_course.split(" ")); // example of .split() string method

console.log(".trim() string method:" + another_course.trim()); // example of .trim() string method

console.log(".length() string method: " + another_course.length); // example of .length string method

console.log("Character position selector:" + course[0]); // example of how to select a character in a string

