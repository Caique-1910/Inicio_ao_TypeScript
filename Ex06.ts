//Exercício 6
let numeros: number[] = [3, 4, 5, 6];

function soma(num: number[]): number {
    return num.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
}

console.log(soma(numeros));