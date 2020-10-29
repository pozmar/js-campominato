//
//l computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati
// In seguito deve chiedere all'utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L'utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all'utente un altro numero.
// La partita termina quando il giocatore inserisce un numero "vietato" o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l'utente ha inserito un numero consentito.
//costanti
var MAX_NUM = 100;
var MIN_NUM = 1;
var NUM_MINE = 16;
var ROUND = 84;
//creo array che contiene i 16 numeri
var mine = [];
//funzione che mi dice se i numeri si trovano dentro a un array
function isInArray(num, arrNum){
  for(var i = 0; i < arrNum.length; i++ ){
    if (num == arrNum[i]){
      return true;
    }

  }
  return false;
}
console.log(isInArray(5, [1,2,3,4]));
console.log(isInArray(5, [1,2,3,4,5]));

//creo i 16 numeri random
while (mine.length < NUM_MINE){
  var randomNumbers = Math.floor(Math.random() * ((MAX_NUM + 1) - MIN_NUM) + MIN_NUM);
  if(!isInArray(randomNumbers, mine)){
    mine.push(randomNumbers);
  }
}
//creo array che contiene le scelte dell'utente
var userChoices = [];
//vincere o perdere
var win = false;
var isAlive = true;
while (!win && isAlive){
  var numUtente = parseInt(prompt("Inserisci un numero tra " + MIN_NUM + " e " + MAX_NUM));
  if(isInArray(numUtente, userChoices)){
    alert("Hai già inserito questo numero");
  }
  else if(isInArray(numUtente, mine)){
    isAlive = false;
    alert("Sei caduto su una mina! Hai perso!")
  }
  else if(userChoices.length === ROUND){
    win = true;
    alert("Complimenti, hai vinto!")
  }
userChoices.push(numUtente);
}
