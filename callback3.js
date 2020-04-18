// Exemplo de callback no Browser

// OBS : O Codigo será salvo aqui no para efeito de consulta

document.getElementsByTagName('body')[0].onclick = function (a){console.log('O evento ocorreu !')}
/*Todos os elementos HTML podem ser selecionados usando-se o método getElementsByTagName() do objeto Document.
 O retorno da função é um objeto semelhante a um array somente para leitura contendo os objetos Element conforme 
 definido no parâmetro.

 propriedade onclick é disparada quando o usuario clicar no corpo da pagina situada dentro da tag body
 */