'use strict';

var getMaxElement = function (times) {
  var max = -1;

  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
    }
  }
  return max;
};

var getColor = function (condition) {
  if (condition) {
    return 'rgba(255, 0, 0, 1)';
  } else {
    return 'rgba(0, 0, 255, ' + Math.random() + ')';
  }
};

window.renderStatistics = function (ctx, names, times) {

  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);
  ctx.fillStyle = 'white';
  ctx.fillRect(100, 10, 420, 270);
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили! ', 120, 40);
  ctx.fillText('Список результатов: ', 120, 60);

  var HISTOGRAM_HEIGHT = 150;
  var step = HISTOGRAM_HEIGHT / (getMaxElement(times) - 0);
  var BAR_WIDTH = 40;
  var INDENT = 50;
  var INITIAL_X = 140;
  var INITIAL_Y = 240;
  var LINE_HEIGHT = 15;
  var NAMES_Y = 260;
  var colonX = INDENT + BAR_WIDTH;

  for (var i = 0; i < times.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(names[i], INITIAL_X + colonX * i, NAMES_Y);
    ctx.fillText(Math.floor(times[i]), INITIAL_X + colonX * i, INITIAL_Y - (times[i] * step) - LINE_HEIGHT);
    ctx.fillStyle = getColor(names[i] === 'Вы');
    ctx.fillRect(INITIAL_X + colonX * i, INITIAL_Y - (times[i] * step), BAR_WIDTH, times[i] * step);
  }
};
