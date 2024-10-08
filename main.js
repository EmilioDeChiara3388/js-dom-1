//console.log("Funzioni?");

/* 
Inseriamo in pagina l’immagine della lampadina spenta che trovate in allegato e accanto un bottone con la scritta “Accendi”.
Al click del bottone, la lampadina dovrà accendersi (dovremo quindi utilizzare l’immagine della lampadina accesa, sempre in allegato)
*/
const imgEl = document.getElementById("lightbulb-off");
const secondImgEl = document.getElementById("lightbulb-on");
const buttonEl = document.querySelector(".button");
const secondButtonEl = document.getElementById("off-button");

buttonEl.addEventListener("click", () => {
    imgEl.classList.add("new-pick");
    secondImgEl.classList.remove("new-pick");
    buttonEl.classList.add("new-pick");
    secondButtonEl.classList.remove("new-pick");
});

secondButtonEl.addEventListener("click", () => {
    imgEl.classList.remove("new-pick");
    secondImgEl.classList.add("new-pick");
    buttonEl.classList.remove("new-pick");
    secondButtonEl.classList.add("new-pick");
});

