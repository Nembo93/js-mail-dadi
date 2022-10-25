const userEmail = prompt(`Pervafore, inserisci la tua email`);
console.log(userEmail);

const emailList = [`pippo@boolean.it`, `pluto@boolean.it`, `paperino@boolean.it`]
console.log(emailList);
console.log(emailList.length);


let find = emailList.indexOf(userEmail);
    console.log(find);
    if (find < 0){
        console.log(`not find`);
        alert(`Spiacente, email non trovata.`)
    } else{
        console.log(`find`);
        alert(`benvenuto` + ` ` + userEmail);
    }


