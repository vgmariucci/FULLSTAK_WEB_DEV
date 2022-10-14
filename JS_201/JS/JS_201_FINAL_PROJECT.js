console.log("Successfully loaded JS_201_FINAL_PROJECT.js");


const character_name = document.getElementById("name");
const character_birth = document.getElementById("birth");
const character_eye_color = document.getElementById("eye_color");
const character_gender = document.getElementById("gender");
const character_height = document.getElementById("height");
const character_mass = document.getElementById("mass");
const character_hair_color = document.getElementById("hair_color");
const character_skin_color = document.getElementById("skin_color");


const starship_name = document.getElementById("starship_name");
const starship_model = document.getElementById("starship_model");
const starship_manufacturer = document.getElementById("starship_manufacturer");
const starship_length = document.getElementById("starship_length");
const starship_max_atm_speed = document.getElementById("max_atm_speed");
const starship_crew = document.getElementById("starship_crew");    
const starship_passengers = document.getElementById("starship_passengers");
const starship_cargo_capacity = document.getElementById("starship_cargo_capacity");


const vehicle_name = document.getElementById("vehicle_name");
const vehicle_model = document.getElementById("vehicle_model");
const vehicle_manufacturer = document.getElementById("vehicle_manufacturer");
const vehicle_length = document.getElementById("vehicle_length");
const vehicle_max_atm_speed = document.getElementById("vehicle_max_atm_speed");
const vehicle_crew = document.getElementById("vehicle_crew");    
const vehicle_passengers = document.getElementById("vehicle_passengers");
const vehicle_cargo_capacity = document.getElementById("vehicle_cargo_capacity");


const button = document.querySelector(".getRandom");
button.addEventListener('click', (e) => {
     
    e.preventDefault()

    character_name.innerText ='Loading...';
    character_birth.innerText ='Loading...';
    character_eye_color.innerText = 'Loading...';
    character_gender.innerText = 'Loading...';
    character_height.innerText = 'Loading...';
    character_mass.innerText = 'Loading...';
    character_hair_color.innerText = 'Loading...';
    character_skin_color.innerText = 'Loading...';

    // Generates a random number between 1 and 83
    character_rdmNumber = Math.ceil(83*Math.random());

    // Generates a random number between 1 and 36
    starship_rdmNumber = Math.ceil(36*Math.random());

    // Generates a random number between 1 and 39
    vehicle_rdmNumber = Math.ceil(39*Math.random());

        // CHARACTER SPECS
        fetch(`https://swapi.dev/api/people/${character_rdmNumber}`)
        .then(response => response.json())
        .then(character => {
        console.log(character)
        
        if (!character.name){
            character_name.innerText = "Character's name goes here";
        }
        else{
            character_name.innerText = character.name;
        }

        if (!character.birth_year){
            character_birth.innerText = "Character's birth year goes here";
        }
        else{
            character_birth.innerText = character.birth_year;
        }
        
        if (!character.eye_color){
            character_eye_color.innerText = "Character's eye color goes here";
        }
        else{
            character_eye_color.innerText = character.eye_color;
        }

        if(!character.gender){
            character_gender.innerText = "Character's gender goes here";
        }
        else{
            character_gender.innerText = character.gender;
        }

        if(!character.height){
            character_height.innerText = "Character's height goes here";
        }else{
            character_height.innerText = character.height + " cm";
        }

        if(!character.mass){
            character_mass.innerText = "Character's mass goes here";
        }else{
            character_mass.innerText = character.mass + " kg";
        }
        
        if(!character.hair_color){
            character_hair_color.innerText = "Character's hair color goes here";
        }else{
            character_hair_color.innerText = character.hair_color;
        }

        if(!character.skin_color){
            character_skin_color.innerText = "Character's skin color goes here";
        }else{
            character_skin_color.innerText = character.skin_color;
        }

        });

        // STARSHIP SPECS
        fetch(`https://swapi.dev/api/starships/${starship_rdmNumber}`)
        .then(response => response.json())
        .then(starship => {
        console.log(starship)
        

        
        if (!starship.name){
            starship_name.innerText = "Starships's name goes here";
        }
        else{
            starship_name.innerText = starship.name;
        }

        if (!starship.model){
            starship_model.innerText = "Starship's model goes here";
        }
        else{
            starship_model.innerText = starship.model;
        }
        
        if (!starship.manufacturer){
            starship_manufacturer.innerText = "Starship's manufacturer goes here";
        }
        else{
            starship_manufacturer.innerText = starship.manufacturer;
        }

        if(!starship.length){
            starship_length.innerText = "Starship's length goes here";
        }
        else{
            starship_length.innerText = starship.length + " m";
        }

        if(!starship.max_atmosphering_speed){
            max_atm_speed.innerText = "Starship's maximum atmospheric speed goes here";
        }else{
            starship_max_atm_speed.innerText = starship.max_atmosphering_speed + " km/s";
        }

        if(!starship.crew){
            crew.innerText = "Starships's crew number goes here";
        }else{
            starship_crew.innerText = starship.crew;
        }
        
        if(!starship.passengers){
            starship_passengers.innerText = "Starship's passengers goes here";
        }else{
            starship_passengers.innerText = starship.passengers;
        }

        if(!starship.cargo_capacity){
            cargo_capacity.innerText = "Starship's cargo capacity goes here";
        }else{
            starship_cargo_capacity.innerText = starship.cargo_capacity + " kg";
        }


        });

        // VEHICLE SPECS
        fetch(`https://swapi.dev/api/vehicles/${vehicle_rdmNumber}`)
        .then(response => response.json())
        .then(vehicle => {
        console.log(vehicle)
    
        
        if (!vehicle.name){
            vehicle_name.innerText = "Vehicles's name goes here";
        }
        else{
            vehicle_name.innerText = vehicle.name;
        }

        if (!vehicle.model){
            vehicle_model.innerText = "Vehicle's model goes here";
        }
        else{
            vehicle_model.innerText = vehicle.model;
        }
        
        if (!vehicle.manufacturer){
            vehicle_manufacturer.innerText = "Vehicle's manufacturer goes here";
        }
        else{
            vehicle_manufacturer.innerText = vehicle.manufacturer;
        }

        if(!vehicle.length){
            vehicle_length.innerText = "Vehicle's length goes here";
        }
        else{
            vehicle_length.innerText = vehicle.length + " m";
        }

        if(!vehicle.max_atmosphering_speed){
            vehicle_max_atm_speed.innerText = "Vehicle's maximum atmospheric speed goes here";
        }else{
            vehicle_max_atm_speed.innerText = vehicle.max_atmosphering_speed + " km/s";
        }

        if(!vehicle.crew){
            vehicle_crew.innerText = "Vehicles's crew number goes here";
        }else{
            vehicle_crew.innerText = vehicle.crew;
        }
        
        if(!vehicle.passengers){
            vehicle_passengers.innerText = "Vehicle's passengers goes here";
        }else{
            vehicle_passengers.innerText = vehicle.passengers;
        }

        if(!vehicle.cargo_capacity){
            vehicle_cargo_capacity.innerText = "Vehicle's cargo capacity goes here";
        }else{
            vehicle_cargo_capacity.innerText = vehicle.cargo_capacity + " kg";
        }


        });
})









     




