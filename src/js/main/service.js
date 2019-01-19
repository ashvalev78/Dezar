if (document.getElementsByClassName('services__body')[0] !== undefined) {

    var nm, tel;
    console.log(location.search === '');
    if (location.search !== '') {
        var url = location.search.split('=');
        nm = url[1].split('&')[0];
        tel = url[2];
        console.log(nm + tel);
    }


    $('.back_button').click(function() {
        location.replace('/Dezar/dist/registration.html');
    });

    var currPrice = 0;
    var summPrice = document.getElementsByClassName('footer__cost-price')[0];
    var summTime = document.getElementsByClassName('footer__cost-time')[0];

    function timeAddition() {
        var selectedElements = document.getElementsByClassName('selected');
        var minTime = 0, maxTime = 0;
        
        for (var i = 0; i < selectedElements.length; i++) {
            if (!selectedElements[i].classList.contains('master-item')) {

                var time = $(selectedElements[i]).find('.service_time').html();
                var parsedTime = time.split(" ")[0];
                parsedTime = parsedTime.split("-");

                // if time is defined in hours
                if (+parsedTime[0] < 10) {
                    minTime += +parsedTime[0] * 60;

                    if(parsedTime.length > 1) {
                        maxTime += +parsedTime[1] * 60;
                    } else {
                        maxTime += +parsedTime[0] * 60;
                    }

                // if time is defined in minutes
                } else {
                    minTime += +parsedTime[0];
                    if(parsedTime.length > 1) {
                        maxTime += +parsedTime[1];
                    } else {
                        maxTime += +parsedTime[0];
                    }
                }

                // outputting an answer
                if (maxTime === minTime) {
                    summTime.innerHTML = maxTime + ' минут';
                } else {
                    summTime.innerHTML = minTime + ' - ' + maxTime + ' минут';
                }
            }
        }

        // price addition part
        var maxPrice = 0, minPrice = 0;

        for (i = 0; i < selectedElements.length; i++) {
            if (!selectedElements[i].classList.contains('master-item')) {

                var price = $(selectedElements[i]).find('.service_price').html();
                var parsedPrice = price.split(" ")[0];
                parsedPrice = parsedPrice.split("-");

                minPrice += +parsedPrice[0];
                if(parsedPrice.length > 1) {
                    maxPrice += +parsedPrice[1];
                } else {
                    maxPrice += +parsedPrice[0];
                }

                // outputting an answer
                if (maxPrice === minPrice) {
                    summPrice.innerHTML = maxPrice + ' рублей';
                } else {
                    summPrice.innerHTML = minPrice + ' - ' + maxPrice + ' рублей';
                }
            }
        }

        if (selectedElements.length === 0) {
            summPrice.innerHTML = '0 рублей';
            summTime.innerHTML = '0 минут';
        }
    }

    //--------------------------------
    // slider and popup section

    var $sliderElements = $('.colorize-item');
    var $sliderServices = $('.slider_services');
    var $sliderWidth = $sliderServices.width();
    var $sliderHeight = $sliderServices.height();
    var $serviceDescription = $('.service_description');
    var $masterDescription = $('.master__description');


    var $colItem = $('.service_description');

    $colItem.click(function(e) {
        if ($(e.currentTarget).parent().hasClass('selected')) {
            $(e.currentTarget).parent().removeClass('selected');
        } else {
            // $('.colorize-item').removeClass('selected');
            $(e.currentTarget).parent().addClass('selected');
        }
        timeAddition();
    });

    var $popupButton = $('.service_wrapper');

    $popupButton.click(function(e) {
        var parent = $(e.currentTarget).parent();
        $('.popup__description-info').html(parent.find('.service__description-full').html());
        $('.popup__description-heading').html(parent.find('.service_name').html());
        
        $('.popup__description').toggleClass("visible_popup");
        $('.popup_blur').toggleClass('visible_popup');
        $('.wrapper_services').toggleClass('blur');
    });

    var $popupBackButton = $('.popup__description-back');

    $popupBackButton.click(function() {
        $('.popup__description').toggleClass("visible_popup");
        $('.popup_blur').toggleClass('visible_popup');
        $('.wrapper_services').toggleClass('blur');
    });

    var $careItem = $('.care_description');

    $careItem.click(function(e) {
        if ($(e.currentTarget).parent().hasClass('selected')) {
            $(e.currentTarget).parent().removeClass('selected');
        } else {
            // $('.care-item').removeClass('selected');
            $(e.currentTarget).parent().addClass('selected');
        }
        timeAddition();
    });

    var $haircutItem = $('.haircut_description');

    $haircutItem.click(function(e) {
        if ($(e.currentTarget).parent().hasClass('selected')) {
            $(e.currentTarget).parent().removeClass('selected');
        } else {
            $('.haircut-item').removeClass('selected');
            $(e.currentTarget).parent().addClass('selected');
        }
        timeAddition();
    });

    var $masterItem = $('.master__description');

    $masterItem.click(function(e) {
        if ($(e.currentTarget).parent().hasClass('selected')) {
            $(e.currentTarget).parent().removeClass('selected');
        } else {
            $('.master-item').removeClass('selected');
            $(e.currentTarget).parent().addClass('selected');
        }
    });

    var $masterPopupButton = $('.master_wrapper');

    $masterPopupButton.click(function(e) {
        $('.master__popup').toggleClass("visible_popup");
        $('.popup_blur').toggleClass('visible_popup');
        $('.wrapper_services').toggleClass('blur');
        $('.master__descr-name').html(masters[e.currentTarget.getAttribute('data-attr')].name);
        $('.master__photo').css('background', masters[e.currentTarget.getAttribute('data-attr')].img);
    });

    var $masterPopupBackButton = $('.master__popup-close-button');

    $masterPopupBackButton.click(function() {
        $('.master__popup').toggleClass("visible_popup");
        $('.popup_blur').toggleClass('visible_popup');
        $('.wrapper_services').toggleClass('blur');
    });

    var masters = {
        1: {
            name: "Наталия",
            img: "url(./svg/1x/Master-1-min.png)"
        },
        2: {
            name: 'Жаннет',
            img: "url(./svg/1x/Master-2-min.png)"
        },
        3: {
            name: 'Халида',
            img: "url(./svg/1x/Master-3-min.png)"
        },
        4: {
            name: 'Лера',
            img: "url(./svg/1x/Master-4-min.png)"
        }
    };

    $('#services-button-next').click(function(e) {
        e.preventDefault();

        var $mastersList = $('.master-item');
        var serv1 = '', serv2 = '', serv3 = '';

        // taking services lists to check which one has 'selected' class
        var services1 = $('.colorize-item');
        var services2 = $('.care-item');
        var services3 = $('.haircut-item');

        for (var i = 0; i < services1.length; i++) {
            if ($(services1[i]).hasClass('selected')) {
                serv1 = serv1 + i.toString() + ',';
            }
        }
        for (i = 0; i < services2.length; i++) {
            if ($(services2[i]).hasClass('selected')) {
                serv2 = serv2 + i.toString() + ',';
            }
        }
        for (i = 0; i < services3.length; i++) {
            if ($(services3[i]).hasClass('selected')) {
                serv3 = serv3 + i.toString() + ',';
            }
        }

        serv1 = 's1=' + serv1 + '&s2=' + serv2 + '&s3=' + serv3;
        var currPrice = $('.footer__cost-time').html();

        if (!$mastersList.hasClass('selected') || currPrice === '0 минут') {
            $('.popup__warning').toggleClass('visible_popup');
            $('.popup_blur').toggleClass('visible_popup');
            $('.wrapper_services').toggleClass('blur');
            e.preventDefault();
        } else {
            e.preventDefault();
            // var newPath = location.href + '&' + serv1 + '&sum=' + summPrice.innerHTML + '&time=' + summTime.innerHTML;
            // newPath = newPath.replace('/services.html', '/time.html');
            location.replace('/Dezar/dist/time.html');
        }
    });

    $('.popup__warning-back').click(function() {
        $('.popup__warning').toggleClass('visible_popup');
        $('.popup_blur').toggleClass('visible_popup');
        $('.wrapper_services').toggleClass('blur');
    })

    $('.slider-master').owlCarousel({
        rewind: false,
        slideBy: 1,
        nav: false,
        dots: false,
        autoWidth: true
    });

    $('.slider-haircut').owlCarousel({
        rewind: false,
        slideBy: 1,
        nav: false,
        dots: false,
        autoWidth: true
    });

    $('.slider-colorize').owlCarousel({
        rewind: false,
        slideBy: 1,
        nav: false,
        dots: false,
        autoWidth: true
    });

    $('.slider-care').owlCarousel({
        rewind: false,
        slideBy: 1,
        nav: false,
        dots: false,
        autoWidth: true
    });
}

