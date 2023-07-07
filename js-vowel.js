// Write a function in javascript called "countVowels" that takes a string as input and returns the number of vowels (a, e, i, o, u) in the string.
// The function should be case-insensitive, meaning it should count both uppercase and lowercase vowels.
function countVowels(str){
    str = str.toLowerCase();
    let vowels = ['a','e','i','o','u'];
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if(vowels.includes(str[i])){
            count++
        }
    }
    return count;
}

const inputStr = 'A Quick Brown Fox';
const result = countVowels(inputStr);
console.log(result);


