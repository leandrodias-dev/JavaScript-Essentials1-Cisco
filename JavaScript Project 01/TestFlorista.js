// Variáveis de preço e quantidade de cada tipo de flor //

let precoRosa = 8;
let precoLirio = 10;
let precoTulipa = 2;


let quantidadeRosas = 20;
let quantidadeLirios = 30;
let quantidadeTulipas = 120;

// Variáveis para armazenar o preço total de cada tipo de flor //
let precoTotalRosa = precoRosa * quantidadeRosas;
let precoTotalLirio = precoLirio * quantidadeLirios;
let precoTotalTulipa = precoTulipa * quantidadeTulipas;

// Variável para armazenar o preço total de todas as flores 
let Total = precoTotalRosa + precoTotalLirio + precoTotalTulipa;

console.log("Rosa - preço unitário:", precoRosa, ", quantidade:", quantidadeRosas, ", Valor:", precoTotalRosa);
console.log("Lirio - preço unitário:", precoLirio, ", quantidade:", quantidadeLirios, ", valor:", precoTotalLirio);
console.log("Tulipa - preço unitário:", precoTulipa, ", quantidade:", quantidadeTulipas, ",valor:", precoTotalTulipa);
console.log("Total:", Total);