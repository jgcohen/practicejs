// afficher les nombre de 1 à 200
// les multiples de 3 sont remplacé par Fizz
// Lesmultiples de 7 sont remplacés par Buzz
// les multiples de 3 et 7 sont remplacés par FizzBuzz.




for (let ex1 = 1; ex1 <= 200; ex1++) {
    let resultat = "";
 
    resultat += (ex1 % 3 === 0) ? "Fizz" : ""

      // if (ex1 % 3 == 0) {
    //     resultat += "Fizz"
    // } 
    // if (ex1 % 7 == 0) {
    //     resultat += "Buzz"

    // }

    resultat += (ex1 % 7 === 0) ? "Buzz" : ""
    // if (resultat === "") {
    //     console.log(ex1);

    // } else {
    //     console.log(resultat);
    // }
    console.log((resultat != "") ? resultat : ex1)//remplace les lignes du dessus.
}// ? veut dire alors : veut dire sinon
