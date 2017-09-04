'use strict';

(function () {

  var WIZARDS = window.CONSTATNS.WIZARDS_ATTRIBUTES;
  var WIZARDS_QUANTITY = WIZARDS.WIZARDS_QUANTITY;

  function getRandomWizards(array) {
    var wizards = [];
    var repeatedWizards = [];

    for (var i = 0; i < WIZARDS_QUANTITY; i++) {
      do {
        var randomIndex = window.util.getRandomIndex(array.length);
      } while (repeatedWizards.indexOf(randomIndex) !== -1);

      wizards.push(array[randomIndex]);
      repeatedWizards.push(randomIndex);
    }
    renderSimilarWizards(wizards);
  }

  function renderWizard(wizard) {
    var wizardElement = document.querySelector('#similar-wizard-template').content.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  }

  function renderSimilarWizards(wizardsArray) {
    var userDialog = document.querySelector('.setup');
    var similarListElement = userDialog.querySelector('.setup-similar-list');
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < wizardsArray.length; i++) {
      fragment.appendChild(renderWizard(wizardsArray[i]));
    }
    similarListElement.appendChild(fragment);
    userDialog.querySelector('.setup-similar').classList.remove('hidden');
  }

  window.backend.load(getRandomWizards, window.util.showError);

})();
