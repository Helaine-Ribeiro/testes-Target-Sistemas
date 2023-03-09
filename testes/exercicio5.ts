/* 5) Escreva um programa que inverta os caracteres de um string.

 IMPORTANTE: 
a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código; 

b) Evite usar funções prontas, como, por exemplo, reverse;  */

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
  console.log(minhaStringInvertida); 
