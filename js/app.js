// Mail
// Crea un array con una lista di email (stringhe)
// Chiedi all’utente la sua email (con il prompt), controlla che sia nella lista di email,
// stampa un messaggio appropriato sull’esito del controllo.

// 1 Create an array with the "mail-list"
    // stamp the strings in the console

// 2 ask the user his/her email with prompt
    // stamp the user email in the console

// 3 CONDITION = check of the user email
    // IF the user-email is in the "mail-list" i stamp a result
    // ELSE i stamp the other result


// 1 Create Array
const mailList = ['hello@gmail.com', 'world@gmail.com', 'lorem@gmail.com', 'ipsum@gmail.com']
console.log(mailList)

// 2 Create Prompt
const userEmail = prompt('Add your email')
console.log(userEmail)

// 3 CONDITION
// IF user-email is taken = true
if (mailList[0] === userEmail) {
    console.log('true')
}

else if (mailList[1] === userEmail) {
    console.log('true')
}

else if (mailList[2] === userEmail) {
    console.log('true')
}

else if (mailList[3] === userEmail) {
    console.log('true')
}
// ELSE = false
else {
    console.log('false')
}


// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.

// 1 Create 2 random numbers from 1 to 6

// 2 CONDITION 
    // IF random1 === random2
    // ELSE IF random1 > random2 random1 win
    // ELSE random2 win

console.log('DICE GAME')

const playerChoice = Math.round(Math.random() * 5 + 1)
console.log(playerChoice, 'You')

const pcChoice = Math.round(Math.random() * 5 + 1)
console.log(pcChoice , 'PC')

if (pcChoice === playerChoice) {
    console.log('Draw')
}

else if (pcChoice > playerChoice) {
    console.log('Pc Win')
}

else {
    console.log('You Win')
}

