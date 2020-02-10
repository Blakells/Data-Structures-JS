var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    // create a new object to add to the linked list
    var node = Node(value);
    // determine if linked list is empty or not
    if (!list.tail) {
      // if linked list is empty, assign the current object to the head, and to the tail
      // remember every object we add to list has a .next value set to null
      list.head = node;
      list.tail = node;
      // if it already has a tail, then we set the current list.tail value to the new object we are putting in
      // then we set the tail.next value to the new object (which has it's own .next value set to null)
    } else {
      list.tail.next = node;
      list.tail = node;
    }
  };
  // remember we want to remove the current head, and then re-assign the head 'status' to the next object
  // also we have to remember we can't just use 'delete' because that would delete the entire list, since they are linked
  list.removeHead = function() {
    // create a variable that has the value of the current head in it, which has the NEXT object it contains inside of it
    var old = list.head;
    // since the current head object has a 'next' value of the next object in the list, we simply re-assign the head to that object
    list.head = old.next;
    // figure out if both the tail and the head are equal to the same object, and if so, assign the tail back to a null value
    if (list.tail === old) {
      list.tail = null;
    }
    // like a pop statement, we want to know what the value of said object that was in the linked list contains
    return old.value;
  };

  list.contains = function(target, current = this.head) {
    if (current === null) {
      return false;
    } else if (current.value === target) {
      return true;
    }
    else {
      return list.contains(target, current.next);
    }
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
