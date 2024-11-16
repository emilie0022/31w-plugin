(function(){
    console.log("vive Javascript");
    let carrousel = document.querySelector('.carrousel')
    let carrousel__bouton = document.querySelector(".carrousel__bouton")
    let carrousel__X = document.querySelector(".carrousel__X")

    carrousel__bouton.addEventListener('mousedown', function(){
        carrousel.classList.add('carrousel--ouvrir')
    })

    carrousel__X.addEventListener('mousedown', function(){
        carrousel.classList.remove("carrousel--ouvrir");
    })
})()

