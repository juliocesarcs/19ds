class Graph{
    constructor(node)
    {
        this.node = node;
        this.AdList = new Map();
    }

    addVertex(v){
        this.AdList.set(v, []);
    }

    addEdge(v,w){
        this.AdList.get(v).push(w);
        this.AdList.get(w).push(v);
    }

    printGraph(){
        let get_keys = this.AdList.keys();
        for(let i of get_keys){
            let get_values = this.AdList.get(i);
            let conc = "";
            for (let j of get_values)
            conc += j + " ";
            console.log(i + " -> " + conc);
        }
    }

}

let g = new Graph(6); 
let vertices = [ 'A', 'B', 'C', 'D', 'E', 'F' ];

for (let i = 0; i < vertices.length; i++) { 
    g.addVertex(vertices[i]); 
} 

g.addEdge('A', 'B'); 
g.addEdge('A', 'D'); 
g.addEdge('A', 'E'); 
g.addEdge('B', 'C'); 
g.addEdge('D', 'E'); 
g.addEdge('E', 'F'); 
g.addEdge('E', 'C'); 
g.addEdge('C', 'F');

g.printGraph(); 


/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////  en esta seccion siendo honesto con lo que tengo no era suficiente 
/////////////////////////////////////////////////////////  asi que no pude o no supe realizar los de tipo voleano 
/////////////////////////////////////////////////////////  asi que me apoye con el odigo de un compañero
/////////////////////////////////////////////////////////




class Graph{
    constructor(r){
        this.r=r
        this.c=r
        this.data = this.init()
    }
    init() {
        let init = [];
    
        for (let i=0; i<this.r; i++) {
          init[i] = new Array(this.r);
    
          for (let j = 0; j < this.c; j++) {
            init[i][j] = 0;
          }
        }
         return init;
      }

      printGraph(){
        return this.data
      }

      addVertex(){
          this.r++
          this.c++
          this.data.length++
          for (let i=0; i<this.data.length-1 ;i++){
              this.data[i].length++
          }
          for (let i=this.data.length-1; i<this.data.length; i++) {
            this.data[i] =new Array(this.data.length-1);
      
            for (let j = 0; j < this.data.length; j++) {
              this.data[i][j] = 0;
              this.data[j][i] = 0;
            }
          } 
        }

      addEdege(v1,v2,bol){
        this.data[v1][v2]++
        if(bol==true){
            this.data[v2][v1]++;
        }
      }
      
      isComplete(){
          let temp=0
        for (let i=0; i<this.data.length; i++) {
            for (let j = 0; j <this.data.length; j++) {
                if(this.data[i][i]!=0){
                    return false
                }else if(this.data[i][j]==1){
                    temp++
                }
            }
        }
        if(temp==(this.data.length*this.data.length)-this.data.length){
            return true
        }else{
            return false
        }
    }

    isMultigraph(){
        let temp=0
        for (let i=0; i<this.data.length; i++) {
            for (let j = 0; j <this.data.length; j++) {
                if(this.data[i][i]!=0 ||this.data[i][j]>1){
                    temp++
                }
            }
        }
        if(temp!=0){
            return true
        }else{
            return false
        }
    }

    isSubgraph(g){
        if(this.r>g.r || this.c>g.r){
            return false + "\n operracion umposible, numeros de vertices mayor"
        }
        let temp=0   
        for (let i=0; i<this.data.length; i++) {
            for (let j = 0; j <this.data.length; j++) {
                if(this.data[i][j]<=g.data[i][j]){
                    temp++
                }
            }
        }
        if(temp==this.data.length*this.data.length){
            return true
        }else{
            return false
        }
    }
    isDirected() {
        for (let i = 0; i < this.data.length; i++) {
          for (let j = 0; j < this.data.length; j++) {
            if (this.data[i][j] != this.data[j][i]) {
              return false;
            }
          }
        }
    
        return true;
      }

    isIsomorphic(g) {
        let temp=0
        for (let i=0; i<this.data.length; i++) {
            for (let j = 0; j <this.data.length; j++) {
                if(this.data[i][j]==g.data[i][j]){
                    temp++
                }
            }
        }
        if(temp==this.data.length*this.data.length){
            return true
        }else{
            return false
        }
     }
}
g2=new Graph(2)
g3=new Graph(3)
g4=new Graph(4)
g5=new Graph(4)
g6=new Graph(4)
g7=new Graph(4)

//creacon subgrafo del grafo1
g2.addEdege(0,1,true)

//un grafo completo (grafo g3)
g3.addEdege(2,0,true)
g3.addEdege(1,0,true)
g3.addEdege(2,1,true)

g4.addEdege(1,0,true)

//crea un Multigrafo conectado a si mismo
g4.addEdege(0,0) 

 //grafo dirigido
g5.addEdege(1,0,true)
g5.addEdege(2,0,true)
g5.addEdege(3,0,true)
g5.addEdege(3,1,true)
g5.addEdege(3,2,true)

//grafo no dirigido
g6.addEdege(0,2)
g6.addEdege(3,0) 
g6.addEdege(1,3)
g6.addEdege(2,3)

//grafo isomorfico (grafo 5)
g7.addEdege(1,0,true)
g7.addEdege(2,0,true)
g7.addEdege(3,0,true) 
g7.addEdege(3,1,true)
g7.addEdege(3,2,true)



console.log("Matriz de un grafo")
g1=new Graph(5)
console.log(g1.printGraph())
console.log(" ")


console.log("añadir")
g1.addVertex()
console.log(g1.printGraph())
console.log(" ")


console.log("añadir una Co")
g1.addEdege(1,0,true)
g1.addEdege(2,0,true)
console.log(g1.printGraph())
console.log(" ")


console.log("isComplete")
console.log(g1.printGraph())
console.log(g1.isComplete())
console.log(" ")

console.log("isMultigraph")
console.log(g4.printGraph())
console.log(g4.isMultigraph())
console.log(" ")

console.log("isSubgraph")
console.log("Grafo 2")
console.log(g2.printGraph())
console.log("subgrafo")
console.log("Grafo 1")
console.log(g1.printGraph())
console.log(g2.isSubgraph(g1))

console.log("Método isDirected (Boolean-True)")
console.log(g5.printGraph())
console.log(g5.isDirected())
console.log(" ")

console.log("isIsomorphic")
console.log(g5.printGraph())
console.log(g6.printGraph())
console.log(g5.isIsomorphic(g6))
console.log(" ")

