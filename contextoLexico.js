const valor = 'Global'

function minhaFuncao(){
   
    console.log(valor)
}

function exec(){
    const valor ='Local'
    minhaFuncao() 
}

exec()

/* 
OBS :
O trecho do código em que uma variável qualquer é identificada por um nome é definido como o escopo léxico da variável.
 Fora desse bloco, a variável é indefinida ou um outro valor é identificado por esse nome.

A função carrega consigo o local onde a mesma foi definida então ela vai procurar  dentro do escopo lexico 
onde ela foi definida. No nosso exemplo acima a função minhaFuncao() vai prcurar no seu escopo lexico se existe 
declarada uma variavel de nome valor e como não existe ela vai imprimir o valor 'Global' que foi atribuido a constante 
valor no escopo global.

*/