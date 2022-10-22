// Toggle Menu
let menu = document.querySelector(".toggle-menu");
let nav = document.querySelector(".nav-links");

menu.addEventListener("click", function () {
    nav.classList.toggle('show');
});

// Scroll 
let scrollEle = document.querySelector('.scroll i');

window.onscroll = function (){
    // console.log(this.scrollY);
    if (this.scrollY >= 300){
        scrollEle.classList.add("show");
    } else{
        scrollEle.classList.remove("show");
    }
}
scrollEle.onclick = function (){
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}