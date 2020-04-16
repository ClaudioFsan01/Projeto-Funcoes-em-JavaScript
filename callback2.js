// sem callback

const notas = [4.2, 6.7, 8.4, 9, 9.5, 10, 2, 1.5, 3.3]

const notasBaixas1 = []



for(let i in notas){
 if(notas[i]<6){
    notasBaixas1.push(notas[i]) /* Se o elemento do vetor notas[] no indice i em questao for menor q 6 será adicionado
      atraves da função  push() no vetor notasBaixas[] */
 }
}

console.log(notasBaixas1)

// com callback

/* Descrição da função filter()

filter() chama a função callback fornecida no seu parametro, uma vez para cada elemento do array, e constrói um novo array 
com todos os valores para os quais o callback retornou o valor true ou  um valor que seja convertido para true
*/


const notasBaixas2 = notas.filter(function (nota){return nota<6 })  /* Se o retorno da função callback passada no parametro da funçaõ filter()
for true então o elemento do indice atual do array notas será atribuido ao array notasBaixas. Essa verificação 
será feita em cada elemento do array notas e a função callback ,(porque é chamada de volta pra cada elemento do array notas) passada no parametro da função filter(),
se o seu retorno for true então o elemento do indice atual será atribuido ao array notasbaixas*/
/* No exemplo acima a função anonima callback function (nota){return nota<6 } retorna true se a nota for menor que 6*/

console.log(notasBaixas2)

// callback função Arrow

const notasBaixas3 = notas.filter((nota)=>{return nota<6})

console.log(notasBaixas3)

// callback função Arrow sem parenteses pois só possui um parametro e sem as chaves com return implicito 

const notasBaixas4 = notas.filter(nota => nota<6)

console.log(notasBaixas4)

// ou armazenar a função Arrow em uma constante

const notasMenor6 = nota => nota<6

const notasBaixas5 = notas.filter(notasMenor6)

console.log(notasBaixas5)

