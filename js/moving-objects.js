function updateImages(e) {
    var mouseX = e.pageX || 0 - $('#banner').offset().left;
    var mouseY = e.pageY || 0 - $('#banner').offset().top;
    var totalX = $('#banner').width();
    var totalY = $('#banner').height();
    var centerX = totalX / 2;
    var centerY = totalY / 2;
    var shiftX = centerX - mouseX;
    var shiftY = centerY - mouseY;

    var startX = ($('#banner').width() / 2) - ($('#moving-object-zuraw').width() / 2);
    var startY = ($('#banner').height() / 2) - ($('#moving-object-zuraw').height() / 2);

    $('#moving-object-zuraw').css({'left': startX + (shiftX / 5) - 500 + 'px', 'top': startY + (shiftY / 5) + 'px'});
    $('#moving-object-kapsel').css({'left': startX + (shiftX / 8) - 250 + 'px', 'top': startY + (shiftY / 8) + 750 + 'px'});
    $('#moving-object-sfinks').css({'left': startX + (shiftX / 6) - 100 + 'px', 'top': startY + (shiftY / 6) + 500 + 'px'});
    $('#moving-object-neptun').css({'left': startX + (shiftX / 8) - 100 + 'px', 'top': startY + (shiftY / 8) + 50 + 'px'});
    $('#moving-object-vinyl').css({'left': startX + (shiftX / 4) + 150 + 'px', 'top': startY + (shiftY / 4) + 50 + 'px'});
    $('#moving-object-vinyl2').css({'left': startX + (shiftX / 4) + 900 + 'px', 'top': startY + (shiftY / 4) + 80 + 'px'});
    $('#moving-object-fala').css({'left': startX + (shiftX / 6) - 1300 + 'px', 'top': startY + (shiftY / 6) + 500 + 'px'});
    $('#moving-object-gradient').css({'left': startX + (shiftX / 6) - 1500 + 'px', 'top': startY + (shiftY / 6) - 700  + 'px'});
    $('#moving-object-molo').css({'left': startX + (shiftX / 6) - 600 + 'px', 'top': startY + (shiftY / 6) + 200 + 'px'});
}

$(document).ready(function ($) {
    $("#banner").mousemove(updateImages);
});

$(window).load(updateImages);