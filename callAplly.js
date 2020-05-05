function getPreco(imposto =0, moeda ='R$'){
return `${moeda} ${this.preco * (1- this.desconto) *(1+ imposto)}` 
}


const produto ={
    nome: 'Notebook',
    preco: 2999,
    desc : 0.15,
    getPreco 
}

global.preco =20
global.desconto =0.1

/*console.log(getPreco())  Nesse contexto a palavra this dentro da funçaõ getPreco fará referencia ao objeto 
 global */

/*console.log(produto.preco)  O objeto produto é o contexto passado para a função getPreco e nesse caso a palavra
this dentro da função getPreco fará referencia ao objeto produto  */


const carro ={
    preco : 10000,
    desconto : 0.2
}

console.log(getPreco.call(carro))

console.log(getPreco.apply(carro))

// A unica diferença entre as funções call e aplly são as formas de passarem os parametros ex :

console.log(getPreco.call(carro, 0.17, '$')) //Usando a função call() 1° parametro é o contexto ex: objeto carro, ou obj global, null
                                    // depois os parametros exigidos pela função getPreco

console.log(getPreco.apply(carro, [0.17, 'bitcoin'])) // Usando a função apply() passamos os parametros dentro de um array 
                              // 1° parametro é o contexto ex: objeto carro, ou obj global, null 
                              // depois passamos o array com os parametros

                              //passando o escopo global
console.log(getPreco.apply(global, [0.17, 'euro'])) 