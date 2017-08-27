'use strict';

(function () {

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
        attributesStyle.fill = window.WIZARD_ATTRIBUTES.COAT_COLORS[coatCounter(window.WIZARD_ATTRIBUTES.COAT_COLORS)];
        break;
      case wizardAttributes.wizardEyes:
        attributesStyle.fill = window.WIZARD_ATTRIBUTES.EYES_COLORS[eyesCounter(window.WIZARD_ATTRIBUTES.EYES_COLORS)];
        break;
      case wizardAttributes.wizardFireball:
        attributesStyle.background = window.WIZARD_ATTRIBUTES.FIREBALL_COLORS[fireballCounter(window.WIZARD_ATTRIBUTES.FIREBALL_COLORS)];
        break;
    }
  }

  wizardAttributes.wizardCoat.addEventListener('click', getNextAttributeColor);
  wizardAttributes.wizardEyes.addEventListener('click', getNextAttributeColor);
  wizardAttributes.wizardFireball.addEventListener('click', getNextAttributeColor);

})();
