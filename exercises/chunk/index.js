// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    const result = [];
    let index = 0;
    
    while (index < array.length) {
        result.push(array.slice(index, index + size));
        index += size;
    }
    return result;
}

function chunkModifiesInput(array, size) {
    const result = [];
    while (array.length > 0) {
        result.push(array.splice(0, size));
    }
    return result;
}

function chunk2(array, size) {
    const result = [];

    for (let element of array) {
        const lastElement = result[result.length - 1];
        if (!lastElement || lastElement.length === size) {
            result.push([element]);
        } else {
            lastElement.push(element);
        }
    }
    return result;
}

chunk([1, 2, 3, 4, 5, 6, 7], 2)

module.exports = chunk;