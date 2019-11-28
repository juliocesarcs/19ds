

//Consrtuctores
class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }

  class TreeUBB {
    constructor(node) {
      this.node = node;
    }


// seccion donde se crea e inserta un nodo
    insert(n, node = this.node) {
        if (node.left==null) {
          node.left = n;
          return node;
        } else if (node.right==null) {
          node.right = n;
          return node;
        } else if (node.right!=null && node.left.right==null) {
          return this.insert(n, node.left);
        } else if (node.left!=null && node.right.left==null) {
          return this.insert(n, node.right);
        } else if (node.right!=null && node.right.right==null) {
          return this.insert(n, node.right);
        } else {
          return this.insert(n, node.left);
        }
      }


// seccion para borrar un nodo
    remove(remove, node=this.node) {
      if (node==null) {
        return null;
      }
      if (node.left.data==remove) {
        node.left = null;
        return node;
      } else if (node.right.data==remove) {
        node.right = null;
        return node;
      } else if (node.right!=null && node.left.right==null){
        return this.remove(remove, node.left);
      } else if (node.left!=null && node.right.left==null){
        return this.remove(remove, node.right);
      } else if (node.right!=null && node.right.right==null){
        return this.remove(remove, node.right);
      } else {
        return this.remove(remove, node.left);
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



//Metodo de Ordenamiento preorder
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

  //En este apartado se crean los nodos que que contrendan el arbol
  let raiz = new Node(1);
  let child1 = new Node(2);
  let child2 = new Node(3);
  let child3 = new Node(4);
  let child4 = new Node(5);
  let child5 = new Node(6);
  let child6 = new Node(7);
  let child7 = new Node(8);
  let child8 = new Node(9);

  //En esta seccion es donde se agrgan los nodos al arbol
  let t1 = new TreeUBB(raiz);
  t1.insert(child1);
  t1.insert(child2);
  t1.insert(child3);
  t1.insert(child4);
  t1.insert(child5);
  t1.insert(child6);
  t1.insert(child7);
  t1.insert(child8);



  ///////////// Esta seccion es la zona de implementacion del codigo
  console.log('btf');
  console.log(t1.bft());
  console.log('');
  console.log('');
  console.log('preorder');
  t1.preOrder();
  console.log('');
  console.log('');
  console.log("remove")
  t1.remove(4);