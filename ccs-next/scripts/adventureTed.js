var slidesIndex = 1;
showSlides(slidesIndex);

function plusSlides(n){
    showSlides(slidesIndex += n);
}

function currentSlide(n){
    showSlides(slidesIndex = n);
}

function showSlides(n){
    let slides = document.getElementsByClassName("quoteSlides");

    if (n > slides.length) {
        slidesIndex = 1;
    }

    if(n < 1){
        slidesIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }

    slides[slidesIndex-1].style.display = "block";
}

window.onload= function () {
    setInterval(function(){ 
        plusSlides(1);
    }, 3000); } 