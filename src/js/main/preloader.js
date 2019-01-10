
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
        // console.log(phone.indexOf('+'));
        if (phone.indexOf('+') == 0) {
            phone = phone.slice(1);
        }
        var prevLoc = location.pathname;
        var newPath = '/registration.html?nm=' + fio + '&tel=' + phone;
        if (prevLoc.includes('/index.html')) {
            console.log('OK');
            prevLoc = prevLoc.replace('/index.html', newPath);
        } else {
            prevLoc = prevLoc.substr(0, prevLoc.length - 1) + newPath;
        }
        console.log(prevLoc);
        // location.replace(prevLoc);
    });

    function avtSoc(str){
        location.replace("?id="+str); 
    }

    document.getElementsByClassName('vk-enter')[0].addEventListener('click', function() {
        avtSoc('vk');
    });
    document.getElementsByClassName('fb-enter')[0].addEventListener('click', function() {
        avtSoc('fb');
    });
}