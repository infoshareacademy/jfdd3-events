/**
 * Created by gabriela on 18.05.16.
 */
function updateImages(e) {
    var mouseX = e.pageX || 0  - $('#index').offset().left;
    var mouseY = e.pageY || 0 - $('#index').offset().top;
    var totalX = $('#index').width();
    var totalY = $('#index').height();
    var centerX = totalX / 2;
    var centerY = totalY / 2;
    var shiftX = centerX - mouseX;
    var shiftY = centerY - mouseY;

    var startX = ($('#index').width() / 2) - ($('#o1').width() / 2);
    var startY = ($('#index').height() / 2) - ($('#o1').height() / 2);

    //$('#o1').css('z-index') ;
    $('#o1').css({ 'left': -500 + startX + (shiftX/5) + 'px', 'top': startY + (shiftY/5) + 'px' });
    $('#o2').css({ 'left': startX + -250 + (shiftX/8) + 'px', 'top': startY + 750 + (shiftY/8) + 'px' });
    $('#o3').css({ 'left':  startX + -100 + (shiftX/6) + 'px', 'top': 500 + startY + (shiftY/6) + 'px' });
    $('#o4').css({ 'left': -100 + startX + (shiftX/8) + 'px', 'top': startY + 50 + (shiftY/8) + 'px' });
    $('#o5').css({ 'left': 50 + startX + (shiftX/4) + 'px', 'top': 200 + startY + -120 + (shiftY/4) + 'px' });
    $('#o55').css({ 'left': 900 + startX + (shiftX/4) + 'px', 'top': 200 + startY + -120 + (shiftY/4) + 'px' });
    $('#o8').css({ 'left': -1000 + startX + (shiftX/6) + 'px', 'top': 500 + startY + (shiftY/6) + 'px' });
    $('#grad').css({ 'left': startX + -1800 + (shiftX/6) + 'px', 'top': -1200 + startY + (shiftY/6) + 'px' });
    $('#o7').css({ 'left': startX + -600 + (shiftX/6) + 'px', 'top': startY + 200 + (shiftY/6) + 'px' });
}

$(document).ready(function($){
    $("#index").mousemove(updateImages);
});

$(window).load(updateImages);