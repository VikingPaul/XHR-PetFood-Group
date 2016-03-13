// This function receives the data from the Dog Food json file (i.e. the 
//  responseText from the dogfood.json XHR pull), parses it and inserts it into the DOM
function loadDogs() {

  // dgfood will hold the string containing the dogfood info that is to be
  //  inserted into the DOM
  var dgfood = "";

  // This parses the json file into a js readable object and stores it so
  //  the data can be accessed below 
  var dogFoods = JSON.parse(this.responseText);

  // This reduces the amount of typing to access the data in the dogFoods object
  var dogfood = dogFoods.dog_brands;

  // Loops through the individual names of the pet food brands, inserts the 
  //  name into the dgfood string along with the enclosing HTML elements.
  for (i in dogfood) {
    dgfood += `<ul><li>${dogfood[i].name}</li>`;
    dgfood += `<div class="type">`;

    // Loops through the individual types of pet food, inserts the 
    //  name into the dgfood string along with the enclosing HTML elements.
    for(j in dogfood[i].types) {
      dgfood += `<ul><li>${dogfood[i].types[j].type}</li>`;
      dgfood += `<div class="volumes">`;

      // Loops through the individual volumes along with their prices for each pet
      //  food and inserts the volume and price info into the dgfood string 
      //  along with the enclosing HTML elements.
      for (k in dogfood[i].types[j].volumes) {
        dgfood += `<ul><li>${dogfood[i].types[j].volumes[k].name}: ${dogfood[i].types[j].volumes[k].price}</li></ul>`;
      };

      // Closes the div and ul from the inner loop (food type)
      dgfood += `</div>`;
      dgfood += `</ul>`;
    };

    // Closes the div and ul from the outer loop (food brand)
    dgfood += `</div>`;
    dgfood += `</ul>`;
  };

  // Adds the dgfood string (DOM elements and text) to the static <div> #dogfood
  document.getElementById('dogfood').innerHTML = dgfood;
};

// This function receives the data from the Cat Food json file (i.e. the 
//  responseText from the dogfood.json XHR pull), parses it and inserts it into the DOM
function loadCats() {

  // ctfood will hold the string containing the catfood info that is to be
  //  inserted into the DOM
  var ctfood = "";

  // This parses the json file into a js readable object and stores it so
  //  the data can be accessed below 
  var catFoods = JSON.parse(this.responseText);
  var catfood = catFoods.cat_brands;

  // Loops through the individual names of the pet food brands, inserts the 
  //  name into the ctfood string along with the enclosing HTML elements.
  for (i in catfood) {
    ctfood += `<ul><li>${catfood[i].name}</li><ul><li class="breeds">Breeds: `;

    // Each of the cat foods have a Breeds category.  This loops through
    //  each of the breed names and inserts it into a div below the cat food name
    //  along with the enclosing HTML elements.
    ctfood += ` / `;
    for(l in catfood[i].Breeds) {
      ctfood += `${catfood[i].Breeds[l]} / `;
    };

    // Closes the breed list and opens the div holding the food type, volume and price info
    ctfood += "</li></ul>";
    ctfood += "<div class='type'>";

    // Loops through the individual types of pet food, inserts the 
    //  name into the ctfood string along with the enclosing HTML elements.
    for(j in catfood[i].types) {
      ctfood += `<ul><li>${catfood[i].types[j].type}</li>`;
      ctfood += `<div class="volumes">`;

      // Loops through the individual volumes along with their prices for each pet
      //  food and inserts the volume and price info into the ctfood string 
      //  along with the enclosing HTML elements.
      for (k in catfood[i].types[j].volumes) {
        ctfood += `<ul><li>${catfood[i].types[j].volumes[k].name}: ${catfood[i].types[j].volumes[k].price}</li></ul>`;
      };

      // Closes the div and ul from the inner loop (food type)
      ctfood += `</div>`;
      ctfood += `</ul>`;
    };

    // Closes the div and ul from the outer loop (food brand)
    ctfood += `</div>`;
    ctfood += `</ul>`;
  };

  // Adds the ctfood string (DOM elements and text) to the static <div> #catfood
  document.getElementById('catfood').innerHTML = ctfood;
};

// Sets, Opens, Sends and receives the XHR for the Dog Food (dogfood.json) file 
var dog = new XMLHttpRequest();
dog.addEventListener("load", loadDogs);
dog.open("GET", "dogs.json");
dog.send();

// Sets, Opens, Sends and receives the XHR for the Cat Food (catfood.json) file 
var cat = new XMLHttpRequest();
cat.addEventListener("load", loadCats);
cat.open("GET", "catfood.json");
cat.send();