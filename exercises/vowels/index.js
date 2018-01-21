// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0


function vowels3(str, count = 0){
    const vow = ['a', 'e', 'i', 'o', 'u'];
    if(str.length === 0){
        return count;
    }    
    if(vow.includes(str[0].toLowerCase())){
        return vowels(str.substring(1), count + 1);
    }else{
        return vowels(str.substring(1), count);
    }
}

function vowels(str){
    const matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
}

function vowels2(str) {
    const vow = ['a', 'e', 'i', 'o', 'u'];
    return str.split('').reduce((acc, letter) => {
        if (vow.includes(letter.toLowerCase())) {
            return acc + 1;
        }
        return acc;
    }, 0);
}

//const a = vowels("hola");

module.exports = vowels;