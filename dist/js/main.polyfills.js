/*!
 * project-name v0.0.1
 * A description for your project.
 * (c) 2018 YOUR NAME
 * MIT License
 * http://link-to-your-git-repo.com
 */

var $backButton = $('#back_button');

$backButton.click((function() {
    var $loginInputForm = $('.login-input-form');
    var $hiddenButtonsBlock = $('.hidden_buttons_block');
    $loginInputForm.show();
    $hiddenButtonsBlock.hide();
}));
var $registerButton = $('.register-btn');

$registerButton.click((function() {
    var $loginInputForm = $('.login-input-form');
    var $hiddenButtonsBlock = $('.hidden_buttons_block');
    $loginInputForm.hide();
    $hiddenButtonsBlock.attr("style", "display: flex");
}));
var $popupButton1 = $('.rules_popup_button_open');
var $popupButton2 = $('.process_popup_button_open');
var $rulesPopup = $('.rules_popup');
var $processPopup = $('.process_popup');
var checkboxRulesSwitcher = $('.agreement_input');
var $backDimmer = $('.background_dimmer');
var sliders = document.getElementsByClassName('agreement_input');


$popupButton1.click((function() {
    if (!sliders[0].checked) {
        $rulesPopup.attr("style", "display: flex");
        $popupButton1.toggleClass("slider_active");
        $backDimmer.show();
        sliders[0].checked = true;
    } else {
        sliders[0].checked = false;
    }
}));

$('.popup_cancel').click((function() {
    $processPopup.hide();
    $rulesPopup.hide();
    $backDimmer.hide();
    $popupButton1.attr("style", "display: flex");
    sliders[0].checked = false;
    sliders[1].checked = false;
}));

$('.popup_accept').click((function() {
    $processPopup.hide();
    $rulesPopup.hide();
    $backDimmer.hide();
}));

$popupButton2.click((function() {
    if (!sliders[1].checked) {
        $processPopup.attr("style", "display: flex");
        $backDimmer.show();
        sliders[1].checked = true;
    } else {
        sliders[1].checked = false;
    }
}));
var $sliderElements = $('.colorize-item');
var $sliderServices = $('.slider_services');
var $sliderWidth = $sliderServices.width();
var $sliderHeight = $sliderServices.height();
var $serviceDescription = $('.service_description');
var $masterDescription = $('.master__description');

// $serviceDescription.height($sliderHeight * 0.7);
// $sliderElements.width($sliderWidth * 0.9);
// $sliderElements.height($sliderHeight * 0.7);
// $sliderServices.height($sliderWidth * 0.7);
// $masterDescription.height($sliderHeight * 0.9);

// if ($(document).width() < 330) {
//     $sliderServices.height(330);
// }

// if ($sliderWidth > 600) {
//     $sliderServices.height(650);
//     $serviceDescription.height(500);
//     $masterDescription.height(500);
//     $sliderElements.height(500);
//     $sliderElements.width(600);
//     $masterDescription.height(400);
//     $masterDescription.width(300);
// }

var $colItem = $('.service_description');

$colItem.click((function(e) {
    $(e.currentTarget).parent().toggleClass('selected');
}));

var $popupButton = $('.service_wrapper');

$popupButton.click((function() {
    $('.popup__description').toggleClass("visible_popup");
}));

var $popupBackButton = $('.popup__description-back');

$popupBackButton.click((function() {
    $('.popup__description').toggleClass("visible_popup");
}));

var $careItem = $('.care_description');

$careItem.click((function(e) {
    $(e.currentTarget).parent().toggleClass('selected');
}));

var $haircutItem = $('.haircut_description');

$haircutItem.click((function(e) {
    $(e.currentTarget).parent().toggleClass('selected');
}));
// import Glide from '@glidejs/glide';

// new Glide('.glide__track-colorize').mount();
/**
 * Element.matches() polyfill (simple version)
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/matches#Polyfill
 */
if (!Element.prototype.matches) {
	Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
}