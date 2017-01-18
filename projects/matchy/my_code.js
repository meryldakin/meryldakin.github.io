//create animal object

var animal = {};
animal.species = "feline";
animal["name"] = "Babycat";
animal.noises = [] ;

//create noises array
var noises = [];
noises[0]= "purr";
noises.push("meow");
noises.unshift("hiss");
noises[noises.length] = "growl";


//add noises array into animal property "noises" and add a new noise
animal["noises"] = noises;
animal.noises.push("rawr");


// create animals array to hold animal object
var animals = [];
animals.push(animal);


//create new animals and push to animals array
var duck = { 
  species: 'duck', 
  name: 'Jerome', 
  noises: ['quack', 'honk', 'sneeze', 'woosh'] 
}

animals.push(duck);


var dragon = {
  species: "dragon",
  name: "Dick",
  noises: ['roar', 'rumble', 'whistle']
}

var centipede = {
  species: "centipede",
  name: "Bob",
  noises: ["Zzz", "Ffff", "Skitter"]
}

animals.push(dragon);
animals.push(centipede);



/* Made friendlist array because we don't need the friend list 
* to have properties and it will be easier to manipulate the
* data as an array */

var friends = [];

// make function to select random animal name 
function randomAnimal (array) {
  
  function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
  }
  
  return array[getRandomInt(0,4)].name;
  
}


// push random animal name to friends array
friends.push(randomAnimal(animals));


/* add friends array with random animal name to one of the 
animals (I chose the centipede)*/

animals[3].friends = friends;


//create search that returns animal object if it exists

function search(animalName) {
  for (var i = 0; i < animals.length; i++) {
   if (animals[i].name === animalName){
     return animals[i];
   }
  }
  return null;
}



// function that finds an animal and replaces the entire object with new one
function edit(animalName, newObject) {
  for (var i = 0; i < animals.length; i++) {
   if (animals[i].name === animalName){
     return animals.splice(animals.indexOf(animals[i]), 1, newObject);
   }
  }  
}

/*edit("Jerome", {
  species: "elephant",
  name: "Eleanor",
  noises: ["honk", "soprano", "sneeze"]
});

console.log(animals);*/


// function that removes an animal

function remove(animalName) {
  for (var i = 0; i < animals.length; i++) {
   if (animals[i].name === animalName){
     return animals.splice(animals.indexOf(animals[i]), 1);
   }
  }  
}


// function that creates an animal


function create(animalObject) {
  var result = "";
  if (animalObject.name.length > 0 && animalObject.species.length > 0) {
    for (var i = 0; i < animals.length; i++) {
        if (animalObject.name === animals[i].name) {
            result = animalObject.name;
        }
        if (result === "") {
          return animals.push(animalObject)
        } 
    }
  return animals;  
  } 
}



create({
  name: "Dick",
  species: "derp",
  noises: ["Zzz", "Ffff", "Skitter"],
});

console.log(animals);











