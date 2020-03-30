// video
document.querySelector('.photosession_photo').onclick = function() {
    this.style.display = 'none';
    document.querySelector('div.youtube').style.display = 'block';
    document.querySelector('iframe.youtube')
      .src="https://www.youtube.com/embed/JhrTwuRg5Q4?start=5";
  };

// pictures slide
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("pic_mob");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

// venue slide
var indexSlide = 1;
slidesShow(indexSlide);

function plusSlide(n) {
  slidesShow(indexSlide += n);
}

function currentSlide(n) {
  slidesShow(indexSlide = n);
}

function slidesShow(n) {
  var i;
  var slides1 = document.getElementsByClassName("venue_mob");
  var dots = document.getElementsByClassName("dot");
  if (n > slides1.length) {indexSlide = 1}
  if (n < 1) {indexSlide = slides1.length}
  for (i = 0; i < slides1.length; i++) {
      slides1[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides1[indexSlide-1].style.display = "block";
  dots[indexSlide-1].className += " active";
}

