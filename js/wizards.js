'use strict';

(function () {

  var WIZARDS = window.CONSTATNS.WIZARDS_ATTRIBUTES;
  var WIZARDS_QUANTITY = WIZARDS.WIZARDS_QUANTITY;
  var COAT_COLOR = WIZARDS.STANDART_COAT_COLOR;
  var EYES_COLOR = WIZARDS.STANDART_EYES_COLOR;

  var setupPlayer = document.querySelector('.setup-player');
  var wizardCoat = setupPlayer.querySelector('.wizard-coat');
  var wizardEyes = setupPlayer.querySelector('.wizard-eyes');

  var wizards = [];

  function onLoad(data) {
    wizards = data;
    window.updateWizards();
  }

  function renderWizard(wizard) {
    var wizardElement = document.querySelector('#similar-wizard-template').content.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  }

  function renderSimilarWizards(array) {
    var userDialog = document.querySelector('.setup');
    var similarListElement = userDialog.querySelector('.setup-similar-list');
    var fragment = document.createDocumentFragment();

    similarListElement.innerHTML = '';
    for (var i = 0; i < WIZARDS_QUANTITY; i++) {
      fragment.appendChild(renderWizard(array[i]));
    }
    similarListElement.appendChild(fragment);
    userDialog.querySelector('.setup-similar').classList.remove('hidden');
  }

  window.updateWizards = function () {
    var coatColor = wizardCoat.style.fill || COAT_COLOR;
    var eyesColor = wizardEyes.style.fill || EYES_COLOR;

    function getRank(element) {
      var rank = 0;

      if (element.colorCoat === coatColor) {
        rank += 2;
      }
      if (element.colorEyes === eyesColor) {
        rank += 1;
      }
      return rank;
    }

    wizards.sort(function (left, right) {
      return getRank(right) - getRank(left);
    });
    renderSimilarWizards(wizards);
  };

  window.backend.load(onLoad, window.util.showError);
})();
