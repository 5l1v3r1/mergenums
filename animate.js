function Animate() {
  this._symbol = new NumberSymbol(NumberSymbol.SYMBOLS[0]);

  this._animating = false;
  this._startSymbol = null;
  this._animationStart = 0;

  this._path = document.getElementById('path');
  this._showSymbol(this._symbol);
}

Animate.DURATION = 400;

Animate.prototype.animateTo = function(s) {
  this._startSymbol = this._symbol;
  this._symbol = s;
  this._animationStart = new Date().getTime();
  if (!this._animating) {
    this._animating = true;
    window.requestAnimationFrame(this._tick.bind(this));
  }
};

Animate.prototype._tick = function() {
  var delay = new Date().getTime() - this._animationStart;
  var duration = delay / Animate.DURATION;
  if (duration >= 1) {
    this._animating = false;
    this._showSymbol(this._symbol);
  } else {
    this._showSymbol(this._startSymbol.intermediate(this._symbol, duration));
    window.requestAnimationFrame(this._tick.bind(this));
  }
};

Animate.prototype._showSymbol = function(s) {
  this._path.setAttribute('d', s.data);
};

window.addEventListener('load', function() {
  window.animate = new Animate();
});
