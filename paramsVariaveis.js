function soma(){ // embora não tenha argumento nesse parametro podemos passar argumentos pra esse parametro
  // dentro da função é possivel recuperar esses argumentos usando uma propriedade chamada arguments
  
  let soma = 0

    for(i in arguments) { //(i in arguments) 
        // no parametro do for estamos pegando cada elemento do array arguments e indexando em i atraves do operador in
        soma += arguments[i]  

    }

    return soma
}


console.log(soma())
console.log(soma(1))
console.log(soma(1.2,3.4, 5.6))
console.log(soma(6.3, 4.5, 'teste'))
console.log(soma('concatenando-', 'String-', 'e testando'))