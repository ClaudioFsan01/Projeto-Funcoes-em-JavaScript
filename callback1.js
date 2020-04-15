/* Conceito de callback(chamar de volta) 
A ideia é quando passar uma função para outra função e quando determinado evento acontecer essa função 
passada ser disparada (chamada de volta). Essa função callback pode ser chamada uma ou varias vezes.
*/
/*
callback 
Função que será executada (chamada de volta) em cada elemento do array que a função forEach() está percorrendo , 
essa funçaõ recebida no parametro do forEach() recebe 2 argumentos:
o nome do elemento (String)
o índice do elemento (number)

 */

 /*Obs: O padrão mais utilizado na web é o padrão observer */

 const fabricantes =["Mercedes ", "Audi ","BMW "] /* Array fabricantes */

 function imprimir(indice, nome){
     console.log(`${indice + 1}. ${nome}`)
 }

 fabricantes.forEach(imprimir) /*  O método forEach() executa uma dada função em cada elemento de um array, ou seja , 
 ele percorre os elementos do array e pra cada elemento chama a função que ele recebeu no seu parametro. No nosso exemplo
 passamos no parametro do forEach(imprimir) então para cada elemento do array a função imprimir 
 será invocada sendo passado para essa função imprimir(indice, nome) o indice do elemento do array e o nome do elemento.
 */

 fabricantes.forEach(function (nomeFabricante) {console.log(nomeFabricante)}) /* para cada elemento 
 do array fabricantes o forEach vai invocar a função anonima function (nomeFabricante) {console.log(nomeFabricante)}
 passando para o parametro dessa função um valor String ou seja , o nome do fabricante */

 fabricantes.forEach(nomeFabricante=>console.log(nomeFabricante)) /* passando função Arrow com um parametro */

 fabricantes.forEach((nomeFabricante, indice)=> console.log(nomeFabricante, "-", indice)) /* passando função Arrow com dois parametros */