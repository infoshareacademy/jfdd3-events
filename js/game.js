'use strict'

$(document).ready(function() {
    $('form').submit(function (event) {
        event.preventDefault();
        $('.subscription').hide();
        $('.main-game-container').css({display:'flex'});

    });
});

$(function() {
    $( "#start" ).click(function() {
        var B1, B2, B3;
        B1=Math.round(Math.random()*2);
        B2=Math.round(Math.random()*2);
        B3=Math.round(Math.random()*2);

        $( ".item-game-1" )
            .animate({backgroundPositionY:0})
            .animate({'background-position-y':3000+B1* 100},3000);
        $( ".item-game-2" )
            .animate({backgroundPositionY:0})
            .animate({'background-position-y':3000+B2* 100},3000);
        $( ".item-game-3" )
            .animate({backgroundPositionY:0})
            .animate({'background-position-y':3000+B3* 100},3000);
        setTimeout(function () {
            checkResult(B1, B2, B3);
        }, 3500);

    });
});



function checkResult (B1, B2, B3) {
    if (B1===B2 && B2===B3){
        $('#wynik').empty().html("WYGRAŁEŚ WJAZD NA IMPREZĘ!");
    }
    else{
        $('#wynik').empty().html("PRZEGRAŁEŚ, SPRÓBUJ JESZCZE RAZ!");
    }

}

$(document).ready(function() {
    $('#start').click(function (event) {
        event.preventDefault();
        $('#wynik').empty();

            });
});
