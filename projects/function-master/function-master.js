
function objectValues(object){
   // values not keys
    return Object.values(object);
}

function keysToString(object){
  var arrOfObj = Object.keys(object);
  return arrOfObj.join(' ');
}

function valuesToString(object){
  var arrOfObj = Object.values(object);
  function isStringFilter(entry){
    return typeof entry == "string";
  }
  var onlyStrings = arrOfObj.filter(isStringFilter);  
  return onlyStrings.join(' ');
}

function arrayOrObject(entry){
  if (Array.isArray(entry)){
    return "array";
  } else if (typeof entry === "object" && entry instanceof Date === false && typeof entry !== null && typeof entry !== undefined){
    return "object";    
  }
}

function capitalizeWord(string){
  return string[0].toUpperCase();
}

function capitalizeWord(string){
  var stringArr = string.split("");
  var firstLetter = stringArr[0].toUpperCase();
  stringArr.splice(0,1, firstLetter);
  return stringArr.join("");

}

function capitalizeAllWords(string){
  var stringArr = string.split(" ");
  var newArr = [];
  for (let i = 0; i < stringArr.length; i++){
    var splitWord = stringArr[i].split("");
    var firstLetter = splitWord[0].toUpperCase();
    splitWord.splice(0,1, firstLetter);
    newArr.push(splitWord.join(""));
  }
  return newArr.join(" ");
}

function welcomeMessage(object){
  var stringArr = object.name.split("");
  var firstLetter = stringArr[0].toUpperCase();
  stringArr.splice(0,1, firstLetter);
  var name = stringArr.join("");
  return "Welcome " + name + "!";
}

function profileInfo(object){
  var name = object.name;
  var species = object.species;
  var capName = name.replace(name[0], name[0].toUpperCase());
  var capSpe = species.replace(species[0], species[0].toUpperCase());
  return capName + " is a " + capSpe;
}

function maybeNoises(object){
  if (object.noises && object.noises.length > 0){
    return object.noises.join(" ");
  } else {
    return "there are no noises";
  }
}

function hasWord(stringOfWords, stringToCheck){
  var stringToArray = stringOfWords.split(" ");
  return stringToArray.includes(stringToCheck);
}

function addFriend(newFriendName, object){
  object.friends.push(newFriendName);
  return object;
}

function isFriend(checkIfFriend, object){
  if (object.friends){
  return object.friends.includes(checkIfFriend);
  } else {
    return false;
  }
}

