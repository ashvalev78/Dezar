/*!
 * project-name v0.0.1
 * A description for your project.
 * (c) 2018 YOUR NAME
 * MIT License
 * http://link-to-your-git-repo.com
 */

var $registerButton = $('.register-btn');
// alert($registerButton);

$registerButton.click((function() {
    console.log('fuck');
    var $loginInputForm = $('.login-input-form');
    var $hiddenButtonsBlock = $('.hidden_buttons_block');
    $loginInputForm.hide();
    $hiddenButtonsBlock.attr("style", "display: flex");
    $hiddenButtonsBlock.show();
}));
/**
 * Element.matches() polyfill (simple version)
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/matches#Polyfill
 */
if (!Element.prototype.matches) {
	Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
}