var $backButton = $('#back_button');

$backButton.click(function() {
    var $loginInputForm = $('.login-input-form');
    var $hiddenButtonsBlock = $('.hidden_buttons_block');
    $loginInputForm.show();
    $hiddenButtonsBlock.hide();
});