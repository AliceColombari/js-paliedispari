// Chiedere all’utente di inserire una parola 
// Creare una funzione per capire se la parola inserita è palindroma

/*
// chiedo all'utente di inserire una parola
let parolaUtente = prompt('Digita una parola per verificare che sia palindroma');

// suddivido la parola in lettere attraverso l'uso di split, leggo la parola come fosse un array
let parolaSuddivisaInLettere = parolaUtente.split('');
console.log(parolaSuddivisaInLettere)

// adesso ribalto l'array al contrario per verificare che la parola sia palindroma
parolaSuddivisaInLettere = parolaSuddivisaInLettere.reverse();

// per concludere riunisco tutte le lettere per ottenere di nuovo la parola intera e non più scomposta
let parolaInvertita = parolaSuddivisaInLettere.join('');

// creo una condizione per verificare che la parola sia palindroma o no
// se la parola digitata dall'utente è uguale alla parola invertita allora è palindroma
if(parolaUtente == parolaInvertita){
    alert('la parola è palindroma');
} else {
    // altrimenti la parola non è palindroma
    alert('la parola non è palindroma');
}
*/


// VARIABILE PAROLA INSERITA DALL'UTENTE
// chiedo all'utente di inserire una parola
var parolaUtente = prompt('Digita una parola per verificare che sia palindroma');

// VARIABILE, RICHIAMO FUNZIONE + PAROLA INSERITA DALL'UTENTE
var parolaInvertita = invertiParola(parolaUtente);

// CONDIZIONE
// creo una condizione per verificare che la parola sia palindroma o no
// se la parola digitata dall'utente è uguale alla parola invertita allora è palindroma
if(parolaUtente == parolaInvertita){
    console.log('la parola è palindroma');
    alert('La parola che hai inserito è palindroma')
  } else {
    console.log('la parola non è palindroma');
    alert('La parola che hai inserito NON è palindroma')
  }

// FUNZIONE
// suddivido la parola in lettere attraverso l'uso di SPLIT, leggo la parola come fosse un array
// ribalto l'array al contrario con l'uso di REVERSE, per verificare che la parola sia palindroma
// riunisco tutte le lettere CON L'USO DI JOIN, per ottenere di nuovo la parola intera e non più scomposta
function invertiParola(str){
  var strInversa = str.split('').reverse().join('');  
  return strInversa;
}


// alternativa per verifica
/*
function controlloPalindroma(parolaUtente) {

  let parolaDaConfrontare = '';

  for(let i = parolaUtente. length -1; i>=0; i--) {
  parolaDaConfrontare += parolaUtente[i];
  }

  if (parolaUtente.toUpperCase() == parolaDaConfrontare.toUpperCase()) {
  return "La parola inseria è palindroma";
  } else {
  return "La parola inseria non è palindroma";
}

}

let parolaUtente = prompt ('Inserisci una parola') ;
let verifica = controlloPalindroma (parolaUtente) ;
console. log(verifica);
*/