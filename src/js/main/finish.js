var $popupButton = $('.finish__accept');

$popupButton.click(function() {
    $('.finish__popup').toggleClass("visible_popup");
    $('.popup_blur').toggleClass('visible_popup');
    $('.wrapper_finish').toggleClass('blur');
});

var $popupBackButton = $('.finish__OK');

$popupBackButton.click(function() {
    $('.finish__popup').toggleClass("visible_popup");
    $('.popup_blur').toggleClass('visible_popup');
    $('.wrapper_finish').toggleClass('blur');
});