var $sliderElements = $('.colorize-item');
var $sliderServices = $('.slider_services');
var $sliderWidth = $sliderServices.width();
var $sliderHeight = $sliderServices.height();
var $serviceDescription = $('.service_description');
var $masterDescription = $('.master__description');


var $colItem = $('.service_description');

$colItem.click(function(e) {
    $(e.currentTarget).parent().toggleClass('selected');
});

var $popupButton = $('.service_wrapper');

$popupButton.click(function() {
    $('.popup__description').toggleClass("visible_popup");
    $('.popup_blur').toggleClass('visible_popup');
    $('.wrapper_services').toggleClass('blur');
});

var $popupBackButton = $('.popup__description-back');

$popupBackButton.click(function() {
    $('.popup__description').toggleClass("visible_popup");
    $('.popup_blur').toggleClass('visible_popup');
    $('.wrapper_services').toggleClass('blur');
});

var $careItem = $('.care_description');

$careItem.click(function(e) {
    $(e.currentTarget).parent().toggleClass('selected');
});

var $haircutItem = $('.haircut_description');

$haircutItem.click(function(e) {
    $(e.currentTarget).parent().toggleClass('selected');
});

var $masterItem = $('.master__description');

$masterItem.click(function(e) {
    $(e.currentTarget).parent().toggleClass('selected');
});