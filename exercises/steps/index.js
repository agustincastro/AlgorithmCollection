// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
    for (let i = 1; i <= n; i++) {
        let step = '#'.repeat(i) + ' '.repeat(n - i);
        console.log(step);
    }
}

function steps2(n, row = 0, stair = '') {
    if (n === row) {
        return;
    }
    if (stair.length === n) {
        console.log(stair);
        return steps(n, row + 1);
    }
    const add = stair.length <= row ? "#" : " ";
    steps(n, row, stair + add);
}

function steps3(n) {
    for (let row = 1; row <= n; row++) {
        let step = ''
        for (let col = 1; col <= n; col++) {
            if (col <= row) {
                step += "#";
            } else {
                step += " ";
            }
        }
        console.log(step);
    }
}


module.exports = steps;