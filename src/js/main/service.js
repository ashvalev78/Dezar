if (document.getElementsByClassName('services__body')[0] !== undefined) {

    function timeAddition() {
        var selectedElements = document.getElementsByClassName('selected');
        var summTime = document.getElementsByClassName('footer__cost-time')[0];
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
        var summPrice = document.getElementsByClassName('footer__cost-price')[0];
        var minPrice = 0, maxPrice = 0;

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
            $('.colorize-item').removeClass('selected');
            $(e.currentTarget).parent().addClass('selected');
        }
        timeAddition();
    });

    var $popupButton = $('.service_wrapper');

    $popupButton.click(function(e) {
        var parent = $(e.currentTarget).parent();
        if (parent.attr('class') === 'care-item') {
            console.log("OK");
            $('.popup__description-info').html(parent.find('.care_description').find('.service__description-full').html());
            $('.popup__description-heading').html(parent.find('.care_description').find('.service__description-small').find('.service_name').html());
        }
        console.log(parent);
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
            $('.care-item').removeClass('selected');
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