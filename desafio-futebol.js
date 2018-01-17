/**
  Crie um programa que simule, de forma aleatória, um chute de uma bola de
  futebol em direção à um gol.

  Os únicos dados a serem considerados são as coordenadas das traves do gol e
  a coordenada da posição da bola após o chute, no momento em que ela ultrapassa
  a linha do gol.

  A posição de cada trave está marcada no objeto 'gol'. Fazer com que a posição
  da bola após o chute seja sorteada aleatoriamente (utilizar coordeadas x e y).
  Compare as coordenadas sorteadas com a posição das traves e determine se foi
  um gol.

  Dica: Suponha que as coordenadas da bola após o chute se mantenha nos valores
  0 à 900 no eixo X e de 0 à 300 no eixo Y.
*/

let gol = {
  traveEsquerda: 100,
  traveDireita: 832,
  traveSuperior: 244
};

