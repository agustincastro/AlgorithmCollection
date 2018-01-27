// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {

    const initMatrix = (size) => {
        var arr = new Array(size);
        for (var i = 0; i < size; i++) {
            arr[i] = new Array(size);
        }
        return arr;
    }

    const spiral = initMatrix(n);
    let left = 0,
        right = n - 1,
        top = 0,
        bottom = n - 1,
        counter = 1;

    while (top <= bottom && left <= right) {
        // right ->
        for (let i = left; i <= right; i++) {
            spiral[top][i] = counter;
            counter++;
        }
        top++;
        // Down |
        for (let i = top; i <= bottom; i++) {
            spiral[i][right] = counter;
            counter++;
        }
        right--;
        // Left <-
        for (let i = right; i >= left; i--) {
            spiral[bottom][i] = counter;
            counter++;
        }
        bottom--;
        // Up |
        for (let i = bottom; i >= top; i--) {
            spiral[i][left] = counter;
            counter++;
        }
        left++;
    }
    return spiral;
}

module.exports = matrix;