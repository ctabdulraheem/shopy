// Navigation menu open and close
let humburgerMenu = document.getElementById("humburger_menu");
let navLinks = document.getElementsByClassName("nav_links")[0];
humburgerMenu.addEventListener('click', () => {
    if (navLinks.style.display == "block") {
        navLinks.style.display = "none";
    } else {
        navLinks.style.display = "block";
    }
});


// Banner Slider

let slide_index = 1;
displaySlides(slide_index);

function nextSlide(n) {
    displaySlides(slide_index += n);
}

function currentSlide(n) {
    displaySlides(slide_index = n);
}
function prevSlide(n) {
    displaySlides(slide_index -= n);
}

function displaySlides(n) {
    let i;
    let slides = document.getElementsByClassName("banner_slideshow");
    if (n > slides.length) { slide_index = 1 }
    if (n < 1) { slide_index = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slide_index - 1].style.display = "block";
}


// let activeBannerControl = document.querySelectorAll('.banner_controls a');
// for(let i =0; i < activeBannerControl.length; i++){
//     activeBannerControl[i].addEventListener("click",()=>{
//        let a =  activeBannerControl[i].classList.contains('active_slider');
//         if( a == false ){
//             activeBannerControl[i].classList.add('active_slider');
//             activeBannerControl[i].nextSibling.classList.remove('active_slider');
//         } else {
//             // activeBannerControl[i].classList.remove('active_slider');
//         }
//         console.log()
//     })
// }