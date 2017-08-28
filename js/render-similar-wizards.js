'use strict';

(function () {

  var WIZARDS = window.CONSTATNS.WIZARDS_ATTRIBUTES;

  var similarWizards = getArrayWizards(WIZARDS.WIZARDS_QUANTITY);

  function getArrayWizards(numberWizards) {
    var wizardsArray = [];

    for (var i = 0; i < numberWizards; i++) {
      wizardsArray.push({
        name: window.util.getRandomValue(WIZARDS.WIZARD_NAMES) + ' ' +
        window.util.getRandomValue(WIZARDS.WIZARD_SURNAMES),
        coatColor: window.util.getRandomValue(WIZARDS.COAT_COLORS),
        eyesColor: window.util.getRandomValue(WIZARDS.EYES_COLORS)
      });
    }
    return wizardsArray;
  }

  function renderWizard(wizard) {
    var wizardElement = document.querySelector('#similar-wizard-template').content.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
  }

  function renderSimilarWizards(wizardsArray) {
    var userDialog = document.querySelector('.setup');
    var similarListElement = userDialog.querySelector('.setup-similar-list');

    for (var i = 0; i < wizardsArray.length; i++) {
      similarListElement.appendChild(renderWizard(wizardsArray[i]));
    }

    userDialog.querySelector('.setup-similar').classList.remove('hidden');
  }

  renderSimilarWizards(similarWizards);

})();
