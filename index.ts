
interface Aluno{
    nome:string
    notas:number[]
    mediaFinal:number
}

function calcularMedia(notas:number[], nome:string):Aluno{
    const numNotas = notas.length
    const soma = notas.reduce((acumulador, valorAtual) => acumulador + valorAtual)

    const media = soma/numNotas
    
    const aluno:Aluno = {
        nome: nome,
        notas: notas,
        mediaFinal: media
    }

    return aluno

}

import PromptSync from "prompt-sync" //importando PromptSync do arquivo promp-sync

const prompt = PromptSync() //funcao para chamar o prompt

const nome = prompt('Qual o nome do aluno? ')

const notas: number[] = []

for (let i = 0; i <= 3; i++) {
    
    notas.push(parseFloat(prompt(`Digite a nota ${i+1}: `)))
}

const aluno = calcularMedia(notas, nome)

console.log(`as notas de ${aluno.nome} foram`)
for (let i = 0; i <= 3; i++) {
    console.log(`nota ${i+1} = ${aluno.notas[i]}`)
}
console.log(`A media final foi ${aluno.mediaFinal}`)

  





