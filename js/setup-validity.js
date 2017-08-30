'use strict';

// Валидация формы в окне настроек перснажа
(function () {

  var userNameInput = window.setup.querySelector('.setup-user-name');

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

})();
