const prompt = require('prompt-sync')();

let velocidade_entrada = Number.parseInt(prompt("Qual é a velocidade atual?"));
while (!Number.isInteger(velocidade_entrada)) {
    console.log("A velocidade é inválida!");
    velocidade_entrada = Number.parseInt(prompt("Qual é a velocidade atual?"));
}

let velocidade_atual = velocidade_entrada;
let velocidade_cruzeiro = 60;
let velocidade_parado = 0;

function mostrarVelocidade() {
    console.log("Velocidade atual: ", velocidade_atual);
}

function mudarVelocidade(valor) {
    velocidade_atual = velocidade_atual + valor;
    mostrarVelocidade();
}

function desacelerar(valor_desaceleracao = -5) {
    console.log("diminuir velocidade até parar");
    while (velocidade_atual > velocidade_parado) {
        mudarVelocidade(valor_desaceleracao)
    }
}

function acelerar(valor_aceleracao = 5) {
    console.log("acelerar até velocidade de cruzeiro");
    while (velocidade_atual < velocidade_cruzeiro) {
        mudarVelocidade(valor_aceleracao);
    }
}

do {

    let cor_do_sinal = prompt('Qual é a cor?'); //pergunta

    if (velocidade_atual >= velocidade_parado) {
        // se (cor_do_sinal é igual "verde") então
        if (cor_do_sinal == "verde") {
            // verdade para verde
            acelerar(5);
        } else if (cor_do_sinal == "amarelo") {
            // verdade para amarelo
            desacelerar(-5);
        } else if (cor_do_sinal == "vermelho") {
            // verdade para vermelho
            desacelerar(-10);
        } else {
            console.log("Cor desconhecida.");
        }
    } else { // senão
        mostrarVelocidade();
        
    }
    desligar = prompt("Desligar carro? (s/n)");
} while (desligar != 's');

if (velocidade_atual > velocidade_parado) {
    desacelerar();
}

console.log("Desligou o veículo");
