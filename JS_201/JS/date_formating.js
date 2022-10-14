console.log("Successfully loaded date_formating.js");

let d = new Date(2025, 0, 15);

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

for(let i = 0; i < months.length; i++) {

    console.log("Month: " + months[i]);
}

console.log("Using forEach method:");

months.forEach(element => {
    
    console.log("Date: " + element);    
});
