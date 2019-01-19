var $popupButton = $('.finish__accept');

$popupButton.click(function() {
    $('.finish__popup').addClass("visible_popup");
    $('.popup_blur').toggleClass('visible_popup');
    $('.wrapper_finish').toggleClass('blur');
});

var $popupBackButton = $('.finish__OK');

$popupBackButton.click(function() {
    $('.finish__popup').removeClass("visible_popup");
    $('.popup_blur').toggleClass('visible_popup');
    $('.wrapper_finish').toggleClass('blur');
});


function getURIValue(str, symb) {
    var uri = decodeURI(location.href);
    return uri.slice(uri.indexOf(str) + str.length, uri.indexOf(symb, uri.indexOf(str)));
}

var uri = decodeURI(location.href);

// $('.finish__cost-price').html(getURIValue('sum=', '&'));
// $('.finish__cost-time').html(getURIValue('time=', '&'));
// $('.finish__date-time').html(uri.slice(uri.indexOf('t=') + 2));

$(document).ready(function($) {

    $('.finish__phone-number').mask('+7(000) 000 - 00 - 00', {
        placeholder: "+7(___) ___ - __ - __"
    });

    if (uri.indexOf('tel=') !== -1) {
        console.log(getURIValue('tel=', '&'));
        document.getElementsByClassName('finish__phone-number')[0].value = '+' + getURIValue('tel=', '&');
    }
});