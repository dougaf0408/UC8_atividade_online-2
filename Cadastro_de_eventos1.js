var nome = 'Douglas'
var hoje = new Date()
var num_participantes = 0
var idade = 0;
var lista = ''

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Insira data do evento no formtato (AAAA-MM-DD)? ', (datadoevento) => {
    var dataeventopadrao = new Date(datadoevento)
    if (dataeventopadrao < hoje) {
        console.log(`${datadoevento} , Data não permitida.`);
    } else {
        console.log(`${datadoevento} ,Data permitida.`);
    }
});
rl.question('Insira a idade do novo participante: ', (novaidade) => {
    idade = novaidade;
});
if (num_participantes < 100) {
    if (idade > 17) {
        rl.question('Insira o nome do novo participante: ', (nome) => {
            console.log(`O novo participante tem: ${idade} anos e se chama ${nome}`);
        });
    } else {
        console.log(`Novo participanete não inserido, pois é menor de 18 anos`)
    }
}

lista.push(nome)
console.log('Lista de participantes: ' + lista)

