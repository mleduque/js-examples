
var animals = [];

function addAnimal() {
  var name = document.getElementById('input-name').value;
  var species = document.getElementById('input-species').value;
  var race = document.getElementById('input-race').value;
  var age = document.getElementById('input-age').value;
  var photo = document.getElementById('input-photo').value;
  animals.push({name: name, species:species, race: race, age: age, photo: photo});
  refreshInventory();
}

function refreshInventory() {
  var inventory = document.getElementById('inventory');
  while (inventory.hasChildNodes()) {
    inventory.removeChild(inventory.firstChild);
  }
  for (var i = 0; i < animals.length; i++) {
    var animal = animals[i];
    var entry = document.createElement('article');
    var name = document.createElement('span');
    name.setAttribute('class', 'animal-name');
    name.textContent = animal.name;
    
    var species = document.createElement('span');
    species.setAttribute('class', 'animal-species');
    species.textContent = animal.species;
    
    var race = document.createElement('span');
    race.setAttribute('class', 'animal-race');
    race.textContent = animal.race;
    
    entry.appendChild(name);
    entry.appendChild(species);
    entry.appendChild(race);
    inventory.appendChild(entry);
  }
}

function init() {
  document.getElementById('add-button').addEventListener('click', addAnimal);
}
init();
