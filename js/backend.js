'use strict';

(function () {
  var URL_SAVE = 'https://1510.dump.academy/code-and-magick';
  var URL_LOAD = 'https://1510.dump.academy/code-and-magick/data';

  function addEventsServer(xhr, onLoad, onError) {
    xhr.addEventListener('load', function () {
      switch (xhr.status) {
        case 200:
          onLoad(xhr.response);
          break;
        case 400:
          onError('Неверный запрос');
          break;
        case 401:
          onError('Пользователь не авторизован');
          break;
        case 404:
          onError('Ничего не найдено');
          break;
        default:
          onError('Неизвестный статус: ' + xhr.status + ' ' + xhr.statusText);
      }
    });
    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });
    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    });
  }

  function load(onLoad, onError) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.timeout = 10000;
    xhr.open('GET', URL_LOAD);
    addEventsServer(xhr, onLoad, onError);
    xhr.send();
  }

  function save(data, onLoad, onError) {
    debugger;
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.timeout = 5000;
    xhr.open('POST', URL_SAVE);
    addEventsServer(xhr, onLoad, onError);
    xhr.send(data);
  }

  window.backend = {
    load: load,
    save: save
  };

})();
