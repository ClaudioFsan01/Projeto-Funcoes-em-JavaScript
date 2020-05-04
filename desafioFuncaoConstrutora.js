//Desafio transformar a classe Pessoa em uma função construtora

/*
class Pessoa{
    constructor(nome){
       this.nome = nome  // a palavra this torna o atributo nome publico, pode ser acessado fora da classe atraves da
                         // instacia da classe  Pessoa
    }

    falar(){
        console.log('Meu nome é',this.nome)  Dentro de uma classe é nessario o uso da palavra this dentro da função
           para acessar o atributo pois o this aponta para o objeto da classe Pessoa 
    }
}

const p1 = new Pessoa('Claudio') //INSTANCIANDO A CLASSE PARA CRIAR O OBJETO

p1.falar()

*/

//criando a função construtora

function Pessoa(nome ='Nome Invalido !'){

    this.nome = nome
    // método publico
     // usando a palavra this para tornar o atributo publico
     this.falar = () => console.log(this.nome) 

}

const p3 = new Pessoa('Bibiu') // ASSIM COMO NA CLASSE É NECESSARIO INSTANCIAR A FUNÇÃO CONSTRUTORA PARA CRIAR O OBJETO

p3.falar()


// Desafio de criar uma função construtora com a mesma ideia da classe Pessoa acima

// criando uma função construtora e atribuindo a const pessoa
const pessoa = nome =>{
    return { // função construtora cria e retorna um objeto
        // criado um atributo falar que recebe uma função anonima arrow
        falar : ()=> console.log(nome)
    }
}

const p2 = pessoa(' Zuila')  // atribuido o objeto retornado à const p2

p2.falar()  //acessando o atributo falar  do objeto retornado e chamando em seguida a função anonima arrow 
             // atribuido ao mesmo


             /* OBS : PODEMOS CRIAR OBJETOS APARTIR DE UMA FUNÇÃO CONSTRUTORA, CLASSE E FUNÇÃO FACTORY */