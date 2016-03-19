"use strict"

// This function receives the data from both the json files parses it and inserts it into the DOM
function loadFood() {

  // food will hold the string containing the petfood info that is to be inserted into the DOM
  var food = "";

  // This parses the json file into a js readable object and stores it so the data can be accessed below and chooses which file to use.
  var animalFoods = JSON.parse(this.responseText);
  if (animalFoods.dog_brands) {;
    var petfood = animalFoods.dog_brands;
    var foodplacement = document.getElementById('dogfood')
  } else {
    var petfood = animalFoods.cat_brands;
    var foodplacement = document.getElementById('catfood')
  }
  // Loops through the individual names of the pet food brands, inserts the name into the food string along with the enclosing HTML elements.
  for (let i in petfood) {
    food += `<ul><li>${petfood[i].name}</li>`;

    // Each of the cat foods have a Breeds category.  This loops through each of the breed names and inserts it into a div below the cat food name along with the enclosing HTML elements.
    if (foodplacement.id === "catfood") {
      food += '<ul><li class="breeds">Breeds: / ';
      for(let l in petfood[i].Breeds) {
        food += `${petfood[i].Breeds[l]} / `;
      };

      // Closes the breed list and opens the div holding the food type, volume and price info
      food += "</li></ul>";
    }
    food += "<div class='type'>";

    // Loops through the individual types of pet food, inserts the name into the food string along with the enclosing HTML elements.
    for(let j in petfood[i].types) {
      food += `<ul><li>${petfood[i].types[j].type}</li>`;
      food += `<div class="volumes">`;

      // Loops through the individual volumes along with their prices for each pet food and inserts the volume and price info into the food string along with the enclosing HTML elements.
      for (let k in petfood[i].types[j].volumes) {
        food += `<ul><li>${petfood[i].types[j].volumes[k].name}: ${petfood[i].types[j].volumes[k].price}</li></ul>`;
      };

      // Closes the div and ul from the inner loop (food type)
      food += `</div>`;
      food += `</ul>`;
    };

    // Closes the div and ul from the outer loop (food brand)
    food += `</div>`;
    food += `</ul>`;
  };

  // Adds the food string (DOM elements and text) to the static <div> #petfood
  foodplacement.innerHTML = food;
};

// Sets, Opens, Sends and receives the XHR for the Dog Food (dogfood.json) file 
var dog = new XMLHttpRequest();
dog.addEventListener("load", loadFood);
dog.open("GET", "dogs.json");
dog.send();

// Sets, Opens, Sends and receives the XHR for the Cat Food (petfood.json) file 
var cat = new XMLHttpRequest();
cat.addEventListener("load", loadFood);
cat.open("GET", "catfood.json");
cat.send();