var MakeDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.top = top;
  this.left = left;
  this.step();
  this.setPosition();
};

MakeDancer.prototype.step = function () {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

MakeDancer.prototype.setPosition = function (top, left) {
  var styleSettings = {
    top: this.top,
    left: this.left
  };

MakeDancer.prototype.formation = function () {
  this.$node.css({'top': '470px'});
}

this.$node.css(styleSettings);
};
