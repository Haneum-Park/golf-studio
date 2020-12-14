$(document).ready(function() {
    // Or with jQuery

    $('.carousel').carousel({
        dist: 0,
        duration: 100,
        fullWidth: true,
        indicators: true,
    });

    $('.moveNextCarousel').click(function(e) {
        e.preventDefault();
        e.stopPropagation();
        $('.carousel').carousel('next');
    });

    $('.movePrevCarousel').click(function(e) {
        e.preventDefault();
        e.stopPropagation();
        $('.carousel').carousel('prev');
    });
});

autoplay()
function autoplay() {
    $('.carousel').carousel('next');
    setTimeout(autoplay, 4500);
}

