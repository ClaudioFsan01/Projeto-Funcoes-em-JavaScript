const soma = function (x,y){
    return x+y
}

const imprimirResultado = function (a, b, operacao =soma){ /* A função anonima recebe 3 parametros a,b e operacao essa ultima vai operar
    encima dos parametros a e b mas caso não seja passado o terceiro parametro operacao, por padrao esse parametro vai receber a função soma  */
   
    console.log(operacao(a,b)) /* chamando a função soma() recebida no parametro operacao passando os parametros a e b recebidos no parametro da função 
    anonima atribuida a constante imprimirResultado */
}


imprimirResultado(2,3) /* passei os valores para os parametros a e b mas não passei o terceiro parametro 
para operação , então por padrão operacao vai receber a função soma */

imprimirResultado(7,3, function (x,y){return x-y}) /* Agora estou passando o terceiro parametro uma função anonima
que recebe dois parametros x e y. Nesse caso a funçaõ  imprimirResultado(a, b, operacao =soma) vai receber os valores
7,3 e a function (x,y){return x-y}*/

/* passando uma Arrow Function */

imprimirResultado(4,5, (x,y)=>x*y) 

/* criando um objeto Pessoa 
   Criado um objeto com o atributo falar à qual foi atribuido uma função anonima. Esse objeto 
   foi atribuido a constante Pessoa
 */

const Pessoa = { 
    falar: function (){
        console.log('Ola')
    }
}

 Pessoa.falar()


 
 