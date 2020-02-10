var BinarySearchTree = function(value) {
    var newBST = Object.create(BinarySearchTree.prototype);
    this.right = null;
    this.left = null;
    this.value = value;
    return newBST;
};

BinarySearchTree.prototype.insert = function(value) {
    // first create a new BST to insert
    var BST = BinarySearchTree(value);
    // check if the current search tree has a value or not 
    if (!this.value) {
        // if it doesn't, insert it
        this.value = BST;
        // check if the value is less than the current tree's value
    } else if (value < this.value) {
        // if it is, and it doesn't exist, assign the left value to the current node
        if (!this.left) {
            this.left = BST;
        }
        // if the left value does exist, recursively iterate until it doesn't
        else {
            this.left.insert(value);
        }
        // check if the value is greater than the current tree's value
    } else if (value > this.value) {
        if (!this.right) {
            this.right = BST;
        } else {
            this.right.insert(value);
        }
    }
};

BinarySearchTree.prototype.contains = function(value) {
    if (this.value === value) {
        return true;
    } else if (value < this.value) {
        return this.left.contains(value);
    } else if (value > this.value) {
        return this.right.contains(value);
    } else {
        return false;
    }
};

BinarySearchTree.prototype.depthFirstLog = function(cb) {
    if (this.value) {
        cb(this.value);
    }
    if (this.left) {
        this.left.depthFirstLog(cb);
    }
    if (this.right) {
        this.right.depthFirstLog(cb);
    }
};

BinarySearchTree.prototype.leaves = function() {
    var leaves = [];
    if (!this.right && !this.left) {
        leaves.push(this.value);
    }
    if (this.left) {
        leaves = leaves.concat(this.left.leaves());
    }
    if (this.right) {
        leaves = leaves.concat(this.right.leaves());
    }
    return leaves;
};