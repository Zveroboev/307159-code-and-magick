'use strict';

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);

  ctx.fillStyle = 'white';
  ctx.fillRect(100, 10, 420, 270);
  ctx.strokeRect(100, 10, 420, 270);

  ctx.fillStyle = '#000';
  ctx.font = 'bold 16px PT Mono';
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  var maxTime = -1;
  var maxTimeIndex = -1;

  for (var i = 0; i < times.length; i++) {
    if (times[i] > maxTime) {
      maxTime = times[i];
      maxTimeIndex = i;
    }
  }

  var histogramHeight = 150;
  var step = histogramHeight / maxTime;
  step = -step; // Делаю значение отрицательным т.к. диаграмма строится снизу-вверх, а для этого нужно отрицательное значение высоты.

  ctx.textBaseline = 'top';
  for (i = 0; i < times.length; i++) {
    ctx.fillRect(150 + (50 + 40) * i, 245, 40, times[i] * step);
    ctx.fillText(names[i], 150 + (50 + 40) * i, 250);
    ctx.fillText(Math.round(times[i]), 150 + (50 + 40) * i, 75);
  }
};
