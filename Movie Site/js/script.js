var menu = document.querySelector(".menu");

menu.addEventListener('click', function(e) {
    e.stopPropagation();
    document.querySelector("#main_nav").classList.toggle("active"); 
});