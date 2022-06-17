console.log("Hello World!");
console.log("Fundamentos de Computação e Algoritmos");

function avaliaParidade(limiteSuperior ){

    for(let i=0; i<limiteSuperior; i++){
        if(i%2==1)
            console.log(i +  " é um número impar.")
        else    
            console.log(i + " é número par")

    }    
}

avaliaParidade(10);