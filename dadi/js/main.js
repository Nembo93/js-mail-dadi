let userScore = Math.round(Math.random() * (5) + 1);
console.log (userScore);
document.getElementById(`user_score`).innerHTML = userScore;

let iaScore = Math.round(Math.random() * (5) + 1);
console.log (iaScore);
document.getElementById(`ia_score`).innerHTML = iaScore;

if (userScore > iaScore){
    console.log(`hai vinto`);
    document.getElementById(`gameResult`).innerHTML = `Hai vinto!`
}
else if ( userScore < iaScore){
    console.log(`hai perso`);
    document.getElementById(`gameResult`).innerHTML = `Hai perso.`
}
else {
    console.log(`parità`);
    document.getElementById(`gameResult`).innerHTML = `Parità.`
}