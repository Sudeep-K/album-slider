let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.querySelectorAll(".image-bg");
  let showcase_img = document.querySelectorAll(".showcase");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < showcase_img.length; i++) {
    showcase_img[i].className = showcase_img[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  showcase_img[slideIndex-1].className += " active";
}

// showSlidesintwo();

// function showSlidesintwo() {
//   let i;
//   let slides = document.getElementsByClassName("image-bg");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}
//   slides[slideIndex-1].style.display = "block";
//   setTimeout(showSlidesintwo, 2000); // Change image every 2 seconds
// }