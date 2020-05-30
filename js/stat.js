var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;

var BAR_WIDTH = 40; // Ширина колонки
var BAR_HEIGHT = 150; // Высота колонки
var BAR_GAP = 50; // Расстояние между колонками

var GAP_X = 10; // Пробел
var GAP_Y = 260;
var MESSANGE_TOP = 90;
var TEXT_NAME = 20;


var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};



var getMaxElement = function(arr) { // Найдем максимальное время в массиве times
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
    renderCloud(ctx, CLOUD_X + GAP_X, CLOUD_Y + GAP_X, 'rgba(0, 0, 0, 0.7)');
    renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

    ctx.fillStyle = '#000';
    ctx.font = '16px PT Mono';
    ctx.fillText('Ура вы победили!', CLOUD_X + GAP_X, 45);
    ctx.fillText('Список результатов:', CLOUD_X + GAP_X, 60);

    for (var i = 0; i < names.length; i++) {
       var maxTime = getMaxElement(times);
       var userName = names.indexOf('Вы');

       ctx.fillStyle = '#000';
       ctx.fillText(Math.floor(times[i]), CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i, (CLOUD_Y + MESSANGE_TOP) + (BAR_HEIGHT - (BAR_HEIGHT * times[i]) /maxTime) - TEXT_NAME);

       ctx.fillStyle = '#184';
       ctx.fillRect(CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i, (CLOUD_Y + MESSANGE_TOP) + (BAR_HEIGHT - (BAR_HEIGHT * times[i]) /maxTime), BAR_WIDTH, (BAR_HEIGHT * times[i]) / maxTime);

       ctx.fillStyle = '#000';
       ctx.fillText(names[i], CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i, CLOUD_Y + GAP_Y);
     }

    // ctx.fillStyle = '';
    // ctx.fillText('Вы', CLOUD_X + BAR_GAP, CLOUD_Y + GAP_Y);
    // ctx.fillRect(CLOUD_X + BAR_GAP, CLOUD_Y + MESSANGE_TOP, BAR_WIDTH, BAR_HEIGHT);
    //
    // ctx.fillStyle = '';
    // ctx.fillText('Иван', CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * 1, CLOUD_Y + GAP_Y);
    // ctx.fillRect(CLOUD_X + BAR_GAP + BAR_WIDTH + BAR_GAP, CLOUD_Y + MESSANGE_TOP, BAR_WIDTH, BAR_HEIGHT);
    //
    // ctx.fillText('Юлия', CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * 2, CLOUD_Y + GAP_Y);
    // ctx.fillRect(CLOUD_X + BAR_GAP + BAR_WIDTH + BAR_GAP + BAR_WIDTH + BAR_GAP, CLOUD_Y + MESSANGE_TOP, BAR_WIDTH, BAR_HEIGHT);
};
