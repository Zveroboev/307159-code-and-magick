'use strict';

(function () {
  // Смена цвета элементов персонажа
  var WIZARDS = window.CONSTATNS.WIZARDS_ATTRIBUTES;

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
        attributesStyle.fill = WIZARDS.COAT_COLORS[coatCounter(WIZARDS.COAT_COLORS)];
        break;
      case wizardAttributes.wizardEyes:
        attributesStyle.fill = WIZARDS.EYES_COLORS[eyesCounter(WIZARDS.EYES_COLORS)];
        break;
      case wizardAttributes.wizardFireball:
        attributesStyle.background = WIZARDS.FIREBALL_COLORS[fireballCounter(WIZARDS.FIREBALL_COLORS)];
        break;
    }
  }

  wizardAttributes.wizardCoat.addEventListener('click', getNextAttributeColor);
  wizardAttributes.wizardFireball.addEventListener('click', getNextAttributeColor);
  wizardAttributes.wizardEyes.addEventListener('click', getNextAttributeColor);


  // Реализация магазина и инвентаря
  var shopElement = document.querySelector('.setup-artifacts-shop');
  var artifactsElement = document.querySelector('.setup-artifacts');
  var draggedItem = null;

  function onDragStartInShop(evt) {
    if (evt.target.tagName.toLowerCase() === 'img') {
      draggedItem = evt.target.cloneNode();
      evt.dataTransfer.setData('text/plain', evt.target.alt);
      artifactsElement.style.outline = '2px dashed red';
    }
  }

  function onDragStartInCell(evt) {
    if (evt.target.tagName.toLowerCase() === 'img') {
      draggedItem = evt.target;
      evt.dataTransfer.setData('text/plain', evt.target.alt);
      artifactsElement.style.outline = '2px dashed red';
    }
  }

  function onDragOverHandler(evt) {
    evt.preventDefault();
    return false;
  }

  function onDropHandler(evt) {
    if (evt.target.classList.contains('setup-artifacts-cell') && evt.target.children.length === 0) {
      evt.target.appendChild(draggedItem);
      draggedItem = null;
    }
    evt.target.style.backgroundColor = '';
    artifactsElement.style.outline = 'none';
    evt.preventDefault();
  }

  function onDragEnterHandler(evt) {
    if (evt.target.classList.contains('setup-artifacts-cell') && evt.target.children.length === 0) {
      evt.target.style.backgroundColor = 'yellow';
    }
    evt.preventDefault();
  }

  function onDragLeaveHandler(evt) {
    evt.target.style.backgroundColor = '';
    evt.preventDefault();
  }

  window.addEventsForDragAndDrop = function () {
    shopElement.addEventListener('dragstart', onDragStartInShop);
    artifactsElement.addEventListener('dragstart', onDragStartInCell);
    artifactsElement.addEventListener('dragover', onDragOverHandler);
    artifactsElement.addEventListener('drop', onDropHandler);
    artifactsElement.addEventListener('dragenter', onDragEnterHandler);
    artifactsElement.addEventListener('dragleave', onDragLeaveHandler);
  };
  window.removeEventsForDragAndDrop = function () {
    shopElement.removeEventListener('dragstart', onDragStartInShop);
    artifactsElement.removeEventListener('dragstart', onDragStartInCell);
    artifactsElement.removeEventListener('dragover', onDragOverHandler);
    artifactsElement.removeEventListener('drop', onDropHandler);
    artifactsElement.removeEventListener('dragenter', onDragEnterHandler);
    artifactsElement.removeEventListener('dragleave', onDragLeaveHandler);
  };


})();
