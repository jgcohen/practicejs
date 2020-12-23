window.onload = () => {
    let eltJours = document.querySelector("#jours");
    let eltHeures = document.querySelector("#heures");
    let eltMinutes = document.querySelector("#minutes");
    let eltSecondes = document.querySelector("#secondes");

    setInterval(function () {
        if (secondes > 0) {
            secondes--;
        } else {
            if (minutes > 0) {
                minutes--;
                secondes = 59;
            } else {
                if (heures > 0) {
                    heures--;
                    secondes = 59;
                    minutes = 59;      //on peut dire secondes = minutes = 59;
                } else {
                    if (jours > 0) {
                        jours--;
                        secondes = 59;
                        minutes = 59;
                        heures = 23;
                    }
                }
            }

        }
        eltHeures.innerHTML = heures;
        eltMinutes.innerHTML = minutes;
        eltSecondes.innerHTML = secondes;
        eltJours.innerHTML = jours;
    }, 1000)

}


let maintenant = new Date();
let noel = new Date('2020-12-25T00:00:00');

let temps = noel - maintenant;

// //get total seconds between the times
// var delta = Math.floor(noel - maintenant) / 1000;

// // calculate (and subtract) whole days
// var days = Math.floor(delta / 86400);
// delta -= days * 86400;

// // calculate (and subtract) whole hours
// var hours = Math.floor(delta / 3600) % 24;
// delta -= hours * 3600;

// // calculate (and subtract) whole minutes
// var minutes = Math.floor(delta / 60) % 60;
// delta -= minutes * 60;


// // what's left is seconds
// var seconds = Math.floor(delta % 60);  // in theory the modulus is not required
// console.log(maintenant);
// console.log(noel);
// console.log(days+"Jours "+hours+" heures "+minutes+" minutes "+ seconds+" secondes");



//On definit le nombre de jours
let jours = temps / (1000 * 60 * 60 * 24)
//on les arrondit à l'entier inferieur 
jours = Math.floor(jours);
//on recuperer le reste apres retrait des jours.
let reste = temps % (1000 * 60 * 60 * 24);

//on definit le nombre d'heure 

let heures = Math.floor(reste / (1000 * 60 * 60));
// on recuperer le reste apres retrait des heures.
reste = reste % (1000 * 60 * 60);

// combien y a t il de minutes dans reste
let minutes = Math.floor(reste / (1000 * 60));

//on recuperer le reste apres retrait des minutes

reste = reste % (1000 * 60);

// combien y a t il de ms dans 1 seconde ==> 1000ms

let secondes = Math.floor(reste / 1000);








