console.log("Successfully leaded select_multiple_DOM_nodes.js");

// Access just the first element with the class name passed int the .querySelector() function
// const select_one_element = document.querySelector(".this-class");

// // Access all nodes elements with the same class name
// const select_multiple_elements = document.querySelectorAll(".this-class"); 

// console.log(select_one_element.innerText);

// console.log(select_multiple_elements);

const elements = document.querySelectorAll("li");

// elements.forEach(node => {
//     node.innerText = "This is changed!";
// });

// elements.forEach((node, index) => {
//     node.innerText = `Hello this is item ${index + 1}`;
// });

elements.forEach(node => {
    node.classList.add("custom-class", "second-class");
});