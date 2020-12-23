
let images = ["images/img1.jpg", "images/image2.jpg", "images/metsky.jpg"];


window.onload = () => {
    let flecheDroite = document.querySelector("#flecheD");
    flecheDroite.addEventListener("click", function () {
        let premiereImage = images.shift();
        images.push(premiereImage);
        let image = document.querySelector("section img");
        image.src = images[0];
    });

    let flecheGauche = document.querySelector("#flecheG");
    flecheGauche.addEventListener("click", function () {
        let derniereImage = images.pop(); 
        images.unshift(derniereImage);
        let image = document.querySelector("section img");
        image.src = images[0];
    }); 
}