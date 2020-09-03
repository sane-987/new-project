var fortuneCookies = [
    'heahnn',
    'ankc',
];

exports.getFortune = function() {
    var idx = Math.floor(Math.random() * fortuneCookies.length);
    return fortuneCookies[idx];
}