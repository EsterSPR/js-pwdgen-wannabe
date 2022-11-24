let name_user = prompt('Inserisci il tuo nome');
let surname_user = prompt('Inserisci il tuo cognome');
let color_user = prompt('Inserisci il tuo colore preferito');
const number_user = 21;
let psw = name_user + surname_user + color_user + number_user;
document.getElementById("password").innerHTML = psw;