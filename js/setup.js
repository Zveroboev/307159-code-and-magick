'use strict';

// Открытие-закрытие окна настроек персонажа
(function () {

  window.setup = document.querySelector('.setup');

  var setupOpen = document.querySelector('.setup-open');
  var setupClose = window.setup.querySelector('.setup-close');
  var dialogHandle = window.setup.querySelector('.setup-user-pic');
  var userForm = window.setup.querySelector('.setup-wizard-form');
  var startPosition = {
    positionX: document.querySelector('.setup').style.left,
    positionY: document.querySelector('.setup').style.top
  };

  function closeSetup() {
    window.setup.classList.add('hidden');

    setupClose.removeEventListener('keydown', closeSetupOnKeyDown);
    document.removeEventListener('keydown', closeSetupOnPressEsc);

    setupOpen.addEventListener('click', openSetup);
    setupOpen.addEventListener('keydown', openSetupOnKeyDown);

    dialogHandle.removeEventListener('mousedown', window.moveSetupWindow);

    userForm.removeEventListener('submit', submitForm, window.util.showError);

    window.setup.style.top = startPosition.positionY;
    window.setup.style.left = startPosition.positionX;

    window.removeEventsForDragAndDrop();
  }

  function openSetup() {
    window.setup.classList.remove('hidden');

    setupOpen.removeEventListener('click', openSetup);
    setupOpen.removeEventListener('click', openSetupOnKeyDown);

    setupClose.addEventListener('click', closeSetup);
    setupClose.addEventListener('keydown', closeSetupOnKeyDown);
    document.addEventListener('keydown', closeSetupOnPressEsc);

    dialogHandle.addEventListener('mousedown', window.moveSetupWindow);

    userForm.addEventListener('submit', submitForm, window.util.showError);

    window.addEventsForDragAndDrop();
  }

  function submitForm(evt) {
    evt.preventDefault();
    window.backend.save(new FormData(userForm), closeSetup);
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
