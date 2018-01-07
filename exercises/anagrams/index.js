// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {

    const cleanString = str => str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join();

    return cleanString(stringA) === cleanString(stringB);
}


function anagrams2(stringA, stringB) {

    const createCharMap = str => {
        const charMap = {};
        const cleanStr = str.replace(/[^\w]/g, '').toLowerCase();
        for (let char of cleanStr) {
            charMap[char] = charMap[char] + 1 || 1;
        }
        return charMap;
    };

    const mapA = createCharMap(stringA);
    const mapB = createCharMap(stringB);

    if (Object.keys(mapA).length !== Object.keys(mapB).length) {
        return false;
    } else {
        for (let key in mapA) {
            if (mapA[key] !== mapB[key]) {
                return false;
            }
        }
        return true;
    }

}

module.exports = anagrams;