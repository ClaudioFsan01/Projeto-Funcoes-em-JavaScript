/* function Pessoa(){
    this.idade =0   // a partir do momento q essa função pessoa for instanciada o atributo idade estara a disposição  

    setInterval(function (){ // a função setInterval dispara a função passada no parametro em um determinado intervalo passado em milissegundos tambem passado nesse parametro 
         this.idade++   // nesse caso o this.idade++ não aponta para o objeto pessoa pois quem está disparando a função anonima function ()
                        // é um temporizador
         console.log(this.idade)
    }, 1000) //
}
new Pessoa  // instanciando a função Pessoa a função setInterval() é disparada 

/*
//OBS: DENTRO DO CORPO DE UMA FUNÇÃO LITERAL EX : function (){} CONFORME ACIMA A PALAVRA this PODE VARIAR(NÃO APONTAR) 
//PARA O OBJETO DA FUNÇÃO Pessoa()


*/
// como resolver o problema acima ?

// usando a função bind() para "amarrar" 
/*
function Pessoa(){
    this.idade =0   // a partir do momento q essa função pessoa for instanciada o atributo idade estara a disposição  

    setInterval(function (){ // a função setInterval dispara a função passada no parametro em um determinado intervalo passado em milissegundos tambem passado nesse parametro 
         this.idade++   // nesse caso o this precisa apontar(referenciar) o objeto da função Pessoa 
                         // podemos usar a função binD() para resolver esse problema
         console.log(this.idade)
    }.bind(this), 1000) // nesse caso a função bind() amarra o objeto referenciado pela palavra this 
   /* à chamada chamada dessa função. Ou seja a função bind() amarrou o objeto da função Pessoa() ao qual a palavra this faz referencia
    na chamada da função. Toda vez que ouver uma nova chamada a palavra this não perde a referencia do objeto função Pessoa() qfoi amarrado 
    a function ()
}

new Pessoa 
*/

//ou 

function Pessoa(){
    this.idade =0   // a partir do momento q essa função pessoa for instanciada o atributo idade estara a disposição  
                     // idade é um atributo da função Pessoa 

    const self = this /* A constante self q não será alterada pois é uma constante recebe o objeto ao qual a palavra 
                      this faz referencia (nesse caso this faz referencia a um objeto da função Pessoa) */
    setInterval(function (){ // a função setInterval dispara a função passada no parametro em um determinado intervalo passado em milissegundos tambem passado nesse parametro 
         self.idade +=2                          
         console.log(self.idade)
    }, 1000) // nesse caso o self amarra o objeto à chamada chamada dessa função 
}

new Pessoa 
