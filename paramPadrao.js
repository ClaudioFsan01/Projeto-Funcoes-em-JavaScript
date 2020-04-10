// estrategia 1 para gerar valor padrão

function soma1(a, b, c){

    a = a || 1
    b = b || 1
    c = c || 1
    
    return a+b+c

}

//console.log(soma1(), soma1(3), soma1(2,2,2), soma1(0,0,0)) // soma1(0,0,0) nesse caso o zero é entendido como undefined
// portanto o retorno é 3 pois assume o valor padrão

// estrategia 2,3,4 para gerar valor padrão

function soma2(a, b, c){ // a é o indice 0 , b indice 1 , c indice 2

    a = a !== undefined ? a : 1  // se o valor de a for estritamente diferente de indefinido pega o valor de a apos ?
    // se não, pega o valor de 1 apos :
   b = 1 in arguments ? b : 1  // uma vez q a é o indice 0 logo b é o indice 1. Nesse caso estou perguntando se dentro 
   //do parametro existe o argumento de indice 1 ? se sim, pega ele, no caso o b. Se não pega o valor 1
   
   c = isNaN(c) ? 1 : c // se o valor do argumento c não é um numero ? pega o valor 1 , se não : pega o valor de c
 return a+b+c   
}

//console.log(soma2(), soma2(3), soma2(1,2,3), soma2(0,0,0))

//  valor padrão do es2015

function soma3(a=1, b=1, c=1){
 return a+b+c
}

console.log(soma3(), soma3(2), soma3(2,3,4), soma3(0,0,0))