
//Creo funzione per verificare se è palindroma

function checkPalindroma(stringa) {
    //  Scompongo la funzione usando  la funzione split
    let split = stringa.split('');

    // Uso reverse per invertire l'ordine
    let reverse = split.reverse();

    // Uso Join per riunire le lettere
    let join = reverse.join('');

    // Verifico se la nuova parola è uguale a quella inserita dall'utente
    if (stringa === join) {
        // 7. Se è uguale la stringa è PALINDROMA
        return true;
    } else {
        //  ALTRIMENTIla stringa non è PALINDROMA
        return false;
    }
}
