
if (document.getElementsByClassName('preloader')[0] !== undefined) {
    
    var func = function () {
        var f2 = function() {
            document.getElementsByClassName('preloader')[0].classList.add('preloader__hidden');
        }
        document.getElementsByClassName('preloader')[0].classList.add('hiding__preloader');
        setTimeout(f2, 1000);
    };
    setTimeout(func, 2000);

    var enterButton = document.getElementById('bottom-block__register');

    enterButton.addEventListener('click', function() {
        var fio = document.getElementsByName('name')[0].value;
        var phone = document.getElementsByName('phone')[0].value;
        console.log(phone.indexOf('+'));
        if (phone.indexOf('+') == 0) {
            phone = phone.slice(1);
        }
        location.replace('/registration.html?nm=' + fio + '&tel=' + phone);
    });
    function avtSoc(str){
        location.replace("?id="+str); 
    }
}