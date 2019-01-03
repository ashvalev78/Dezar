$('.datepicker__dates-date').click(function(e) {
    $(e.currentTarget).toggleClass('selected-date');
});

$('.timepicker__block-time').click(function(e) {
    $(e.currentTarget).toggleClass('selected-time-visible');
});