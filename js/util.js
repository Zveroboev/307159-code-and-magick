'use strict';

(function () {

  window.CONSTATNS = {
    KEYCODES: {
      ESC_KEYCODE: 27,
      ENTER_KEYCODE: 13
    },
    WIZARDS_ATTRIBUTES: {
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
    }
  };

  window.util = {
    isEscEvent: function (evt, action) {
      if (evt.keyCode === window.CONSTATNS.KEYCODES.ESC_KEYCODE) {
        action();
      }
    },
    isEnterEvent: function (evt, action) {
      if (evt.keyCode === window.CONSTATNS.KEYCODES.ENTER_KEYCODE) {
        action();
      }
    },
    getRandomIndex: function (number) {
      return Math.floor(Math.random() * number);
    },
    getRandomValue: function (array) {
      return array[this.getRandomIndex(array.length)];
    },
    makeCounter: function () {
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
  };

})();
