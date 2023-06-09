console.log('JS OK');
// Recupero elementi dal DOM

const timer = document.getElementById('countdown');
const numbers = document.getElementById('numbers');
const button = document.getElementById('control');
const inputs = document.getElementsByClassName('user-input');

// Array numeri casuali
const casualNumbers = [];

// Creazione numeri random da 1 fino a 100 e inserimento nell'array
for (let i = 0; i < 5; i++) {
  let number = Math.floor(Math.random() * 100) + 1;
  casualNumbers.push(number);
}
console.log(casualNumbers);
// Contenuto dell'array aggiunto in pagina
numbers.innerText += casualNumbers.join(' ');

// Timer di 30 secondi
let countdown = 30;
timer.innerText = countdown;

// Countdown
const countdownInterval = setInterval(() => {
  countdown--;
  timer.innerText = countdown;

  if (countdown === 0) {
    clearInterval(countdownInterval);

    // Nascondi i numeri
    numbers.style.display = 'none';

    // Mostra gli input per i numeri
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].classList.remove('d-none');
    }
  }
}, 1000);

// Funzione di controllo dei numeri inseriti dall'utente
function checkNumbers() {
  const userNumbers = [];

  // Recupera i valori dai campi di input
  for (let i = 0; i < inputs.length; i++) {
    userNumbers.push(parseInt(inputs[i].value));
  }

  // Esegue il controllo dei numeri inseriti dall'utente
  let isCorrect = true;
  for (let i = 0; i < 5; i++) {
    if (userNumbers[i] !== casualNumbers[i]) {
      isCorrect = false;
    }
  }

  // Mostra l'allert con il risultato
  if (isCorrect) {
    alert('I numeri inseriti sono corretti!');
  } else {
    alert('I numeri inseriti non sono corretti!');
  }
}
// Click al pulsante
button.addEventListener('click', checkNumbers);