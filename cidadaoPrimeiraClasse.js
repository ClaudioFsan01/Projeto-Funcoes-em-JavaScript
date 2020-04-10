// Função em JS é First-Class Object (Citizens)
//Higher-order function

//criar de forma literal 
function fun1() {}

// armazenar em uma variavel 

const fun2 = function (){console.log('Testando a fncao anonima')} // função anonima armazenada na variavel fun2

// armazenar em array 

const array = function (a, b) {return a+b} 

// ou 

const array2 = [function (c, d) {return c-d}, fun1, fun2]

console.log(array2[0](5,2))

console.log(fun2())

// Armazenar uma função em um atributo de objeto 

const obj = {} // criando um objeto vazio

// mesmo que o atributo não exista no objeto é possivel dinamicamente atribuir uma função a um atributo do objeto

obj.falar = function () { return 'Falei'}

console.log(obj.falar()) 

// passar uma função como parametro para outra função 

function run(func){ // função run(func) está recebendo uma função no parametro
  func()
}

run(function () {console.log('Executando a funcao recebida no parametro')})  // chamando a função run() e passando uma função no parametro

// uma função pode retornar uma outra função e conter uma função

function soma(a,b){ 
    return function(c){
        return console.log(a+b+c)
    }
}

// ao invocar a funcao acima 1° passe o parametro, os valores de (a,b) assim uma função será retornada sendo necessario passar mais um valor
// depois passe o valor de (c) somente ai a soma será executada
//
//ex:

soma(5,2)(3) // no 1° caso trata-se de uma função literal sendo necessario chamar pelo nome e ela retorna uma função anonima
// sendo necessario passar somente o parametro com o valor

//ou

const resultado = soma(5,2) // guarda o retorno ou seja a função retornada em uma constante e passa o parametro pra essa função retornada
resultado(3)
