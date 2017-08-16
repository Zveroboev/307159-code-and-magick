'use strict';

var WIZARD_ATTRIBUTES = {
  WIZARD_NAMES: ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
  WIZARD_SURNAMES: ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],
  EYES_COLORS: ['black', 'red', 'blue', 'yellow', 'green'],
  COAT_COLORS: [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ]
};

function getRandomIndex(number) {
  return Math.floor(Math.random() * number);
}

function getRandomValue(array) {
  return array[getRandomIndex(array.length)];
}

function getArrayWizards(numberWizards) {
  var wizardsArray = [];

  for (var i = 0; i < numberWizards; i++) {
    var randomWizard = {
      name: getRandomValue(WIZARD_ATTRIBUTES.WIZARD_NAMES) + ' ' +
      getRandomValue(WIZARD_ATTRIBUTES.WIZARD_SURNAMES),
      coatColor: getRandomValue(WIZARD_ATTRIBUTES.COAT_COLORS),
      eyesColor: getRandomValue(WIZARD_ATTRIBUTES.EYES_COLORS)
    };
    wizardsArray.push(randomWizard);
  }
  return wizardsArray;
}

function renderWizard(wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
}

var numberWizards = 4;
var wizards = getArrayWizards(numberWizards);
var userDialog = document.querySelector('.setup');
var similarListElement = userDialog.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

userDialog.classList.remove('hidden');

for (var i = 0; i < wizards.length; i++) {
  similarListElement.appendChild(renderWizard(wizards[i]));
}

userDialog.querySelector('.setup-similar').classList.remove('hidden');
