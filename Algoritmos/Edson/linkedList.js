//Define um elemento unitario da nossa lista    
class Node {
           constructor(elemento)  {
                this.elemento = elemento;
                this.proximo = null;
           } 
    }

    //define a lista encadeada
    class LinkedList {
        //A lista inicia indicando que não possui elemento, e que o topo e o ultimo elemento são nulos
        constructor(){
            this.conta = 0;
            this.primeiro = null;
            this.ultimo = null;
        }
        
        //quando adiciono um elemento verifico se a lista está vazia com count=0
        add(novoElemento) {
            if(this.conta == 0)
            //se está vazia eu digo que tanto o topo quanto o inicio recebem o meu elemento
                this.primeiro = this.ultimo = novoElemento;
            else
            //se tem algum elemento já, eu digo que o próximo do topo é o novo elemento e seto o tipo com ele
                this.ultimo.proximo = novoElemento;
                this.ultimo = novoElemento;
            this.conta++;
        }

        print() {
            //para exibir a lista eu pego uma variavel auxiliar e seto com o elemento do inicio
            var aux = this.primeiro;
            //vou percorrendo a lista mostrando o elemento e troco a variavel auxiliar para o indicado no next até que este seja nulo
            // ou seja chegou no topo
            while(aux!=null){
                console.log(aux.elemento);
                aux = aux.proximo;
            }
        }

    }

    var Lista = new LinkedList()

    Lista.add(new Node(1));
  
    Lista.add(new Node('Fabio'));

    Lista.add(new Node('01/01/2022 13:00'));
     
    Lista.add(new Node(321));
    Lista.print();
    