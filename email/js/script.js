// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

var arr=["mariopippo@gmail.com", "pincopallo@gmail.com", "xiaoxiao@gmail.com", "vanessadalessandro@gmail.com"]
var miaEmail= prompt("qual è la tua email?")
console.log(arr)

for (var i = 0; i < arr.length; i++){
    if (miaEmail==="vanessadalessandro@gmail.com"){
        document.getElementById("titolo").innerHTML="La tua email risulta nella nostra lista, puoi partecipare all'evento"
    } else{
        document.getElementById("titolo").innerHTML="La tua email non risulta nella nostra lista, non puoi partecipare all'evento"
    }
}