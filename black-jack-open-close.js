/**
 * Created by slawek on 25.05.16.
 */

$(document).ready(function() {
    $('form').submit(function (event) {
        event.preventDefault();
        $('#main-container-zapisz-sie').hide(); $('#game').css({display:'flex'});

    });
});


function endGame (B1, B2, B3) {
    if (B1===B2 && B2===B3){
        $('#wynik').html("Wygrałeś nagrodę!");
    }
    else{
        $('#wynik').html("Przegrałeś. Spróbuj jeszcze raz!");
    }

}