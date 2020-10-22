// Generare un numero random da 1  a 6, sia per il giocatore sia per il computer
// Stabilire il vincitore, in base a chi fa il punteggio più alto.



var numeroGiocatore= Math.floor(Math.random()*6+1)
console.log(numeroGiocatore)
document.getElementById("numero-giocatore").innerHTML="Il tuo dado ha estratto il numero: " + numeroGiocatore;

var numeroComputer=Math.floor(Math.random()*6+1)
document.getElementById("numero-computer").innerHTML="Il pc ha estratto il numero: " + numeroComputer;

if(numeroGiocatore>numeroComputer){
    document.getElementById("risultato").innerHTML="Hai vinto"
} else if(numeroComputer===numeroGiocatore){
    document.getElementById("risultato").innerHTML="Avete pareggiato"
} else{
    document.getElementById("risultato").innerHTML="Hai perso"
}