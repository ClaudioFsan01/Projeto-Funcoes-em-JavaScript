// função fabrica criarProduto
/*
function criarProduto(nome='nome invalido !', preco=0){
    return {
        nome : `${nome}`,
        valor : `${preco}`,
        desconto : `${preco}`*0.1
    }
}*/

// ou

function criarProduto(nome='nome invalido !', preco=0){
    return {//  Não é necessario colocar ex:  nome :  `${nome}` porque já foi colocado no parametro o mesmo nome do atributo            
        nome ,
        preco,
        desconto : preco*0.1
    }
}
// FUNÇÃO FACTORY CRIA E RETORNA O OBJETO SEM A NECESSIDADE DE INSTANCIALA
console.log(criarProduto('tablet',500))
console.log(criarProduto('bike',300))
console.log(criarProduto('PS4',3999))
console.log(criarProduto())