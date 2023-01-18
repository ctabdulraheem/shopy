// Navigation menu open and close
let humburgerMenu = document.getElementById("humburger_menu");
let navLinks =  document.getElementsByClassName("nav_links")[0];
humburgerMenu.addEventListener('click', ()=>{
    if(navLinks.style.display  == "block"){
        navLinks.style.display = "none";
    } else {
        navLinks.style.display = "block";
    }
})
