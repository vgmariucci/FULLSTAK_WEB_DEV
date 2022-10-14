console.log("Successfully loaded while_loops.js");

let count = 0;

while (count < 100) {

        count++;
        console.log("Contagem: " + count);
    
}

while(true){
    let name = prompt("What is your name?");
    if( name === "Vinicius"){
        console.log("Right name!");
        break;
    }
    console.log("Wrong name. Try again.");
}


