function Pessoa(){
    this.idade =0

    /* Ao contrario de uma função literal, utilizando uma função Arrow que estamos passando no parametro da função 
     setInterval(), a palavra this não varia, ou seja, o objeto para o qual a palavra this aponta não varia,a referencia 
     não é perdida e neste exemplo usando uma função Arrow : ()=>{
        console.log(this.idade++)
    } a palavra this não perde a referencia e continua apontando para o objeto da função Pessoa mesmo o codigo sendo 
     chamado apartir de um temporizador neste caso a função setInterval()  */

    setInterval(()=>{
        console.log(this.idade++)
    }, 1000)

}

new Pessoa

