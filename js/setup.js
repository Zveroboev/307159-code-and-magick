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

function renderWizard(wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
}

var WIZARD_ATTRIBUTES = {
  WIZARD_NAMES: ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
  WIZARD_SURNAMES: ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],
  EYES_COLOR: ['black', 'red', 'blue', 'yellow', 'green'],
  COAT_COLOR: [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ]
};
var wizards = [
  {
    name: getRandomName(WIZARD_ATTRIBUTES.WIZARD_NAMES, WIZARD_ATTRIBUTES.WIZARD_SURNAMES),
    coatColor: getRandomCoatColor(WIZARD_ATTRIBUTES.COAT_COLOR),
    eyesColor: getRandomEyesColor(WIZARD_ATTRIBUTES.EYES_COLOR)
  },
  {
    name: getRandomName(WIZARD_ATTRIBUTES.WIZARD_NAMES, WIZARD_ATTRIBUTES.WIZARD_SURNAMES),
    coatColor: getRandomCoatColor(WIZARD_ATTRIBUTES.COAT_COLOR),
    eyesColor: getRandomEyesColor(WIZARD_ATTRIBUTES.EYES_COLOR)
  },
  {
    name: getRandomName(WIZARD_ATTRIBUTES.WIZARD_NAMES, WIZARD_ATTRIBUTES.WIZARD_SURNAMES),
    coatColor: getRandomCoatColor(WIZARD_ATTRIBUTES.COAT_COLOR),
    eyesColor: getRandomEyesColor(WIZARD_ATTRIBUTES.EYES_COLOR)
  },
  {
    name: getRandomName(WIZARD_ATTRIBUTES.WIZARD_NAMES, WIZARD_ATTRIBUTES.WIZARD_SURNAMES),
    coatColor: getRandomCoatColor(WIZARD_ATTRIBUTES.COAT_COLOR),
    eyesColor: getRandomEyesColor(WIZARD_ATTRIBUTES.EYES_COLOR)
  }
];
var userDialog = document.querySelector('.setup');
var similarListElement = userDialog.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

userDialog.classList.remove('hidden');

for (var i = 0; i < wizards.length; i++) {
  similarListElement.appendChild(renderWizard(wizards[i]));
}

userDialog.querySelector('.setup-similar').classList.remove('hidden');
