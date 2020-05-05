// IIFE => Immediately Invoked Function Expression  // Expressão de Função Imediatamente Invocada 

// Padrão utilizado para fugir do escopo global :

(function (){
    // Tudo que for declarado aqui dentro ex : var, let, const estará disponivel somente dentro deste escopo da função
    console.log('Será executada na hora !')
    console.log('Fode do escopo mais abrangente !')
})() // Assim podemos invocar diretamente a função na hora de definir 




