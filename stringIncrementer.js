function pad(number, length, filler) {
    number = number + "";
    if (number.length < length) {
        for (var i = number.length; i < length; i += 1) {
            number = filler + number;
        }
    }

    return number;
}

function incrementString (input) {
    var orig = input.match(/\d+$/);
    if (orig.length === 1) {
        orig = pad(parseInt(orig[0]) + 1, orig[0].length, '0');
        input = input.replace(/\d+$/, orig);
        return input;
    }

    return input + "1";
}

console.log(incrementString('foobar0001'));