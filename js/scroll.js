$(function () { // run this code on page load (AKA DOM load)

    var scroll_timer;
    var displayed = false;
    var $message = $('#downpage');
    var $window = $(window);
    var top = $(document.body).children(0).position().top;


    $('.scroll-down[href^="#"]').bind('click.smoothscroll',function (e) {
        e.preventDefault();

        var target = this.hash,
            $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 1000, 'swing', function () {
            window.location.hash = target;
        });
    });
});