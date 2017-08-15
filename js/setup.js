'use strict';

function getRandomArbitrary(array) {
  return Math.floor(Math.random() * array.length);
}

function getRandomName(names, surnames) {
  var randomName = names[getRandomArbitrary(names)];
  var randomSurname = surnames[getRandomArbitrary(surnames)];
  return randomName + ' ' + randomSurname;
}

function getRandomCoatColor(coatColor) {
  return coatColor[getRandomArbitrary(coatColor)];
}

function getRandomEyesColor(eyesColor) {
  return eyesColor[getRandomArbitrary(eyesColor)];
}

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');
// userDialog.querySelector('.setup-similar').classList.remove('hidden');

var WIZZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var COAT_COLOR = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];
var wizzard = [
  {
    name: getRandomName(WIZZARD_NAMES, WIZZARD_SURNAMES),
    coatColor: getRandomCoatColor(COAT_COLOR),
    eyesColor: getRandomEyesColor(EYES_COLOR)
  },
  {
    name: getRandomName(WIZZARD_NAMES, WIZZARD_SURNAMES),
    coatColor: getRandomCoatColor(COAT_COLOR),
    eyesColor: getRandomEyesColor(EYES_COLOR)
  },
  {
    name: getRandomName(WIZZARD_NAMES, WIZZARD_SURNAMES),
    coatColor: getRandomCoatColor(COAT_COLOR),
    eyesColor: getRandomEyesColor(EYES_COLOR)
  },
  {
    name: getRandomName(WIZZARD_NAMES, WIZZARD_SURNAMES),
    coatColor: getRandomCoatColor(COAT_COLOR),
    eyesColor: getRandomEyesColor(EYES_COLOR)
  }
];

console.log(getRandomName(WIZZARD_NAMES, WIZZARD_SURNAMES));
console.log(getRandomCoatColor(COAT_COLOR));
console.log(getRandomCoatColor(EYES_COLOR));


