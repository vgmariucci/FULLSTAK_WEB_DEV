console.log("Successfully loaded fetch_API.js");

fetch('https://swapi.dev/api/people/1/')
    .then(response => response.json())
    .then(data => {
    console.log(data);
});

