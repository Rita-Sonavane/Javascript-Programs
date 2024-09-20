// reverse string


//1. using for loop

function reverse(str){
    let rev="";
    for(let i=str.length-1;i>=0;i--){
        rev = rev + str[i];
    }
    return rev;
}

console.log(reverse("Hello World"));



// Using a for...of loop
function reverse(str) {
    let rev = "";
    for (let char of str) {
        rev = char + rev;
    }
    return rev;
}

console.log(reverse("Hello World"));



// using reverse() split() join()
let str="Hello World";

let reverseString = str.split("").reverse().join("");

console.log("reverse string is: ",reverseString);



// Using reduce()

function reversestring(str) {
    return str.split('').reduce((rev, char) => char + rev,'');
}

console.log(reversestring("Hello World")); 




//  Using spread operator

function reverse(str) {
    return [...str].reverse().join('');
}

console.log(reverse("Hello World"));