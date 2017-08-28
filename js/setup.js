'use strict';

// Открытие-закрытие окна настроек персонажа
(function () {

  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');

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


