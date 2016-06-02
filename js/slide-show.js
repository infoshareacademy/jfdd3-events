'use strict'
window.onload = initLinks;

var myPix = new Array(
    "images/slide-show/original/photo1.jpg",
    "images/slide-show/original/photo2.jpg",
    "images/slide-show/original/photo3.jpg",
    "images/slide-show/original/photo4.jpg",
    "images/slide-show/original/photo5.jpg",
    "images/slide-show/original/photo6.jpg");
var thisPic = 0;
var intervalId = setInterval(processNext,5000);
function initLinks() {

    document.getElementById("prevLink").onclick = processPrevious;
    document.getElementById("nextLink").onclick = processNext;

}

function processPrevious() {
    if (thisPic == 0) {
        thisPic = myPix.length;
    }
    thisPic--;
    document.getElementById("myPicture").src = myPix[thisPic];
    return false;
}

function processNext() {
    thisPic++;
    if (thisPic == myPix.length) {
        thisPic = 0;
    }
    document.getElementById("myPicture").src = myPix[thisPic];
    return false;
}

$( ".mini-photo" ).click(function() {
    var src = $(this).attr("src");
    var index = myPix.indexOf(src.replace('mini', 'original'));
    console.log(src,index);
    thisPic = index;
    document.getElementById("myPicture").src = myPix[thisPic];
    //clearInterval(intervalId);

});

