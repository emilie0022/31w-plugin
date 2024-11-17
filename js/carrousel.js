(function(){
    console.log("vive Javascript");
    let carrousel = document.querySelector('.carrousel');
    let carrousel__bouton = document.querySelector(".carrousel__bouton");
    let carrousel__X = document.querySelector(".carrousel__X");
    let carrousel__image = document.querySelector(".carrousel__image");
    let carrousel__figure = document.querySelector(".carrousel__figure");
    let galerie = document.querySelector(".galerie");
    let galerie__img = document.querySelectorAll(".galerie img");
    console.log(galerie__img.length);
    


    function remplirCarrousel(){
        for(elm of galerie__img){
            console.log(elm.src);
            let img = document.createElement("img");
            img.src = elm.src;
            carrousel__figure.appendChild(img);
        }
    }

    carrousel__bouton.addEventListener("click", function () {
        if(carrousel__figure.innerHTML ===""){
            remplirCarrousel();
        }

       
        carrousel.classList.add('carrousel--ouvrir')
        console.log("ouvrir");
        
    })

    carrousel__X.addEventListener('click', function(){
        carrousel.classList.remove("carrousel--ouvrir");
    })
})()

