1)	Observe o trecho de código abaixo: 
int INDICE = 13, SOMA = 0, K = 0; 

enquanto K < INDICE faça 
{ 
K = K + 1; 
SOMA = SOMA + K;
 }

 imprimir(SOMA); 

Ao final do processamento, qual será o valor da variável SOMA? 

R: o valor da variável SOMA será 91.


2)	Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

 IMPORTANTE: 
Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código; 

R:
function fibonacci(num: number): boolean {
  let a = 0;
  let b = 1;
  let c = 0;

  while (c < num) {
    c = a + b;
    a = b;
    b = c;
  }

  if (c === num) {
    return true;
  } else {
    return false;
  }
}

// Exemplo de uso
const numeroInformado = 13;
const pertenceASequencia = fibonacci(numeroInformado);

if (pertenceASequencia) {
  console.log(`${numeroInformado} pertence à sequência de Fibonacci`);
} else {
  console.log(`${numeroInformado} não pertence à sequência de Fibonacci`);
}

3) Descubra a lógica e complete o próximo elemento: 
a) 1, 3, 5, 7, __9__
R: 9

b) 2, 4, 8, 16, 32, 64, __128__ 
R:128

c) 0, 1, 4, 9, 16, 25, 36, __49__ 
R: 49

d) 4, 16, 36, 64, __100__ 
R: 100

e) 1, 1, 2, 3, 5, 8, __13__ 
R:13

f) 2,10, 12, 16, 17, 18, 19, __20__ 
R: 20


4 - Dois veículos (um carro e um caminhão) saem respectivamente de cidades opostas pela mesma rodovia. O carro de Ribeirão Preto em direção a Franca, a uma velocidade constante de 110 km/h e o caminhão de Franca em direção a Ribeirão Preto a uma velocidade constante de 80 km/h. Quando eles se cruzarem na rodovia, qual estará mais próximo a cidade de Ribeirão Preto? 

IMPORTANTE: 
a) Considerar a distância de 100km entre a cidade de Ribeirão Preto <-> Franca. 
b) Considerar 2 pedágios como obstáculo e que o caminhão leva 5 minutos a mais para passar em cada um deles e o carro possui tag de pedágio (Sem Parar) 

c) Explique como chegou no resultado.   
R: primeiro foi calculado o tempo que o carro e o caminhão levarão para se encontrarem na rodovia.

fórmula:

tempo = distância / velocidade

A distância total que o carro e o caminhão precisam percorrer é a soma das distâncias de Ribeirão Preto a Franca e de Franca a Ribeirão Preto, 
que é de 100 km + 100 km = 200 km.

O tempo que o carro levará para percorrer essa distância é:

tempo do carro = distância / velocidade do carro = 200 km / 110 km/h = 1,82 horas

 o caminhão precisa parar em 2 pedágios e leva 5 minutos a mais em cada um deles, levando um total de 10 minutos (ou 0,17 horas) a mais do que o carro. 
 Logo, o tempo que o caminhão levará para percorrer a mesma distância é:

tempo do caminhão = tempo do carro + 0,17 horas = 1,82 horas + 0,17 horas = 1,99 horas

Agora que temos o tempo que o carro e o caminhão levarão para se encontrarem, determinamos qual estará mais próximo de Ribeirão Preto.

caula-se a distância percorrida pelo carro até o ponto de encontro usando a fórmula:

distância do carro = velocidade do carro x tempo do carro = 110 km/h x 1,82 horas = 200 km

calcula-se a distância percorrida pelo caminhão até o ponto de encontro usando a fórmula:

distância do caminhão = velocidade do caminhão x tempo do caminhão = 80 km/h x 1,99 horas = 159,2 km

Isso significa que o caminhão estará a 40,8 km de Ribeirão Preto e a 159,2 km de Franca quando se encontrarem com o carro. Portanto, o carro estará mais próximo de Ribeirão Preto.

5) Escreva um programa que inverta os caracteres de um string.

 IMPORTANTE: 
a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código; 

b) Evite usar funções prontas, como, por exemplo, reverse; 
R:
function inverteString(str: string): string {
  let novaStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    novaStr += str[i];
  }
  return novaStr;
}

// Exemplo de uso
const minhaString = "Hello, world!";
const minhaStringInvertida = inverteString(minhaString);
console.log(minhaStringInvertida); // "!dlrow ,olleH"





















