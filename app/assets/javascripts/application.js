//= require jquery
//= require materialize
//= require jquery_ujs
//= require_tree .

window.onscroll = function() { navbarTop(); };

function navbarTop() {
    var navbar = document.getElementById('navbar-top');

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navbar.classList.remove("nav-top-fade-out")
        navbar.className = "nav-top-fade-in";
        navbar.style.backgroundColor = "rgba(23, 23, 23, 0.6)";
    } else {
        navbar.classList.remove('nav-top-fade-in');
        navbar.className= "nav-top-fade-out";
        navbar.style.backgroundColor = "rgba(23, 23, 23, 0)";
    }
}