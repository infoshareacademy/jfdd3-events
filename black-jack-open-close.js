/**
 * Created by slawek on 25.05.16.
 */

$(document).ready(function() {
    $('form').submit(function (event) {
        event.preventDefault();
        $('#main-container-zapisz-sie').hide(); $('#game').css({display:'flex'});

    });
});