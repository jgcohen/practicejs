//ordi choisit un nomvbre betre 1 et 100

// //L'utilisateur promose u nombre, le navigateur lui indique +grandplus petit Gagné.


// //Generer un nombre entre 1 et 100
// let aleatoire = Math.random();

// //on le passe entre 0 et 100
// aleatoire = aleatoire*100

// //On arrondit à l'entier inferieur. 0 à 99

// aleatoire = Math.floor(aleatoire); // avec round à l'entier le plus proche, ceil le plus petit entier plus grand que la valeur

// //on ajoute 1
// aleatoire = aleatoire+1

// //let aleatoire =Math.floor(Math.random()*100)+1;


// console.log(aleatoire)

// do{
//     var propose = prompt("Entrez un nombre entre 1 et 100");
//     if(propose>aleatoire){
//         //OUI
//         console.log("le nombre est plus petit");
//     }else{
//         //NON
//         if(propose<aleatoire){
//             //OUI 
//             console.log("le nombre est plus grand")
//         }else{
//             console.log("Tu as gagné")
//         }
//     }
    
// }while(aleatoire!= propose);

let aleatoire = Math.floor(Math.random()*100)+1;

console.log(aleatoire);
let essais;
for(essais =1; essais <= 6; essais++){
    var propose = prompt("Entrez un nombre de 1 à 100");
    console.log("nombre d'essais restant = ", 6-essais);
    if (propose> aleatoire){
        //oui
        console.log("le nombre est plus petit que=", propose);

    }else{
        //NON
        if(propose< aleatoire){
            //oui
            console.log("le nombre est plus grand que=", propose)
        }else{
            //non
            console.log("Gagne")
            //On "casse la boucle"
            break;
        }
    }
}
if(essais > 6){
    console.log("Perdu looser, il fallait trouver =", aleatoire);
}