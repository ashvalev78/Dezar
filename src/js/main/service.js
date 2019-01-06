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

var $masterPopupButton = $('.master_wrapper');

$masterPopupButton.click(function(e) {
    $('.master__popup').toggleClass("visible_popup");
    $('.popup_blur').toggleClass('visible_popup');
    $('.wrapper_services').toggleClass('blur');

    $('.master__descr-name').html(masters[e.currentTarget.getAttribute('data-attr')].name);
    $('.master__photo').css('background', masters[e.currentTarget.getAttribute('data-attr')].img);
});

var $masterPopupBackButton = $('.master__popup-close-button');

$masterPopupBackButton.click(function() {
    $('.master__popup').toggleClass("visible_popup");
    $('.popup_blur').toggleClass('visible_popup');
    $('.wrapper_services').toggleClass('blur');
});

var masters = {
    1: {
        name: "Наталия",
        img: "url(./svg/1x/Master-1-min.png)"
    },
    2: {
        name: 'Жаннет',
        img: "url(./svg/1x/Master-2-min.png)"
    },
    3: {
        name: 'Халида',
        img: "url(./svg/1x/Master-3-min.png)"
    },
    4: {
        name: 'Лера',
        img: "url(./svg/1x/Master-4-min.png)"
    }
};