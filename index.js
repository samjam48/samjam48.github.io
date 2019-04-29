let rightButton = document.getElementById("right");
let leftButton  = document.getElementById("left");
var carouselCount = 0;
var slides = document.getElementsByClassName("slide");

const updateSlides = () => {
    for (var i = 0; i < slides.length; i++) {
        if( i == carouselCount){
            slides[i].classList.add('is-visible');
        } else {
            slides[i].classList.remove('is-visible');
        }
    }
}

updateSlides();

rightButton.onclick = (event) => slideRight(event);
leftButton.onclick = (event) => slideLeft(event);

document.onkeydown = (event) => {
    if (event.keyCode == '37') {
        slideLeft(event);
    }
    else if (event.keyCode == '39') {
        slideRight(event);
    }
}

const slideRight = (event) => {
    if (carouselCount < slides.length - 1){
        carouselCount++;
    } else {
        carouselCount = 0;
    }

    updateSlides();
}

const slideLeft = (event) => {
    if (carouselCount > 0){
        carouselCount--;
    } else {
        carouselCount = slides.length - 1;
    }

    updateSlides();
}





/*
Set selected to centre
left to -100%
right to +100%
others to none
*/
