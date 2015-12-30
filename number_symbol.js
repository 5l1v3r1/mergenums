var PRECISION = 2;

function NumberSymbol(vec) {
  this.vec = vec;
  this.data = 'M' + vec[0].toFixed(PRECISION) + ',' + vec[1].toFixed(PRECISION) + ' ' +
    formatBezier(vec.slice(2)) + ' ' + formatBezier(vec.slice(8)) + ' ' +
    formatBezier(vec.slice(14)) + ' ' + formatBezier(vec.slice(20));
}

NumberSymbol.SYMBOLS = [
  [250, 50, 50, 0, 100, 100, 100, 200,
   0, 100, -50, 200, -100, 200,
   -50, 0, -100, -100, -100, -200,
   0, -100, 50, -200, 100, -200],
  [150, 150, 30, -10, 100, -50, 100, -100,
   0, 0, 0, 0, 0, 133,
   0, 0, 0, 0, 0, 133,
   0, 0, 0, 0, 0, 134],
  [125, 170, 0, -150, 250, -150, 250, 0,
   0, 50, -50, 80, -100, 130,
   0, 0, 0, 0, -130, 130,
   0, 0, 0, 0, 240, 0],
  [125, 170, 0, -150, 250, -150, 250, 0,
   0, 40, -40, 80, -80, 80,
   40, 0, 80, 40, 80, 80,
   0, 150, -250, 150, -250, 0],
  [350, 250, 0, 0, 0, 0, -250, 0,
   50, -30, 180, -150, 200, -200,
   0, 0, 0, 0, 0, 200, 0, 0, 0, 0, 0, 200],
  [375, 70, 0, 0, 0, 0, -250, 0,
   0, 0, 0, 0, 0, 150,
   200, -70, 250, 50, 250, 100,
   0, 150, -200, 150, -250, 50],
  [350, 65, 100, -50, -200, 100, -200, 225,
   0, 100, 50, 150, 100, 150,
   150, 0, 100, -150, 0, -150,
   -30, 0, -50, 0, -90, 30],
  [125, 100, 0, 0, 0, 0, 0, -50,
   0, 0, 0, 0, 250, 0,
   0, 0, 0, 0, -75, 200,
   0, 0, 0, 0, -75, 200],
  [250, 50, 150, 0, 150, 200, 0, 200,
   -150, 0, -150, 200, 0, 200,
   150, 0, 150, -200, 0, -200,
   -150, 0, -150, -200, 0, -200],
  [150, 435, 100, 50, 200, -100, 200, -225,
   0, -100, -50, -150, -100, -150,
   -150, 0, -100, 150, 0, 150,
   30, 0, 50, 0, 90, -30]
];

NumberSymbol.prototype.intermediate = function(end, prog) {
  var v = [];
  for (var i = 0, len = this.vec.length; i < len; ++i) {
    v[i] = (1-prog)*this.vec[i] + prog*end.vec[i];
  }
  return new NumberSymbol(v);
};

function formatBezier(values) {
  return 'c' + values[0].toFixed(PRECISION) + ',' + values[1].toFixed(PRECISION) + ' ' +
    values[2].toFixed(PRECISION) + ',' + values[3].toFixed(PRECISION) + ' ' +
    values[4].toFixed(PRECISION) + ',' + values[5].toFixed(PRECISION);
}