var colorizeServices = {
    0: {
        name: 'Окрашивание в один тон на длинные волосы',
        price1: 7000,
        price2: 9000,
        time1: 120,
        time2: 0
    },
    1: {
        name: 'Окрашивание в один тон на средние волосы',
        price1: 6000,
        price2: 7000,
        time1: 120,
        time2: 0
    },
    2: {
        name: 'Окрашивание в один тон на короткие волосы',
        price1: 5000,
        price2: 6000,
        time1: 120,
        time2: 0
    },
    3: {
        name: 'Любое сложное окрашивание на длинные волосы',
        price1: 11000,
        price2: 13000,
        time1: 240,
        time2: 300
    },
    4: {
        name: 'Любое сложное окрашивание на средние волосы',
        price1: 9000,
        price2: 11000,
        time1: 240,
        time2: 300
    },
    5: {
        name: 'Любое сложное окрашивание на короткие волосы',
        price1: 7000,
        price2: 9000,
        time1: 240,
        time2: 300
    },
    6: {
        name: 'Сложное окрашивание на длинные волосы техника SURFBLOND',
        price1: 11000,
        price2: 13000,
        time1: 240,
        time2: 300
    },
    7: {
        name: 'Сложное окрашивание на средние волосы техника SURFBLOND',
        price1: 9000,
        price2: 11000,
        time1: 240,
        time2: 300
    },
    8: {
        name: 'Сложное окрашивание на короткие волосы техника SURFBLOND',
        price1: 7000,
        price2: 9000,
        time1: 240,
        time2: 300
    },
    9: {
        name: 'Сложное окрашивание на длинные волосы техника AIRTOUCH',
        price1: 11000,
        price2: 13000,
        time1: 240,
        time2: 300
    },
    10: {
        name: 'Сложное окрашивание на средние волосы техника AIRTOUCH',
        price1: 9000,
        price2: 11000,
        time1: 240,
        time2: 300
    },
    11: {
        name: 'Сложное окрашивание на короткие волосы техника AIRTOUCH',
        price1: 7000,
        price2: 9000,
        time1: 240,
        time2: 300
    },
    12: {
        name: 'Сложное окрашивание на длинные волосы техника SHATUSH',
        price1: 11000,
        price2: 13000,
        time1: 240,
        time2: 300
    },
    13: {
        name: 'Сложное окрашивание на средние волосы техника SHATUSH',
        price1: 9000,
        price2: 11000,
        time1: 240,
        time2: 300
    },
    14: {
        name: 'Сложное окрашивание на короткие волосы техника SHATUSH',
        price1: 7000,
        price2: 9000,
        time1: 240,
        time2: 300
    },
    15: {
        name: 'Блондирование на короткие волосы (тотальный блонд)',
        price1: 7000,
        price2: 9000,
        time1: 240,
        time2: 300
    },
    16: {
        name: 'Блондирование на средние волосы (тотальный блонд)',
        price1: 9000,
        price2: 11000,
        time1: 240,
        time2: 300
    },
    17: {
        name: 'Блондирование на длинные волосы (тотальный блонд)',
        price1: 11000,
        price2: 13000,
        time1: 240,
        time2: 300
    },
    18: {
        name: 'Сложное окрашивание на короткие волосы техника BALAYAGE(балаяж)',
        price1: 7000,
        price2: 9000,
        time1: 240,
        time2: 300
    },
    19: {
        name: 'Сложное окрашивание на средние волосы техника BALAYAGE(балаяж)',
        price1: 9000,
        price2: 11000,
        time1: 240,
        time2: 300
    },
    20: {
        name: 'Сложное окрашивание на длинные волосы техника BALAYAGE(балаяж)',
        price1: 11000,
        price2: 13000,
        time1: 240,
        time2: 300
    },
    21: {
        name: 'Сложное окрашивание на короткие волосы техника BABYLIGHTS (Бейбиблонд)',
        price1: 7000,
        price2: 9000,
        time1: 240,
        time2: 300
    },
    22: {
        name: 'Сложное окрашивание на средние волосы техника BABYLIGHTS (Бейбиблонд)',
        price1: 9000,
        price2: 11000,
        time1: 240,
        time2: 300
    },
    23: {
        name: 'Сложное окрашивание на длинные волосы техника BABYLIGHTS (Бейбиблонд)',
        price1: 11000,
        price2: 13000,
        time1: 240,
        time2: 300
    },
    24: {
        name: 'Сложное окрашивание на короткие волосы техника OMBRE',
        price1: 7000,
        price2: 9000,
        time1: 240,
        time2: 300
    },
    25: {
        name: 'Сложное окрашивание на средние волосы техника OMBRE',
        price1: 9000,
        price2: 11000,
        time1: 240,
        time2: 300
    },
    26: {
        name: 'Сложное окрашивание на длинные волосы техника OMBRE',
        price1: 11000,
        price2: 13000,
        time1: 240,
        time2: 300
    },
    27: {
        name: 'Окрашивание корней с тонированием длины на длинные волосы',
        price1: 7500,
        price2: 8500,
        time1: 120,
        time2: 0
    },
    28: {
        name: 'Окрашивание корней с тонированием длины на средние волосы',
        price1: 6000,
        price2: 7000,
        time1: 120,
        time2: 0
    },
    29: {
        name: 'Окрашивание корней с тонированием длины на короткие волосы',
        price1: 4500,
        price2: 5500,
        time1: 120,
        time2: 0
    },
    30: {
        name: 'Окрашивание корней с тонированием длины на длинные волосы',
        price1: 7500,
        price2: 8500,
        time1: 120,
        time2: 0
    },
    31: {
        name: 'Окрашивание корней с тонированием длины на средние волосы',
        price1: 6000,
        price2: 7000,
        time1: 120,
        time2: 0
    },
    32: {
        name: 'Окрашивание корней с тонированием длины на короткие волосы',
        price1: 4500,
        price2: 5500,
        time1: 120,
        time2: 0
    },
};