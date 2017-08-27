'use strict';

(function () {

  var wizards = getArrayWizards(window.WIZARD_ATTRIBUTES.WIZARDS_QUANTITY);

  function getArrayWizards(numberWizards) {
    var wizardsArray = [];

    for (var i = 0; i < numberWizards; i++) {
      wizardsArray.push({
        name: window.random.getRandomValue(window.WIZARD_ATTRIBUTES.WIZARD_NAMES) + ' ' +
        window.random.getRandomValue(window.WIZARD_ATTRIBUTES.WIZARD_SURNAMES),
        coatColor: window.random.getRandomValue(window.WIZARD_ATTRIBUTES.COAT_COLORS),
        eyesColor: window.random.getRandomValue(window.WIZARD_ATTRIBUTES.EYES_COLORS)
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

  function renderSimilarWizards(similarWizards) {
    var userDialog = document.querySelector('.setup');
    var similarListElement = userDialog.querySelector('.setup-similar-list');

    for (var i = 0; i < similarWizards.length; i++) {
      similarListElement.appendChild(renderWizard(similarWizards[i]));
    }

    userDialog.querySelector('.setup-similar').classList.remove('hidden');
  }

  renderSimilarWizards(wizards);

})();
