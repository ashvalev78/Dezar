$('.datepicker__dates-date').click(function(e) {
    $(e.currentTarget).toggleClass('selected-date');
});

var date = new Date();

var months = {
    0: 'Январь',
    1: 'Февраль',
    2: 'Март',
    3: 'Апрель',
    4: 'Май',
    5: 'Июнь',
    6: 'Июль',
    7: 'Август',
    8: 'Сентябрь',
    9: 'Октябрь',
    10: 'Ноябрь',
    11: 'Декабрь'
};

var $timePickers = $('.timepicker__block-time');

$('.datepicker__block-switcher-month').html(months[date.getMonth()] + ' ' + date.getFullYear());

$timePickers.click(function(e) {
    if ($(e.currentTarget).hasClass('selected-time-visible')) {
        $timePickers.removeClass('selected-time-visible');
    } else {
        $timePickers.removeClass('selected-time-visible');
        $(e.currentTarget).toggleClass('selected-time-visible');
    }
});

var uri = decodeURI(location.search);

$('#time-cost').html(uri.slice(uri.indexOf('sum=') + 4, uri.indexOf('&', uri.indexOf('sum='))));
if (uri[uri.length] === '&') {
    $('#time-time').html(uri.slice(uri.indexOf('time=') + 5, uri.indexOf('&', uri.indexOf('time='))));
} else {
    $('#time-time').html(uri.slice(uri.indexOf('time=') + 5));
}

$('#time-footer-next').click(function(e) {
    e.preventDefault();
    if ($timePickers.hasClass('selected-time-visible')) {
        if (uri.indexOf('&t=') === -1) {
            location.replace(location.href.replace('/time.html', '/finish.html') + '&t=' + $($('.selected-time-visible').children()[0]).html());
        } else {
            location.replace(location.href.slice(0, uri.indexOf('&t=')).replace('/time.html', '/finish.html') + '&t=' + $($('.selected-time-visible').children()[0]).html());
        }
    }
});