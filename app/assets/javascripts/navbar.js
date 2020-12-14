(function ($) {
    $(function () {
        $('.sidenav').sidenav({
            edge: 'right',
            preventScrolling: false,
            outDuration: 250
        });

        $('.dropdown-trigger').dropdown({
            hover: true,
            coverTrigger: false,
            constrainWidth: false,
        });

        $('.dropdown-trigger-mobile').dropdown({
            hover: true,
            coverTrigger: false,
            constrainWidth: false,
        });
    }); // end of document ready
})(jQuery); // end of jQuery name space