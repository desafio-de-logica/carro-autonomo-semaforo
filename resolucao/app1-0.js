//para executar no nodejs (npm install prompt-sync)
//const prompt = require('prompt-sync')();

let sinal_cor = 'verde';
let velocidade_cruzeiro = 60;
let velocidade_parado = 0;
let velocidade_veiculo = 60;

while (velocidade_veiculo > velocidade_parado) {

    if (sinal_cor == 'verde') {
        velocidade_veiculo = velocidade_cruzeiro;
    }

    if (sinal_cor == 'vermelho') {
        velocidade_veiculo = velocidade_parado;
    }

    console.log('Velocidade atual: ', velocidade_veiculo, ' KM/h.');

    let sinal_novo = prompt('Qual a cor do sinal?');
    if (sinal_cor != sinal_novo) {
        sinal_cor = sinal_novo;
        console.log('Sinal ', sinal_cor);
    }

}

console.log('Veículo desligado.');
