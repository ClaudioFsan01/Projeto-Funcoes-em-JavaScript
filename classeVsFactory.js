class Pessoa{
    constructor(nome){
       this.nome = nome  // a palavra this torna o atributo nome publico, pode ser acessado fora da classe atraves da
                         // instacia da classe  Pessoa
    }

    falar(){
        console.log('Meu nome é',this.nome)
    }
}

const p1 = new Pessoa('Claudio')

p1.falar()

// função construtora

const criarPessoa = nome=>{
    // função arrow construtora retorna um objeto
    return {//O objeto retornado possui o atributo falar que recebe uma função arrow 
         falar: ()=> console.log(' Meu nome é', nome)
    }
}

const p2 = criarPessoa('Fatima') /* o objeto retornado pela função construtora atribuida a constante criarPessoa esta sendo 
                           atribuido à constante p2*/

   p2.falar() //chamando a função arrow acessando o atributo falar no objeto atribuido à constante p2                        

