var makeBouncyDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.append('<img src="images/bounce.gif" alt="bouncer" class="team animated infinite bounce"/>');
};

makeBouncyDancer.prototype = Object.create(MakeDancer.prototype);
makeBouncyDancer.prototype.constructor = makeBouncyDancer;

makeBouncyDancer.prototype.step = function () {
  this.$node.toggle();
};


