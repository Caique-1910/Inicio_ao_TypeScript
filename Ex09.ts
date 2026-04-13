//Exercício 9
function mostrarAluno(aluno : Aluno): string {
    return `Nome: ${aluno.nome}, Idade: ${aluno.idade}`
}

const novoAluno = {nome: "Cléber", idade: 15}

console.log(mostrarAluno(novoAluno));