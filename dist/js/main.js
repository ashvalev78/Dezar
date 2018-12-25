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
var $agreementInput = $('.agreement_input');
var slider = $('.slider');
// var switcher1 = $('.');

$popupButton1.click((function() {
    $rulesPopup.attr("style", "display: flex");
    // console.log('alsdasd');
    $popupButton1.toggleClass("slider_active");
    $backDimmer.show();
}));

$('.popup_cancel').click((function() {
    $processPopup.hide();
    $rulesPopup.hide();
    $backDimmer.hide();
    $popupButton1.attr("style", "display: flex");
    // $agreementInput[0].removeAttr('checked');
    // $agreementInput[1].removeAttr('checked');
}));

$popupButton2.click((function() {
    $processPopup.attr("style", "display: flex");
    $backDimmer.show();
}));