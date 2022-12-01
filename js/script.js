/**
 *
 Consegna:
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata 
si colora di azzurro ed emetto un messaggio in console con 
il numero della cella cliccata.

Consegna
Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco
(attenzione: non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git).
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
Attenzione: Nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina.
Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.

 *
 */

// funzione che genera un numero casuale senza ripetizioni
function getRandomNumber(numMin, numMax) {
  if (numMin === numMax){
    return numMax;
  }

  return Math.floor ( Math.random() * (numMax - numMin + 1) + numMin);
}

//creo un evento che si scatena cliccando sul bottone "play"
document.getElementById('myBtn').addEventListener('click', function() {

//recupero il div griglia nel documento
let myGrid = document.getElementById('myGrid');
//svuoto il grid per poter giocare più volte
myGrid.innerHTML = "";

//creo un array con numeri randomici 

const bombs = [];

while(bombs.length < 16) {
  const randomNumber = getRandomNumber(1, 100);

  if (!bombs.includes(randomNumber)) {
    bombs.push(randomNumber);
  }
}

console.log(bombs);

let counter = 0;

//creare contatore punteggio partita


//creo un ciclo per aggiungere i 100 quadrati alla griglia
  for (let i = 0; i < 100; i++) {
    //creo il div
    const newSquare = document.createElement('div');
    //assegno la mia classe css al nuovo div
    newSquare.classList.add('square')
    //creo un p dove inserire i numeri da 1 a 100
    newSquare.innerHTML = '<span class="m-auto">' + (i + 1) + '</span>'

    //creo un evento on click per cambiare colore ai quadrati
    newSquare.addEventListener("click", function(){

    //creo un if che mi permette di colorare le caselle in modo diverso a seconda se il numero cliccato corrisponde ad una bomba
    if (bombs.includes(i+1)) {
      newSquare.classList.add('color-red');
      alert("GAME OVER");
      console.log(i+1);
    } else {
      newSquare.classList.toggle('color-blue');
      
    }
    console.log(i+1);
  });
    
    //aggiungo il nuovo div alla griglia
    myGrid.appendChild(newSquare);
  }



});