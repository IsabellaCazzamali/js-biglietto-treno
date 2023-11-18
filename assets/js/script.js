/* 
Il programma dovrà chiedere all'utente:
 il numero di chilometri che vuole percorrere
e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio.
Queste sono le regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65 (fortunelli).
*/

/* 
Tools:
- prompt
- const / let
- if / else
*/

// ask the client how many km do they have to travel
const client_km = prompt('Quanti chilometri devi percorrere?');

// log 'client_km' in console
console.log(client_km);

// ask the client for their age
const client_age = prompt('Quanti hanni hai?');

// log 'client_age' in console
console.log(client_age);

// calculate the standard price
const standard_price = (0.21 * client_km);

// log 'standard_price' in console
console.log(standard_price);

// if their age is less than 18 a 20% discount applies
if (client_age < 18) {
    
    const discount_20 = standard_price - (standard_price * 20) / 100;

    console.log(discount_20);

    // Reduce to up to two decimals
    const discount_20_formatted = Math.round(discount_20 * 100) / 100;

    // print in page
    const ticket_priceElement = document.getElementById ('ticket_price');

    ticket_priceElement.innerHTML = `Il prezzo del tuo biglietto è: € ${discount_20_formatted}`;
}


// if their age is more than 65 a 40% discount applies
else if (client_age > 65) {

    const discount_40 = standard_price - (standard_price * 40) / 100;

    console.log(discount_40);

    // Reduce to up to two decimals
    const discount_40_formatted = Math.round(discount_40 * 100) / 100;

    // print in page
    const ticket_priceElement = document.getElementById ('ticket_price');

    ticket_priceElement.innerHTML = `Il prezzo del tuo biglietto è: € ${discount_40_formatted}`;
}

// else print in page the standard price
else {

    const ticket_priceElement = document.getElementById ('ticket_price');

    ticket_priceElement.innerHTML = `Il prezzo del tuo biglietto è: € ${standard_price}`;
}