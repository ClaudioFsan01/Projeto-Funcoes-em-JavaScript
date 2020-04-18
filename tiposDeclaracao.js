console.log(soma(2,3))
//console.log(sub(15,6))
//console.log(mult(5,6))

/* function declaration 
 function soma(x, y){return x+y}
 vantagem q o interpretador já carregou as funções declaradas dessa forma possibilitando as mesmas 
serem chamadas em linhas anteriores de onde foram declaradas conforme o exemplo acima : */
function soma(x, y){return x+y}

/* function expression 
const sub = function (x,y) {return x-y} 
funções anonimas que são atribuidas à constantes não podem serem chamadas em linhas anteriores somente em linhas posteriores
 */
const sub = function (x,y) {return x-y}
console.log(sub(15,6))

// named function expression (pouco usada)
/*vantagem de quando a função estiver sendo debugada aparece o nome da função no stack 
 Da mesma forma que as function expression as  named function expression tambem não podem serem chamadas em linhas anteriores somente em linhas posteriores
 porque o interpretador entende que embora a função seja nomeada,  ela só foi atribuida à constante 
 em uma linha posterior à linha de onde está sendo chamada*/

const mult = function mult(x, y){return x*y}
console.log(mult(5,6))




