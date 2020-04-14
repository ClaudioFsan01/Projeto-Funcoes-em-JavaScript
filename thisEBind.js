const pessoa ={      // a variavel pessoa do tipo constante recebe um objeto 
    saudacao :  'Bom dia !',         // dentro do objeto criado uma saudação
                                     // criado dentro do objeto uma função  
    falar(){console.log(this.saudacao)} // usando a palavra this para acessar o atributo saudação do objeto em questão 
} 

pessoa.falar()

const falar = pessoa.falar

falar() // conflito entre paradigmas : funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa)   // na função bind() passamos o objeto que queremos que seja resolvido o this da função falar()
                                             // Assim usando o bind() o this da função falar() sempre será resolvido para o objeto pessoa

falarDePessoa()                   