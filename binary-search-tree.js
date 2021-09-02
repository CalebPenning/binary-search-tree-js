class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val, node=this.root) {
    // if empty, node with val=val becomes the root
    if (node === null) {
      this.root = new Node(val)
      return this
    }
    // otherwise, find "correct" spot for node
    // reference our current node passed in otherwise our default root
    let current = node 
    while (true) {
      // if our value is less than our current nodes value
      // check if the left is null, if so, insert new node there
      if (val < current.val) {
        if (!current.left) {
          current.left = new Node(val)
          return this
        }
        // otherwise, current node becomes it's left 
        else current = current.left
      } 
      // if our value is greater than the current
      // do the opposite of our past step
      else if (val > current.val) {
        if (!current.right) {
          current.right = new Node(val)
          return this
        } else current = current.right
      }
    } 
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, current = this.root) {
    if (!this.root) {
      this.root = new Node(val)
      return this
    }

    if (val < current.val) {
      if (!current.left) {
        current.left = new Node(val)
        return this
      }
      return this.insertRecursively(val, current.left)
    }

    else {
      if (!current.right) {
        current.right = new Node(val)
        return this
      }
      return this.insertRecursively(val, current.right)
    }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val, current = this.root) {
    if (!current) return 
    while (current) {
      if (current.val === val) return current
      if (val < current.val) current = current.left
      else if (val > current.val) current = current.right
    }
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, current=this.root) {
    if (!current) return
    if (current.val === val) return current
    if (val < current.val) return this.findRecursively(val, current.left)
    else if (val > current.val) return this.findRecursively(val, current.right)
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder(node=this.root) {
    let nodes = []
    const traverse = node => {
      nodes.push(node.val)
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
    }
    traverse(node)
    return nodes
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder(node=this.root) {
    let nodes = []
    const traverse = node => {
      if (node.left) traverse(node.left)
      nodes.push(node.val)
      if (node.right) traverse(node.right)
    }
    traverse(node)
    return nodes
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder(node=this.root) {
    let nodes = []
    const traverse = node => {
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
      nodes.push(node.val)
    }
    traverse(node)
    return nodes
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs(node=this.root) {
    let queue = []
    let nodes = []
    queue.push(node)

    while (queue.length) {
      node = queue.shift()
      nodes.push(node.val)
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
    return nodes
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
