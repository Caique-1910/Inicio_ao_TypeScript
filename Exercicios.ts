//Exercício 1
let nome: string = "Jurema";
let idade: number = 10;
let ativo: boolean = true;

//concatenacao + 
//interpolacao ${}
// console.log("O nome é: " + nome + ". A idade é de " + idade);
// console.log(`O nome é ${nome} e tem a idade ${idade}`);


//Exercício 2
let cidade = "Osasco";
// console.log(typeof cidade);

//Exercício 3
let a: number = 2;

// function dobro(a:number) : number
// {
//     return a * 2;
// }

// console.log(dobro(a));

//Exercício 4
let dobro = (a: number): number => a * 2;
// console.log(dobro(a));

//Exercício 5
let nome2: string = "Cloadoaldo";

function saudacao(nome2: string): string {
    return `Olá, ${nome2}`;
}

// console.log(saudacao(nome2));


//Exercício 6
let numeros: number[] = [3, 4, 5, 6];

function soma(num: number[]): number {
    return num.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
}

// console.log(soma(numeros));

//Exercício 7
let id = 10;

function formatarId(x: string | number): string {
    if (typeof x === "number") {
        return "ID:" + x.toString();
    }
    else {
        return "ID:" + x;
    }
}

// console.log(formatarId(id));

//Exercício 8
interface Aluno {
    nome: string;
    idade: number;
}

//Exercício 9
function mostrarAluno(aluno : Aluno): string {
    return `Nome: ${aluno.nome}, Idade: ${aluno.idade}`
}

const novoAluno = {nome: "Cléber", idade: 15}

// console.log(mostrarAluno(novoAluno));

//Exercício 10
interface Produto{
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


