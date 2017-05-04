var menu = document.querySelector(".menu");

// Click the bars to assign an active class to main_nav which will show navigation menu
menu.addEventListener('click', function(e) {
    e.stopPropagation();
    document.querySelector("#main_nav").classList.toggle("active"); 
});


// Click anywhere on the site to remove the active class, closing the nav bar
document.addEventListener('click', function() {
     document.querySelector("#main_nav").classList.remove("active"); 
}); 

