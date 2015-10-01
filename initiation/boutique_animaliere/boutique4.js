
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

    var info = document.createElement('div');
    info.setAttribute('class', 'animal-info');

    var name = document.createElement('div');
    name.setAttribute('class', 'animal-name');
    name.textContent = animal.name;

    var species = document.createElement('div');
    species.setAttribute('class', 'animal-species');
    species.textContent = 'Espèce : ' + animal.species;

    var race = document.createElement('span');
    race.setAttribute('class', 'animal-race');

    race.textContent = 'Race : ' + animal.race;
    entry.appendChild(name);
    info.appendChild(species);
    info.appendChild(race);
    inventory.appendChild(entry);
    inventory.appendChild(info);
  }
}

function init() {
  document.getElementById('add-button').addEventListener('click', addAnimal);
}
init();
