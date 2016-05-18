/**
 * Created by gabriela on 18.05.16.
 */
$(document).ready(function($){
    $("#index").mousemove(function(e){
        var mouseX = e.pageX - $('#index').offset().left;
        var mouseY = e.pageY - $('#index').offset().top;
        var totalX = $('#index').width();
        var totalY = $('#index').height();
        var centerX = totalX / 2;
        var centerY = totalY / 2;
        var shiftX = centerX - mouseX;
        var shiftY = centerY - mouseY;

        var startX = ($('#index').width() / 2) - ($('#o1').width() / 2);
        var startY = ($('#index').height() / 2) - ($('#o1').height() / 2);

        $('#o1').css('z-index') ;
        $('#o1').css({ 'left': startX + (shiftX/10) + 'px', 'top': startY + (shiftY/10) + 'px' });
        $('#o2').css({ 'left': startX + 220 + (shiftX/8) + 'px', 'top': startY + 50 + (shiftY/8) + 'px' });
        $('#o3').css({ 'left': startX + 370 + (shiftX/6) + 'px', 'top': startY + 60 + (shiftY/6) + 'px' });
        $('#o4').css({ 'left': startX - 100 + (shiftX/8) + 'px', 'top': startY + 50 + (shiftY/8) + 'px' });
        $('#o5').css({ 'left': startX - 150 + (shiftX/6) + 'px', 'top': startY + 60 + (shiftY/6) + 'px' });
    });
});