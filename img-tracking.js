function updateImages(e) {
    var mouseX = e.pageX || 0  - $('#mouseMove').offset().left;
    var mouseY = e.pageY || 0 - $('#mouseMove').offset().top;
    var totalX = $('#mouseMove').width();
    var totalY = $('#mouseMove').height();
    var centerX = totalX / 2;
    var centerY = totalY / 2;
    var shiftX = centerX - mouseX;
    var shiftY = centerY - mouseY;

    var startX = ($('#mouseMove').width() / 2) - ($('#zuraw').width() / 2);
    var startY = ($('#mouseMove').height() / 2) - ($('#zuraw').height() / 2);

    $('#zuraw').css({ 'left': -500 + startX + (shiftX/5) + 'px', 'top': startY + (shiftY/5) + 'px' });
    $('#kapsel').css({ 'left': startX + -250 + (shiftX/8) + 'px', 'top': startY + 750 + (shiftY/8) + 'px' });
    $('#sfinks').css({ 'left':  startX + -100 + (shiftX/6) + 'px', 'top': 500 + startY + (shiftY/6) + 'px' });
    $('#neptun').css({ 'left': -100 + startX + (shiftX/8) + 'px', 'top': startY + 50 + (shiftY/8) + 'px' });
    $('#vinyl').css({ 'left': 50 + startX + (shiftX/4) + 'px', 'top': 200 + startY + -120 + (shiftY/4) + 'px' });
    $('#vinyl2').css({ 'left': 900 + startX + (shiftX/4) + 'px', 'top': 200 + startY + -120 + (shiftY/4) + 'px' });
    $('#fala').css({ 'left': -1000 + startX + (shiftX/6) + 'px', 'top': 500 + startY + (shiftY/6) + 'px' });
    $('#gradient').css({ 'left': startX + -1800 + (shiftX/6) + 'px', 'top': -1200 + startY + (shiftY/6) + 'px' });
    $('#molo').css({ 'left': startX + -600 + (shiftX/6) + 'px', 'top': startY + 200 + (shiftY/6) + 'px' });
}

$(document).ready(function($){
    $("#mouseMove").mousemove(updateImages);
});

$(window).load(updateImages);