//Exercício 10
type Produto = {
    nome:string;
    preco: number;
    emPromocao: boolean;
}

function calcularPrecoFinal(Produto: Produto) : number{
    if(Produto.emPromocao){
    return Produto.preco - Produto.preco * 0.10 ;
    }
    else{
        return Produto.preco;
    }
}

const Produto = {nome: "Hámburguer", preco: 25.00, emPromocao: false}

console.log(calcularPrecoFinal(Produto));