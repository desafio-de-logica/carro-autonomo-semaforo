//para executar no nodejs (npm install prompt-sync)
//const prompt = require('prompt-sync')();

const veiculo = {
    velocidade_cruzeiro: 60,
    velocidade_parado: 0,
    velocidade: 0,
}

function ligarVeiculo() {
    console.log(`Veículo ligando.`);
    veiculo.velocidade = Number.parseInt(prompt('Qual a velocidade do veiculo?'));
    console.log('Velocidade atual: ', veiculo.velocidade, ' KM/h.');
}

function desligarVeiculo(acao) {
    if (acao == 's') {
        alterarVelocidade("diminuir", "suave");
        veiculo.velocidade = -1;
        console.log('Veículo desligando.');
    }
}

function aumentarVelocidade(quant) {
    veiculo.velocidade += quant;
    if (veiculo.velocidade > veiculo.velocidade_cruzeiro) {
        veiculo.velocidade = veiculo.velocidade_cruzeiro;
    }
}

function diminuirVelocidade(quant) {
    veiculo.velocidade -= quant;
    if (veiculo.velocidade < veiculo.velocidade_parado) {
        veiculo.velocidade = veiculo.velocidade_parado;
    }
}

function alterarVelocidade(acao, modo) {
    do {
        if (acao == "aumentar" && modo == "suave") {
            aumentarVelocidade(10)
        } else if (acao == "aumentar" && modo == "rapido") {
            aumentarVelocidade(20)
        } else if (acao == "diminuir" && modo == "suave") {
            diminuirVelocidade(10);
        } else if (acao == "diminuir" && modo == "rapido") {
            diminuirVelocidade(20);
        } /*else if (acao == "diminuir" && modo == "emergencia") {
            diminiuirVelocidade(40);
        } */
        console.log('Velocidade: ', veiculo.velocidade, ' KM/h.');
    } while (veiculo.velocidade > veiculo.velocidade_parado && 
             veiculo.velocidade < veiculo.velocidade_cruzeiro);
}

function detectarSemaforo(cor) {

    console.log('Sinal detectado na cor ', cor);
    
    if (cor == 'verde') {
        alterarVelocidade("aumentar", "suave");
    } else if (cor == 'amarelo') {
        alterarVelocidade("diminuir", "suave");
    } else if (cor == 'vermelho') {
        alterarVelocidade("diminuir", "rapido");
    }
}

ligarVeiculo();

do {

    detectarSemaforo(prompt('Qual a cor do sinal detectado?'));
    
    desligarVeiculo(prompt('Desligar? (s/n)'));

} while (veiculo.velocidade >= veiculo.velocidade_parado);
