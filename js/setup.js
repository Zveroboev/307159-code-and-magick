'use strict';

// Открытие-закрытие окна настроек персонажа
(function () {

  window.setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = window.setup.querySelector('.setup-close');

  function closeSetup() {
    window.setup.classList.add('hidden');

    // Удаляю обработчики закрытия
    setupClose.removeEventListener('click', closeSetup);
    setupClose.removeEventListener('keydown', closeSetupOnKeyDown);
    document.removeEventListener('keydown', closeSetupOnPressEsc);
    // Добавляю Обработчики открытия
    setupOpen.addEventListener('click', openSetup);
    setupOpen.addEventListener('keydown', openSetupOnKeyDown);
  }

  function openSetup() {
    window.setup.classList.remove('hidden');

    // Удаляю обработчики открытия
    setupOpen.removeEventListener('click', openSetup);
    setupOpen.removeEventListener('click', openSetupOnKeyDown);
    // Добавляю обработчики закрытия
    setupClose.addEventListener('click', closeSetup);
    setupClose.addEventListener('keydown', closeSetupOnKeyDown);
    document.addEventListener('keydown', closeSetupOnPressEsc);
  }

  function openSetupOnKeyDown(evt) {
    window.util.isEnterEvent(evt, openSetup);
  }

  function closeSetupOnKeyDown(evt) {
    window.util.isEnterEvent(evt, closeSetup);
  }

  function closeSetupOnPressEsc(evt) {
    window.util.isEscEvent(evt, closeSetup);
  }

  setupOpen.addEventListener('click', openSetup);
  setupOpen.addEventListener('keydown', openSetupOnKeyDown);

})();

// Валидация формы в окне натсроек перснажа
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
