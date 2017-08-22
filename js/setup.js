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
  ],
  WIZARDS_QUANTITY: 4
};

var wizards = getArrayWizards(WIZARD_ATTRIBUTES.WIZARDS_QUANTITY);

function getRandomIndex(number) {
  return Math.floor(Math.random() * number);
}

function getRandomValue(array) {
  return array[getRandomIndex(array.length)];
}

function getArrayWizards(numberWizards) {
  var wizardsArray = [];

  for (var i = 0; i < numberWizards; i++) {
    wizardsArray.push({
      name: getRandomValue(WIZARD_ATTRIBUTES.WIZARD_NAMES) + ' ' +
      getRandomValue(WIZARD_ATTRIBUTES.WIZARD_SURNAMES),
      coatColor: getRandomValue(WIZARD_ATTRIBUTES.COAT_COLORS),
      eyesColor: getRandomValue(WIZARD_ATTRIBUTES.EYES_COLORS)
    });
  }
  return wizardsArray;
}

function renderWizard(wizard) {
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
}

function renderSimilarWizards(similarWizards) {
  var userDialog = document.querySelector('.setup');
  var similarListElement = userDialog.querySelector('.setup-similar-list');

  for (var i = 0; i < similarWizards.length; i++) {
    similarListElement.appendChild(renderWizard(similarWizards[i]));
  }

  userDialog.querySelector('.setup-similar').classList.remove('hidden');
}

renderSimilarWizards(wizards);

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');

setupOpen.addEventListener('click', function () {
  setup.classList.remove('hidden');
});

setupClose.addEventListener('click', function () {
  setup.classList.add('hidden');
});
