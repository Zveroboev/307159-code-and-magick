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

function closeSetup() {
  setup.classList.add('hidden');

  // Удаляю обработчики закрытия
  setupClose.removeEventListener('click', closeSetup);
  setupClose.removeEventListener('keydown', closeSetupOnKeyDown);
  document.removeEventListener('keydown', closeSetupOnPressEsc);
  // Добавляю Обработчики открытия
  setupOpen.addEventListener('click', openSetup);
  setupOpen.addEventListener('keydown', openSetupOnKeyDown);
}

function openSetup() {
  setup.classList.remove('hidden');

  // Удаляю обработчики открытия
  setupOpen.removeEventListener('click', openSetup);
  setupOpen.removeEventListener('click', openSetupOnKeyDown);
  // Добавляю обработчики закрытия
  setupClose.addEventListener('click', closeSetup);
  setupClose.addEventListener('keydown', closeSetupOnKeyDown);
  document.addEventListener('keydown', closeSetupOnPressEsc);
}

function openSetupOnKeyDown(evt) {
  if (evt.keyCode === KEYCODES.ENTER_KEYCODE) {
    openSetup();
  }
}

function closeSetupOnKeyDown(evt) {
  if (evt.keyCode === KEYCODES.ENTER_KEYCODE) {
    closeSetup();
  }
}

function closeSetupOnPressEsc(evt) {
  if (evt.keyCode === KEYCODES.ESC_KEYCODE && evt.target !== userNameInput) {
    closeSetup();
  }
}

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var userNameInput = setup.querySelector('.setup-user-name');

setupOpen.addEventListener('click', openSetup);
setupOpen.addEventListener('keydown', openSetupOnKeyDown);

/* .......................................................... */

function onInputSayAboutValidity(evt) {
  var target = evt.target;

  if (!target.validity.valid) {
    if (target.validity.tooShort) {
      target.setCustomValidity('Имя должно состоять минимум из 2-х символов');
    } else if (target.validity.tooLong) {
      target.setCustomValidity('Имя не должно превышать 25-ти символов');
    } else if (target.validity.valueMissing) {
      target.setCustomValidity('Введите имя персонажа');
    }
  } else {
    userNameInput.setCustomValidity('');
  }
}

function onInputSayAboutLength(evt) {
  var target = evt.target;

  if (target.value.length < 2) {
    target.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else {
    target.setCustomValidity('');
  }
}

userNameInput.addEventListener('invalid', onInputSayAboutValidity);
userNameInput.addEventListener('input', onInputSayAboutLength);

/* .......................................................... */

var wizardAttributes = {
  wizardCoat: document.querySelector('.wizard-coat'),
  wizardFireball: document.querySelector('.setup-fireball-wrap'),
  wizardEyes: document.querySelector('.wizard-eyes')
};
var coatCounter = makeCounter();
var eyesCounter = makeCounter();
var fireballCounter = makeCounter();

function makeCounter() {
  var count = 1;

  return function (array) {
    if (count >= array.length) {
      count = 0;
      return count++;
    } else {
      return count++;
    }
  };
}

function getNextAttributeColor(evt) {
  var attributesStyle = evt.currentTarget.style;

  switch (evt.currentTarget) {
    case wizardAttributes.wizardCoat:
      attributesStyle.fill = WIZARD_ATTRIBUTES.COAT_COLORS[coatCounter(WIZARD_ATTRIBUTES.COAT_COLORS)];
      break;
    case wizardAttributes.wizardEyes:
      attributesStyle.fill = WIZARD_ATTRIBUTES.EYES_COLORS[eyesCounter(WIZARD_ATTRIBUTES.EYES_COLORS)];
      break;
    case wizardAttributes.wizardFireball:
      attributesStyle.background = WIZARD_ATTRIBUTES.FIREBALL_COLORS[fireballCounter(WIZARD_ATTRIBUTES.FIREBALL_COLORS)];
      break;
  }
}

wizardAttributes.wizardCoat.addEventListener('click', getNextAttributeColor);
wizardAttributes.wizardEyes.addEventListener('click', getNextAttributeColor);
wizardAttributes.wizardFireball.addEventListener('click', getNextAttributeColor);
