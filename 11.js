
//find out palindrome or not

function palindrome(str) {
    return str === str.split("").reverse().join("");
}

console.log(palindrome("MOM"));