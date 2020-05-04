// Factory // função fabrica
// Factory retorna um objeto
//ex :

//Factory simples

function criarPessoa(){
    // retorna um objeto pessoa
     return{ // mesmo sem usar o comando new estamos criando apartir da notação literal de objetos {}
         nome : 'Ana',
         sobreNome : 'Silva'
     }
}

console.log(criarPessoa())

