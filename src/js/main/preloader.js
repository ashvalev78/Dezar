
console.log(document.getElementsByClassName('preloader')[0]);
if (document.getElementsByClassName('preloader')[0] !== undefined) {
    
    // console.log('huy');
    var func = function () {
    //     console.log($('.preloader'));
    //     $('.preloader').fadeOut(600);
        document.getElementsByClassName('preloader')[0].classList.add('hiding__preloader');
    };
    setTimeout(func, 2000);
}