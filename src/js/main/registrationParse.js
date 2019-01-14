
if (document.getElementsByClassName('registration-body')[0] !== undefined) {
    var stringToParse = location.search;

    document.getElementsByClassName('master_name')[0].innerHTML = stringToParse.slice(stringToParse.indexOf('=') + 1, stringToParse.lastIndexOf('&'));
    document.getElementsByClassName('master_phone')[0].innerHTML = "+" + stringToParse.slice(stringToParse.indexOf('=', 4) + 1);

    var exitButton = document.getElementsByClassName('exit_button')[0];

    

    exitButton.addEventListener('click', function() {
        var newPath = '/Dezar/dist/index.html?id=clear';
        // if (prevLoc.includes('/index.html')) {
        //     prevLoc = prevLoc.replace('/index.html', newPath);
        // } else {
        //     prevLoc = prevLoc.substr(0, prevLoc.length - 1) + newPath;
        // }
        location.replace(newPath);
    });
}