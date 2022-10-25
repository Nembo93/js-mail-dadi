let userScore = Math.round(Math.random() * (5) + 1);
console.log (userScore);

let iaScore = Math.round(Math.random() * (5) + 1);
console.log (iaScore);

if (userScore > iaScore){
    console.log(`hai vinto`);
}
else if ( userScore < iaScore){
    console.log(`hai perso`);
}
else {
    console.log(`parità`);
}