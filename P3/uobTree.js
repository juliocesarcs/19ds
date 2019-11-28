class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }



  class TreeBOU {
    constructor(node) {
      this.node = node;
    }



    insert(n, node = this.node) {
      if (n.data < node.data && node.left === null) {
        node.left = n;
        return node;
      } else if (n.data > node.data && node.right === null) {
        node.right = n;
        return node;
      } else if (n.data < node.data && node.left) {
        return this.insert(n, node.left);
      } else if (n.data > node.data && node.right) {
        return this.insert(n, node.right);
      }
    }



    remove(key, node = this.node) {
      if (node == null) {
        return null;
      }
      if (node.left.data === key) {
        node.left = null;
        return node;
      } else if (node.right.data === key) {
        node.right = null;
        return node;
      } else if (key < node.data && node.left) {
        return this.remove(n, node.left);
      } else if (key > node.data && node.right) {
        return this.remove(n, node.right);
      }
    }



    bft(node = this.node) {
      let queue = [];
      let print = [];
      queue.push(node);
      while (queue.length) {
        let nodeTemp = queue.shift();
        print.push(nodeTemp.data);
        if (nodeTemp.left) {
          queue.push(nodeTemp.left);
        }
        if (nodeTemp.right) {
          queue.push(nodeTemp.right);
        }
      }
      return print;
    }



    preOrder(node = this.node) {
      console.log(node.data);
      if (node.left) {
        this.preOrder(node.left);
      }
      if (node.right) {
        this.preOrder(node.right);
      }
    }
  }


  const raiz = new Node(11);
  const child1 = new Node(5);
  const child2 = new Node(8);
  const child3 = new Node(4);
  const child4 = new Node(6);
  const child5 = new Node(2);

  const tree = new TreeBOU(raiz);
  tree.insert(child1);
  tree.insert(child2);
  tree.insert(child3);
  tree.insert(child4);
  tree.insert(child5);



  console.log('BTF');
  console.log(tree.bft());
  tree.remove(5);
  console.log('preOrden');
  tree.preOrder();
  tree;