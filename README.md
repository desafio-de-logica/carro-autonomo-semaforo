# Carro Autônomo x Semafôro

## Desafio

Elon Musk solicitou aos seus engenheiros que as câmeras dos carros da TESLA realizassem o reconhecimento dos sinais de trânsito, para tanto os mesmos devem ser capazes de decidir, tomar ações, para frear e acelerar dada as condições específicas para que isto ocorra. 
Desconsiderando as questão sobre reconhecimento de imagens, quais comportamentos devemos validar para que o nosso algoritmo determina a situação para determinar os eventos.

### Premissas
- Sinal vermelho, frear o veículo até o carro parar;
- Sinal verde, acelerar o veículo até a velocidade de cruzeiro;
- Velocidade de cruzeiro é igual 60.

### Requisitos
Códigos de resolução estão apresentados estão prontos para executar tanto no navegador como no nodejs, com uma simples diferença.

Para rodar no nodejs é necessário ter o pacote `prompt-sync`, necessário para ler as entradas do usuário.

Abra o arquivo que você vai executar e remova o comentário* da linha:
```
//const prompt = require('prompt-sync')();
```

\* uma linha comentada é uma linha que inicia com //, uma linha comentada não tem efeito no código, ou seja, não é execuda.

Para executar com nodejs siga os seguintes passos:
```
cd resolucao
npm install
node app1-0.js
```

#### Redes Sociais 
[Perfil do Instagram](https://www.instagram.com/quero.aprender.logica/)
[Canal no Youtube](https://www.youtube.com/channel/UC3-KMW_KosUNBSdTSv2ux5Q)
