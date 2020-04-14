let comparaComThis = function (param){
    console.log(this === param) /* No contexto de uma função normal (literal) verificando se o this é estritamente igual ao objeto global passado no parametro 
    nesse contexto do node */
}

comparaComThis(global) /* passando o objeto global (no caso do node o objeto global se chama global)  */

/* outro exemplo*/

const obj = {} // constante recebe objeto vazio 

comparaComThis = comparaComThis.bind(obj)     /* Na funcao anonima literal atribuida a variavel  comparaComThis
acessamos a função bind() e passamos no seu parametro o objeto vazio obj. Nesse caso a função bind() "amarrou" 
o objeto vazio a essa função anonima portanto a palavra this agora fará referencia a esse objeto vazio*/ 

comparaComThis(global) /* Neste caso o resultado será falso pois agora a palavra this faz referencia ao objeto 
vazio "amarrado" pela função bind() na função anonima atribuida a variavelcomparaComThis  */

comparaComThis(obj) /* Agora o resultado será verdadeiro*/

/* Exemplos no  contexto da Funcão Arrow */

let comparaComThisArrow = param => console.log('comparaComThisArrow : ',this === param) /* Funçaõ Arrou atribuida a variavel comparaComThisArrow  , anonima, sem parenteses pois só possui 
um unico parametro, sem as chaves {} portanto com o return implícito.
Verificando se o objeto global passado no parametro é estritamente igual ao objeto referenciado pela palavra this.
 Vamos verificar que não, pois essa função Arrow foi definida dentro de um modulo do node , cada arquivo do node representa 
 um modulo. Então se cada arquivo do node representa um modulo e a função foi escrita diretamente dentro de um arquivo e no 
 contexto lexo foi escrito dentro do modulo e quem é o dono dessa função é o proprio modulo. 
 Nesse contexto o this aponta para o modulo corrente por isso this não varia como na função normal */


comparaComThisArrow(global) /* Ao contrario da função normal, o this na função Arrow não aponta para o objeto global 
portanto nesse contexto o resultado é falso.
*/

comparaComThisArrow(module.exports)  /* maneira correta de referenciar o modulo atual nesse contexto de função Arrow no node é usando o 
: module.exports*/


/* Teste usando a função bind() em função Arrow */

comparaComThisArrow = comparaComThisArrow.bind(obj)


comparaComThisArrow(obj) /*Neste contexto o resultado é falso pois mesmo amarrando o objeto vazio à função Arrow
usando o bind(), o this não vai variar, vai prevalecer o contexto no qual a função Arrow foi escrita e this vai apontar 
para o modulo corrente na qual a função foi escrita  */


comparaComThisArrow(module.exports) /* Resultado igual a true*/

 /* OBS Importante : O this de uma função Arrow é o this associado ao contexto no qual a função foi escrita e por isso 
 o this nunca vai variar mesmo forçando sua alteração com o uso da função bind() conforme tentamos acima */