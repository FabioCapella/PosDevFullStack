console.log("Hello World!");
console.log("Fundamentos de Computação e Algoritmos");

/*function avaliaParidade(limiteSuperior ){

    for(let i=0; i<limiteSuperior; i++){
        if(i%2==1)
            console.log(i +  " é um número impar.")
        else    
            console.log(i + " é número par")

    }    
}

avaliaParidade(10);*/


var fibonacci = new Array();

fibonacci[1] = 1;
fibonacci[2] = 2;

for (let cont = 3; cont < 20; cont++){
    fibonacci[cont] = fibonacci[cont-1] + fibonacci[cont-2];
}

console.log( fibonacci.join());