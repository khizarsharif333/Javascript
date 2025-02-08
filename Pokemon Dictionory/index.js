// fetch is a built-in JavaScript function used to make HTTP requests (GET, POST, PUT, DELETE, etc.) 
// to servers. It is part of the Fetch API and is commonly used for retrieving data from APIs or 
// sending data to a server asynchronously. It returns a promise.

// Basic Syntax

// fetch(url, options)
//   .then(response => response.json()) // Convert response to JSON
//   .then(data => console.log(data))  // Handle the data
//   .catch(error => console.error("Error:", error)); // Handle errors


// fetch("https://jsonplaceholder.typicode.com/posts", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json"
//   },
//   body: JSON.stringify({
//     title: "My Post",
//     body: "This is the content",
//     userId: 1
//   })
// })
//   .then(response => response.json())
//   .then(data => console.log("Success:", data))
//   .catch(error => console.error("Error:", error));

const errorMessage = document.getElementById("error");

async function fetchPokemonData(){

    // console.log(name);

    try{

        const name = document.getElementById("input-field").value.toLowerCase();

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

        console.log(response);

        if(!response.ok) throw new Error("No pokemon found!");
        
        const data = await response.json();

        console.log(data);

        errorMessage.style.display = "none";

        document.getElementById("pokemonImage").src = data.sprites.front_default;
        document.getElementById("name").textContent = `Name : ${data.name}`;
        document.getElementById("weight").textContent = `Weight : ${data.weight}`;
    }
    catch(error) {
        errorMessage.style.display = "block";
        errorMessage.textContent = error;
    }
}