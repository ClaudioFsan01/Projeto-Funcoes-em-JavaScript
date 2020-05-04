// closure //trdução = fecho
// Closure é o escopo criado quando uma função é declarada 
// Esse escopo permite a função acessar e manipular variaveis externas à função 
// Contexto lexico em ação !

const x = 'Global'

function fora(){
   const x = 'Local'
    function dentro(){ /* A função dentro() acessa a variavel externa const x = 'Local' pois essa ultima foi declarada 
     dentro do mesmo escopo da função dentro() */
       return x
    }

    return dentro()
}

const minhaFuncao = fora()

console.log(minhaFuncao) /* Nesse contexto  a função dentro() que está sendo retornada carrega consigo o escopo que no qual ela foi declarada,
   (Closure) esse escopo permite a função acessar e manipular variaveis externas à função. Nesse contexto a função dentro() que foi declarada
   dentro da função fora() consegue acessar as variaves externas no caso a const x  que recebeu o valor 'Local' que está dentro 
   do escopo no qual a função dentro() foi declarada. Por isso que nesse contexto  o valor que será mostrado é o valor 'Local'
   atribuido à variavel x declarada dentro da função fora() . */

