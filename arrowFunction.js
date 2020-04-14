//função normal 

let dobro = function(a){ 
    return a*2
}

/*função Arrow é sempre uma função anonima
  para chamar uma função Arrow depois é necessario armazenala em uma variavel 
  conforme o exemplo:
*/
 dobro =  (a) => { // ao contrario de constante, variavel do tipo let pode ser modificada
     return a*2 
       }          
  
       /* pode ser tirado os parenteses se for um unico parâmetro
          E se o corpo {} for retirado o retorno fica implícito
          Recomendado para funções que possui uma unica linha um unico trabalho
       */
       dobro = a => a*2

       console.log(dobro(Math.PI))

       // outros exemplos:

       let ola = function(){
           return 'Ola como vai ?'
       }

       console.log(ola())

       ola = () => { return 'Tudo bem ?'}

       console.log(ola())

       ola = () => 'Estou bem e vc ?'   // sem o corpo da função {} o return fica implícito

       console.log(ola())
       // ou

       ola = _ => 'Estou bem tambem obrigado !' // possui parametro

       console.log(ola())



      