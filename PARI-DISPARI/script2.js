

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
    
    if (isNaN(usernumber) || usernumber < 1 || usernumber > 5) {
        document.getElementById('result').innerHTML = `<h3>Per favore, inserisci un numero valido da 1 a 5.</h3>`;
        return;
    }

    let computer = generateRandomNumber();
    let sum = usernumber + computer;
    let sumeven = Even(sum);

    let result;
    if ((sumeven && user === 'pari') || (!sumeven && user === 'dispari')) {
        result = "Hai vinto!";
    } else {
        result = "Hai perso!";
    }

    document.getElementById('gameResult').innerHTML = `<h3>Hai scelto: ${user}, il tuo numero: ${usernumber}, numero del computer: ${computer}.<br>Somma: ${sum} (${sumeven ? 'Pari' : 'Dispari'}).<br>${result}</h3>`;