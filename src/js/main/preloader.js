
console.log(document.getElementsByClassName('preloader')[0]);
if (document.getElementsByClassName('preloader')[0] !== undefined) {
    
    // console.log('huy');
    var func = function () {
        var f2 = function() {
            document.getElementsByClassName('preloader')[0].classList.add('preloader__hidden');
        }
    //     console.log($('.preloader'));
    //     $('.preloader').fadeOut(600);
        document.getElementsByClassName('preloader')[0].classList.add('hiding__preloader');
        setTimeout(f2, 1000);
    };
    setTimeout(func, 2000);
}