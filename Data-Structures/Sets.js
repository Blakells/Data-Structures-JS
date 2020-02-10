var Set = function() {
  var set = Object.create(setPrototype);
  set.storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (!(this.contains(item))) {
    this.storage[item] = item;
  }
};

setPrototype.contains = function(item) {
  return this.storage[item] !== undefined;
};

setPrototype.remove = function(item) {
  if (this.contains(item)) {
    delete this.storage[item];
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
