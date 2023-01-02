const palindromes = function (str) {
let re = /[^A-Za-z0–9]/g;
let lowRegStr = str.toLowerCase().replace(re,"");
let reverseStr = lowRegStr.split("").reverse().join('');

if(lowRegStr === reverseStr){
    return true;
} else {
    return false;
}
};
palindromes("A man, A plan, A Canal. Panama")



// Do not edit below this line
module.exports = palindromes;
