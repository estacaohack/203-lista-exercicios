/**
  Crie um programa que busque uma letra dentro de uma frase e imprima a
  quantidade de ocorrências dela, da seguinte forma:

  Foram encontradas 4 ocorrências da letra "a" na frase "Colocar dois pratos de trigo para dois tigres".

  Não foram encontradas ocorrências da letra "a" na frase "Colocar dois pratos de trigo para dois tigres".
*/
let frase = 'Colocar dois pratos de trigo para dois tigres';
let letraProcurada = 'a';
let contador = 0;
let resultado;

for(let i of frase){
  if(i == letraProcurada){
    contador++;
  }
}

if(contador > 0){
  console.log(`Foram encontradas ${contador} ocorrências da letra ${letraProcurada} na frase "${frase}"`);
}else{
  console.log(`Não foram encontradas ocorrências da letra ${letraProcurada} na frase "${frase}"`);
}
