/**
  Imprima no console uma escada com a mesma quantidade de degraus que o número
  contido na variável.

  Ex: numero = 4;

  #
  ##
  ###
  ####
*/

let numero = 50;
let degrau = '#';
let escada = '';

for(let i = 0; i < numero; i++){
  escada = escada + degrau;
  console.log(escada);
}
