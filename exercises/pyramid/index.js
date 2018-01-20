// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 0, level = '') {
    if (row === n) {
        return;
    }
    const pyramidLength = 2 * n - 1;
    if (level.length === pyramidLength) {
        console.log(level);
        return pyramid(n, row + 1);
    }
    let char = '';
    const midPoint = Math.floor(pyramidLength / 2);
    if (midPoint - row <= level.length && midPoint + row >= level.length) {
        char = '#';
    } else {
        char = ' ';
    }
    pyramid(n, row, level + char);
}

function pyramid2(n) {
    const pyramidLength = (2 * n) - 1;
    const midPoint = Math.floor(pyramidLength / 2);

    for (let row = 0; row < n; row++) {
        let level = '';
        for (let column = 0; column < pyramidLength; column++) {
            if (midPoint - row <= column && midPoint + row >= column) {
                level += '#';
            } else {
                level += ' ';
            }
        }
        console.log(level);
    }
}

module.exports = pyramid;