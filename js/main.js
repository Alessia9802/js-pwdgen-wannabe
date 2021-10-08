/* TRACCIA: 
Chiedi all’utente il suo nome, 
poi chiedi il suo cognome, 
poi chiedi il suo colore preferito */

// Infine scrivi sulla pagina nomecognomecolorepreferito21

const nome = prompt("Qual è il tuo nome?");
console.log(nome);

const cognome = prompt("Qual è il tuo cognome?");
console.log(cognome);

const colore = prompt("Qual è il tuo colore preferito?");
console.log(colore);

const numero = 21;
console.log(numero);

document.getElementById("Password").innerHTML =
  nome + cognome + colore + numero;
