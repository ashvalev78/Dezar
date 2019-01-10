
if (document.getElementsByName('registration-body')[0] !== undefined) {
    var stringToParse = location.search;

    console.log(document.getElementsByClassName('master_name')[0]);
    document.getElementsByClassName('master_name')[0].innerHTML = stringToParse.slice(stringToParse.indexOf('=') + 1, stringToParse.lastIndexOf('&'));
    document.getElementsByClassName('master_phone')[0].innerHTML = "+" + stringToParse.slice(stringToParse.indexOf('=', 4) + 1);
}