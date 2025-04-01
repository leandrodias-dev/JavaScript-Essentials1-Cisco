// Declaração das constantes de preço de cada tipo de flor
const precoRosa = 8
const precoLirio = 10
const precoTulipa = 2

// Variáveis de quantidade de cada tipo de flor
let quantidadeRosas = 70
let quantidadeLirios = 50
let quantidadeTulipas = 120

// Variáveis para armazenar o preço total de cada tipo de flor
let precoTotalRosa = precoRosa * quantidadeRosas
let precoTotalLirio = precoLirio * quantidadeLirios
let precoTotalTulipa = precoTulipa * quantidadeTulipas

// Variável para armazenar o preço total de todas as flores
let precoTotalFlores = quantidadeRosas + quantidadeLirios + quantidadeTulipas

// Diminuindo a quantidade de rosas em 20 e de lírios em 30
quantidadeRosas -= 20
quantidadeLirios -= 30

// Recalculando os preços totais após a diminuição
precoTotalRosa = precoRosa * quantidadeRosas
precoTotalLirio = precoLirio * quantidadeLirios

// Atualizando o preço total de todas as flores após a diminuição
precoTotalFlores = precoTotalRosa + precoTotalLirio + precoTotalTulipa

console.log(
  'Rosa - preço unitário:',
  precoRosa,
  ', quantidade:',
  quantidadeRosas,
  ', valor:',
  precoTotalRosa
)
console.log(
  'Lirio - preço unitário:',
  precoLirio,
  ', quantidade:',
  quantidadeLirios,
  ', valor:',
  precoTotalLirio
)
console.log(
  'Tulipa - preço unitário:',
  precoTulipa,
  ', quantidade:',
  quantidadeTulipas,
  ', valor:',
  precoTotalTulipa
)
console.log('Total:', precoTotalFlores)
