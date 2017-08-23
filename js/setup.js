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
  FIREBALL_COLORS: [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'
  ],
  WIZARDS_QUANTITY: 4
};
var KEYCODES = {
  ESC_KEYCODE: 27,
  ENTER_KEYCODE: 13
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

/* .......................................................... */

function closeSetupOnClick() {
  setup.classList.add('hidden');
}

function openSetupOnClick() {
  setup.classList.remove('hidden');
}

function openSetupOnKeyDown(evt) {
  if (evt.keyCode === KEYCODES.ENTER_KEYCODE) {
    openSetupOnClick();
  }
}

function closeSetupOnKeyDown(evt) {
  if (evt.keyCode === KEYCODES.ENTER_KEYCODE) {
    closeSetupOnClick();
  }
}

function closeSetupOnPressEsc(evt) {
  if (evt.keyCode === KEYCODES.ESC_KEYCODE && evt.target !== userNameInput) {
    closeSetupOnClick();
  }
}

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var userNameInput = setup.querySelector('.setup-user-name');

setupOpen.addEventListener('keydown', openSetupOnKeyDown);
setupOpen.addEventListener('click', openSetupOnClick);
setupClose.addEventListener('keydown', closeSetupOnKeyDown);
setupClose.addEventListener('click', closeSetupOnClick);
document.addEventListener('keydown', closeSetupOnPressEsc);

/* .......................................................... */

userNameInput.addEventListener('invalid', function () {
  if (!userNameInput.validity.valid) {
    if (userNameInput.validity.tooLong) {
      userNameInput.setCustomValidity('Имя не должно превышать 50-ти символов');
    } else if (userNameInput.validity.valueMissing) {
      userNameInput.setCustomValidity('Введите имя персонажа');
    }
  } else {
    userNameInput.setCustomValidity('');
  }
});

/* .......................................................... */

var wizardAttributes = {
  wizardCoat: document.querySelector('.wizard-coat'),
  wizardFireball: document.querySelector('.setup-fireball-wrap'),
  wizardEyes: document.querySelector('.wizard-eyes')
};
var counter = makeCounter();

function makeCounter() {
  var count = 1;

  return function (array) {
    if (count >= array.length) {
      count = 0;
      return count++;
    }
    return count++;
  };
}

function getNextAttributeColor(evt) {
  var attributesColor = evt.currentTarget.style;

  switch (evt.currentTarget) {
    case wizardAttributes.wizardCoat:
      attributesColor.fill = WIZARD_ATTRIBUTES.COAT_COLORS[counter(WIZARD_ATTRIBUTES.COAT_COLORS)];
      break;
    case wizardAttributes.wizardEyes:
      attributesColor.fill = WIZARD_ATTRIBUTES.EYES_COLORS[counter(WIZARD_ATTRIBUTES.EYES_COLORS)];
      break;
    case wizardAttributes.wizardFireball:
      attributesColor.background = WIZARD_ATTRIBUTES.FIREBALL_COLORS[counter(WIZARD_ATTRIBUTES.FIREBALL_COLORS)];
      break;
  }
}

wizardAttributes.wizardCoat.addEventListener('click', getNextAttributeColor);
wizardAttributes.wizardEyes.addEventListener('click', getNextAttributeColor);
wizardAttributes.wizardFireball.addEventListener('click', getNextAttributeColor);
