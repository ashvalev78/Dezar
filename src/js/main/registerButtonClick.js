var $registerButton = $('.register-btn');

$registerButton.click(function() {
    var $loginInputForm = $('.login-input-form');
    var $hiddenButtonsBlock = $('.hidden_buttons_block');
    $loginInputForm.hide();
    $hiddenButtonsBlock.attr("style", "display: flex");
});

$('#phone-input').mask('+7(000) 000 - 00 - 00', {
    placeholder: "+7(___) ___ - __ - __"
});
