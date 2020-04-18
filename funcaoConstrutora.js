// função construtora Carro

function Carro(velocidadeMaxima =200, delta =5){
    let velocidadeAtual =0 /* atributo privado (uma instancia dessa função não acessa (encherga) esse atributo pois o mesmo 
    é um atributo da função e não de instancia )*/ 

    /* método publico*/
    this.acelerar = function (){
        if(velocidadeAtual+delta <= velocidadeMaxima){
          velocidadeAtual += delta
        }else{
            velocidadeAtual = velocidadeMaxima
        }
    }

    // método publico
    //a palavra this torna visivil o método fora da função 
    /* como o atributo velocidadeAtual é privado(encapsulado) é necessario o método getVelocidade
    para retornar a  velocidadeAtual */

    this.getVelocidade = function(){
        return console.log(velocidadeAtual)
    }


}


// criando as instancias

const uno = new Carro
    uno.acelerar()
    uno.getVelocidade()
    uno.acelerar()
    uno.getVelocidade()

    const ferrari = new Carro(300, 20)

    ferrari.acelerar()
    ferrari.getVelocidade()
    ferrari.acelerar()
    ferrari.getVelocidade()


    console.log(typeof Carro)
    
    console.log(typeof ferrari)
    


