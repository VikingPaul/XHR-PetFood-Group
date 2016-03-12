var dgfood = ""
function loadDogs() {
  var dogFoods = JSON.parse(this.responseText)
  var dogfood = dogFoods.dog_brands
  console.log("dogFood", dogfood);
  for (i in dogfood) {
    dgfood += `<ul><li>${dogfood[i].name}</li>`
    for(j in dogfood[i].types) {
      dgfood += `<ul><li>${dogfood[i].types[j].type}</li>`
      for (k in dogfood[i].types[j].volumes) {
        dgfood += `<ul><li>${dogfood[i].types[j].volumes[k].name}: ${dogfood[i].types[j].volumes[k].price}</li></ul>`
      };
      dgfood += `</ul>`
    }
    dgfood += `</ul>`
  }
  document.getElementById('dogfood').innerHTML = dgfood
}










var dog = new XMLHttpRequest();
dog.addEventListener("load", loadDogs);
dog.open("GET", "dogs.json");
dog.send();