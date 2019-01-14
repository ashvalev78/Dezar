
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
        var log, pass, againPass, rulesChecked, processChecked;
        log = document.getElementsByName('login')[0].value;
        pass = document.getElementsByName('password')[0].value;
        againPass = document.getElementsByName('again_password')[0].value;
        rulesChecked = document.getElementsByName('rules-agreement')[0].checked;
        processChecked = document.getElementsByName('process-agreement')[0].checked;

        if (fio.length > 0 && phone.length > 0 && log.length > 0 
            && pass.length > 0 && againPass.length > 0 && rulesChecked && processChecked) {
            if (phone.indexOf('+') == 0) {
                phone = phone.slice(1);
            }
            var prevLoc = location.pathname;
            var newPath = '/registration.html?nm=' + fio + '&tel=' + phone;
            if (prevLoc.includes('/index.html')) {
                prevLoc = prevLoc.replace('/index.html', newPath);
            } else {
                prevLoc = prevLoc.substr(0, prevLoc.length - 1) + newPath;
            }
            prevLoc = encodeURI(prevLoc);
            location.replace(prevLoc);
        } else {
            document.getElementsByClassName('warning-popup')[0].style.display = 'flex';
            document.getElementsByClassName('background_dimmer')[0].style.display = 'flex';
        }
    });

    var entrBtn = document.getElementsByClassName('enter-btn')[0];

    entrBtn.addEventListener('click', function(e) {
        e.preventDefault();
        var log = document.getElementsByName('main-login')[0].value;
        var pas = document.getElementsByName('main-password')[0].value;

        if (log.length > 0 && pas.length > 0) {
            var prevLoc = location.pathname;
            var newPath = '/registration.html';
            if (prevLoc.includes('/index.html')) {
                // if (log == '1111' && pas == '1111') {
                //     var index = prevLoc.indexOf('/index.html');
                //     var subStr = prevLoc.slice(index);
                //     prevLoc = prevLoc.replace(subStr, '/registration.html?nm=test&tel=79991234567');
                //     location.replace(prevLoc);
                // }
                prevLoc = prevLoc.replace('/index.html', newPath);
            } else {
                // if (log == '1111' && pas == '1111') {
                //     index = prevLoc.indexOf('/');
                //     subStr = prevLoc.slice(index);
                //     prevLoc = prevLoc.replace(subStr, '/registration.html?nm=test&tel=79991234567');
                //     location.replace(prevLoc);
                // }
                prevLoc = prevLoc.substr(0, prevLoc.length - 1) + newPath;
            }
            location.replace(prevLoc);
        } else {
            document.getElementsByClassName('warning-popup')[0].style.display = 'flex';
            document.getElementsByClassName('background_dimmer')[0].style.display = 'flex';
        }
        
        if (log === '1111' && pas === '1111') {
            location.replace('/Dezar/dist/registration.html?nm=test&tel=79991234567');
        }
    });

    var cancelPopup = document.getElementsByClassName('warning-cancel')[0];
    cancelPopup.addEventListener('click', function() {
        document.getElementsByClassName('warning-popup')[0].style.display = 'none';
        document.getElementsByClassName('background_dimmer')[0].style.display = 'none';
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