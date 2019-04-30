const leftButton  = document.getElementById("left-button");
const rightButton = document.getElementById("right-button");
let currentSlide = 0;
let visible = true;
const slides = document.getElementsByClassName("slide");

leftButton.onclick = () => slideLeft(currentSlide);
rightButton.onclick = () => slideRight(currentSlide);

document.onkeydown = (event) => {
    if (event.keyCode == '37') {
        slideLeft(currentSlide);
    } else if (event.keyCode == '39') {
        slideRight(currentSlide);
    }
};

function slideLeft(n) {
    console.log("left clicked");
	hideSlide('to-right');
	changeCurrentSlide(n - 1);
	showSlide('from-left');
}

function slideRight(n) {
    console.log("right clicked");
	hideSlide('to-left');
	changeCurrentSlide(n + 1);
	showSlide('from-right');
}

function changeCurrentSlide(n) {
    currentSlide = (n + slides.length) % slides.length;
}

function hideSlide(direction) {
    visible = false;
    slides[currentSlide].classList.add(direction);
    slides[currentSlide].addEventListener('animationend', function() {
        this.classList.remove('active', direction);
    });
}

function showSlide(direction) {
	slides[currentSlide].classList.add('next', direction);
	slides[currentSlide].addEventListener('animationend', function() {
		this.classList.remove('next', direction);
		this.classList.add('active');
		visible = true;
	});
}
