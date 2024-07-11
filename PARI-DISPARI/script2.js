

// Funzione per generare un numero random tra 1 e 5 per il P
function generateRandomNumber() {
    return Math.floor(Math.random() * 5) + 1;
}


// Funzione per verificare se un numero è pari
function Even(number) {
    return number % 2 === 0;
}

// Aggiunto evento a bottone per il id del bottone gioca 

document.getElementById('gioca').addEventListener('click', function () {
    let user = document.getElementById('scelta').value;
    let usernumber = parseInt(document.getElementById('usernumber').value);
   