/**
  Criar um programa que verifica se um dado vetor está ordenado ou não,
  e imprima as seguintes mensagens no console.

  O vetor está ordenado

  O vetor não está ordenado

  Obs: O vetor só irá conter números inteiros, positivos e maiores que zero.
*/

let lista = [10, 20, 50, 100000, 1];

let ultimoValor = 0;
let estaOrdenado = true;

for(let item of lista){
  if(item < ultimoValor){
    estaOrdenado = false;
  }

  ultimoValor = item;
}

if(estaOrdenado){
  console.log('O vetor está ordenado');
}else{
  console.log('O vetor não está ordenado');
}
