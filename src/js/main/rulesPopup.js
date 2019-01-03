var $popupButton1 = $('.rules_popup_button_open');
var $popupButton2 = $('.process_popup_button_open');
var $rulesPopup = $('.rules_popup');
var $processPopup = $('.process_popup');
var checkboxRulesSwitcher = $('.agreement_input');
var $backDimmer = $('.background_dimmer');
var sliders = document.getElementsByClassName('agreement_input');


$popupButton1.click(function() {
    if (!sliders[0].checked) {
        $rulesPopup.attr("style", "display: flex");
        $popupButton1.toggleClass("slider_active");
        $backDimmer.show();
        sliders[0].checked = true;
    } else {
        sliders[0].checked = false;
    }
});

$('.popup_cancel').click(function() {
    $processPopup.hide();
    $rulesPopup.hide();
    $backDimmer.hide();
    $popupButton1.attr("style", "display: flex");
    sliders[0].checked = false;
    sliders[1].checked = false;
});

$('.popup_accept').click(function() {
    $processPopup.hide();
    $rulesPopup.hide();
    $backDimmer.hide();
});

$popupButton2.click(function() {
    if (!sliders[1].checked) {
        $processPopup.attr("style", "display: flex");
        $backDimmer.show();
        sliders[1].checked = true;
    } else {
        sliders[1].checked = false;
    }
});