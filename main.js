var dgfood = "";
function loadDogs() {
  var dogFoods = JSON.parse(this.responseText);
  var dogfood = dogFoods.dog_brands;
  for (i in dogfood) {
    dgfood += `<ul><li>${dogfood[i].name}</li>`;
    dgfood += `<div class="type">`;
    for(j in dogfood[i].types) {
      dgfood += `<ul><li>${dogfood[i].types[j].type}</li>`;
      dgfood += `<div class="volumes">`;
      for (k in dogfood[i].types[j].volumes) {
        dgfood += `<ul><li>${dogfood[i].types[j].volumes[k].name}: ${dogfood[i].types[j].volumes[k].price}</li></ul>`;
      };
      dgfood += `</div>`;
      dgfood += `</ul>`;
    };
    dgfood += `</div>`;
    dgfood += `</ul>`;
  };
  document.getElementById('dogfood').innerHTML = dgfood;
};

var ctfood = "";
function loadCats() {
  var catFoods = JSON.parse(this.responseText);
  var catfood = catFoods.cat_brands;
  for (i in catfood) {
    ctfood += `<ul><li>${catfood[i].name}</li><ul><li class="breeds">Breeds: `;
    for(l in catfood[i].Breeds) {
      ctfood += `${catfood[i].Breeds[l]} `;
          };
    ctfood += "</li></ul>";
    ctfood += "<div class='type'>";
    for(j in catfood[i].types) {
      ctfood += `<ul><li>${catfood[i].types[j].type}</li>`;
      ctfood += `<div class="volumes">`;
      for (k in catfood[i].types[j].volumes) {
        ctfood += `<ul><li>${catfood[i].types[j].volumes[k].name}: ${catfood[i].types[j].volumes[k].price}</li></ul>`;
      };
      ctfood += `</div>`;
      ctfood += `</ul>`;
    };
    ctfood += `</div>`;
    ctfood += `</ul>`;
  };
  document.getElementById('catfood').innerHTML = ctfood;
};
var dog = new XMLHttpRequest();
dog.addEventListener("load", loadDogs);
dog.open("GET", "dogs.json");
dog.send();

var cat = new XMLHttpRequest();
cat.addEventListener("load", loadCats);
cat.open("GET", "catfood.json");
cat.send();