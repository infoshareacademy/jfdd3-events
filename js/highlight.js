$(window).on("scroll", function() {
    var currentPos = $(window).scrollTop();

    $('.nav li a').each(function() {
        var sectionLink = $(this);
        // capture the height of the navbar
        var navHeight = $('#nav-wrapper').outerHeight() + 1;
        var section = $(sectionLink.attr('href'));

        // subtract the navbar height from the top of the section
        if(section.position().top - navHeight  <= currentPos && sectionLink.offset().top + section.height()> currentPos) {
            $('.nav li').removeClass('highlight');
            sectionLink.parent().addClass('highlight');
        } else {
            sectionLink.parent().removeClass('highlight');
        }
    });
});
