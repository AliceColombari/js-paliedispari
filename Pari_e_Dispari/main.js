// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. 
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). 
// Sommiamo i due numeri 
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) 
// Dichiariamo chi ha vinto.


// L'UTENTE SCEGLIE SE GIOCARE PARI O DISPARI
let pariDispari = prompt('Cosa scegli? Pari o dispari?');
console.log(pariDispari);

// VARIABILE per constatare l'inserimento corretto dei dati richiesti con alert
let corretto = false;

// condizione per far si che l'utente inserisca correttamente pari o dispari
for (let i= 0; i < corretto == false; i++) {

    if (pariDispari == 'pari' || pariDispari == 'dispari') {
        corretto = true;
        break;
    } else {
        pariDispari = prompt('Attenzione! Devi scegliere pari o dispari!');
    }
}

// L'UTENTE SCEGLIE UN NUMERO DA 1 A 5
let numeroUtente = parseInt(prompt('Scegli un numero compreso tra 1 e 5'));
console.log(numeroUtente);

// condizione per far si che l'utente inserisca correttamente un numero compreso tra 1 e 5
for (let i = 0; i < corretto == false; i++) {

    if (numeroUtente <= 1 && numeroUtente <= 5) {
        corretto = true;
        break;
    } else {
        numeroUtente = prompt('Attenzione! Devi scegliere un numero compreso tra 1 e 5!');
    }
}

// FUNZIONE PER IL COMPUTER PER GENERARE UN NUMERO RANDOM TRA 1 E 5
function numeroRandom (from, to) {
    return Math.floor(Math.random() * to) + from;
}

// CREO VALORI PER LA FUNZIONE DEL COMPUTER
let numeroComputer = numeroRandom(1, 5);
console.log(numeroComputer);

// VARIABILE PER FARE LA SOMMA DEI DUE NUMERI GIOCATI UTENTE E COMPUTER
let creoSomma = +numeroUtente + +numeroComputer;
console.log(numeroUtente + '+' + numeroComputer + '=' + creoSomma);

// FUNZIONE CHE FACCIO PER STABILIRE SE ESCE PARI O DISPARI
function risultatoSomma (numero) {
    
    let ritorno;
    // condizione per verificare il risultato della somma
    if (creoSomma % 2 == 0) {
        ritorno = 'pari';
    } else {
        ritorno = 'dispari';
    }
    
    return ritorno;
}

// VARIABILE A CUI ASSEGNO LA FUNZIONE CREATA PER STABILIRE SE ESCE PARI O DISPARI
let risultatoFinale = risultatoSomma();
console.log(risultatoFinale);

// DICHIARO IL VINCITORE CON UNA CONDIZIONE
if (pariDispari == risultatoFinale) {
    alert('Sei il vincitore!')
    console.log('Il giocatore ha vinto!')
} else {
    alert('Hai perso!')
    console.log('Ha vinto il computer')
}