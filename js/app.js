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
