var Tree = function(value, parent = null) {
  var newTree = {};
  newTree.value = value;
  newTree.parent = parent;
  newTree.children = [];
  extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

var extend = function(obj, methods) {
  for (var key in methods) {
    obj[key] = methods[key];
  }
}

treeMethods.addChild = function(value) {
  var newChild = Tree(value, this);
  this.children.push(newChild);
};

treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  }
  for (var i = 0; i < this.children.length; i++) {
    if (this.children[i].contains(target)) {
      return true;
    }
  }
  return false;
};
