// Qui indichiamo le variabili con let al posto di var
let nome = prompt("Inserisci il tuo nome:");
let cognome = prompt("Inserisci il tuo cognome:");
let colorePreferito = prompt("Inserisci il tuo colore preferito:");

// Genera la password concatenando le informazioni fornite e aggiungendo "21" alla fine
let password = nome + cognome + colorePreferito + "21";

// Stampa la password sulla console
console.log(password);