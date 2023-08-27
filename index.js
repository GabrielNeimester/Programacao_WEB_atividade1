"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
function calcularMedia(notas, nome) {
    const numNotas = notas.length;
    const soma = notas.reduce((acumulador, valorAtual) => acumulador + valorAtual);
    const media = soma / numNotas;
    const aluno = {
        nome: nome,
        notas: notas,
        mediaFinal: media
    };
    return aluno;
}
const prompt_sync_1 = __importDefault(require("prompt-sync")); //importando PromptSync do arquivo promp-sync
const prompt = (0, prompt_sync_1.default)(); //funcao para chamar o prompt
const nome = prompt('Qual o nome do aluno? ');
const notas = [];
for (let i = 0; i <= 3; i++) {
    notas.push(parseFloat(prompt(`Digite a nota ${i + 1}: `)));
}
const aluno = calcularMedia(notas, nome);
console.log(`as notas de ${aluno.nome} foram`);
for (let i = 0; i <= 3; i++) {
    console.log(`nota ${i + 1} = ${aluno.notas[i]}`);
}
console.log(`A media final foi ${aluno.mediaFinal}`);
