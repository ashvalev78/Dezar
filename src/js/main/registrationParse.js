
if (document.getElementsByClassName('registration-body')[0] !== undefined) {
    var stringToParse = location.search;
    stringToParse = decodeURI(stringToParse);
    // stringToParse = Utf8.decode(stringToParse);
    document.getElementsByClassName('master_name')[0].innerHTML = stringToParse.slice(stringToParse.indexOf('=') + 1, stringToParse.lastIndexOf('&'));
    document.getElementsByClassName('master_phone')[0].innerHTML = "+" + stringToParse.slice(stringToParse.indexOf('=', 4) + 1);

    var exitButton = document.getElementsByClassName('exit_button')[0];

    

    exitButton.addEventListener('click', function() {
        var newPath = '/Dezar/dist/index.html?id=clear';
        location.replace(newPath);
    });
}