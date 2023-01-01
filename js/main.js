(function ($) {
    "use strict";

    $(document).ready(function () {
        youtubePopup();
    });

    $(document).ready(function () {
        scrollspySmoothScroll();
    });
    
    /*-----------------------------------------------------------------
        magnificPopup
    -------------------------------------------------------------------*/

    function youtubePopup() {
        $('.popup-youtube').magnificPopup({
            type: 'iframe'
        });
    };
    
    /*-----------------------------------------------------------------
         Smooth Scroll
    -------------------------------------------------------------------*/

    function scrollspySmoothScroll() {
        $("#nav-scroll-smooth ul li a[href^='#']").on('click', function (e) {
            // prevent default anchor click behavior
            e.preventDefault();
            // store hash
            var hash = this.hash;
            // animate
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1000, function () {

                // when done, add hash to url
                // (default click behaviour)
                window.location.hash = hash;
            });
        });
    };
    
     /*-----------------------------------------------------------------
        Close mobile bootstrap menu after click
    -------------------------------------------------------------------*/
    
     var navMain = $(".navbar-collapse");

     navMain.on("click", "a", null, function () {
         navMain.collapse('hide');
     });

})(jQuery);
