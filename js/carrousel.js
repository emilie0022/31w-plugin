(function(){
    console.log("vive Javascript");
    let carrousel = document.querySelector('.carrousel');
    let carrousel__bouton = document.querySelector(".carrousel__bouton");
    let carrousel__X = document.querySelector(".carrousel__X");
    let carrousel__gauche = document.querySelector(".carrousel__gauche");
    let carrousel__droite = document.querySelector(".carrousel__droite");
    let carrousel__image = document.querySelector(".carrousel__image");
    let carrousel__figure = document.querySelector(".carrousel__figure");
    let galerie = document.querySelector(".galerie");
    let galerie__img = document.querySelectorAll(".galerie img");
    console.log(galerie__img.length);
    
    let indexActuel = 0;

    function remplirCarrousel(){
        for(elm of galerie__img){
            console.log(elm.src);
            let img = document.createElement("img");
            img.src = elm.src;
            img.classList.add("carrousel__img")
            carrousel__figure.appendChild(img);
        }
    }

    carrousel__bouton.addEventListener("click", function () {
        if(carrousel__figure.innerHTML ===""){
            remplirCarrousel();
        }

        afficheImage(0);
        carrousel.classList.add('carrousel--ouvrir')
        console.log("ouvrir");
        
    })

    carrousel__X.addEventListener('click', function(){
        carrousel.classList.remove("carrousel--ouvrir");
        console.log("fermer");
    });

    carrousel__gauche.addEventListener("click", function () {
      indexActuel =
        (indexActuel - 1 + galerie__img.length) % galerie__img.length;
      afficheImage(indexActuel);
    });

    carrousel__droite.addEventListener("click", function () {
        indexActuel = (indexActuel + 1) % galerie__img.length;
        afficheImage(indexActuel);
    });

    function afficheImage(index){
        let carrousel__img = document.querySelectorAll(".carrousel__img");
        for (let i =0; i < carrousel__img.length; i++){
            carrousel__img[i].classList.remove("carrousel__img--visible");
        }
        carrousel__img[index].classList.add("carrousel__img--visible");
    }
})();
