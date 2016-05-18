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
    $('#o1').css({ 'left': -500 + startX + (shiftX/10) + 'px', 'top': startY + (shiftY/10) + 'px' });
    $('#o2').css({ 'left': startX + -250 + (shiftX/8) + 'px', 'top': startY + 750 + (shiftY/8) + 'px' });
    $('#o3').css({ 'left': -500 + startX + 370 + (shiftX/6) + 'px', 'top': 400 + startY + 60 + (shiftY/6) + 'px' });
    $('#o4').css({ 'left': startX + (shiftX/8) + 'px', 'top': startY + 50 + (shiftY/8) + 'px' });
    $('#o5').css({ 'left': -400 + startX + (shiftX/6) + 'px', 'top': 200 + startY + -120 + (shiftY/6) + 'px' });
}

$(document).ready(function($){
    $("#index").mousemove(updateImages);
});

$(window).load(updateImages);