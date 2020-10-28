//TRACCIA
//l computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati
// In seguito deve chiedere all'utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L'utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all'utente un altro numero.
// La partita termina quando il giocatore inserisce un numero "vietato" o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l'utente ha inserito un numero consentito.
//COSA VOGLIO FARE?
//1.Voglio creare un button che mi generi 16 numeri random; 2. Voglio un input che permetta all'utente di inserire il numero. 3.Voglio verificare che i numeri inseriti dall'utente non si trovino nell'array del numero random del computer.
//costanti
var MAX_NUM = 100;
var MIN_NUM = 1;
//funzione numeri random
function randomBetween(max, min){
  var random = Math.floor(Math.random() * (max - min) + min);
  return random;
}

//richiamo funzione
  var numeriRandom;
  var numeriUtente;
//bottone
document.getElementById("bottone").addEventListener("click", function(){
  var numeroUtenteEl = document.getElementById("numUtente").value;
  var numeroRandom = randomBetween(MAX_NUM, MIN_NUM);
  document.getElementById("randomcomputer").innerHTML = numeroRandom;
  numeriUtente = [];
  numeriUtente.push(numeroUtenteEl);
  var i = 0;
  while(i <= 16){
    numeriRandom = [];
    numeriRandom.push(numeroRandom);
    i++
  }

})
