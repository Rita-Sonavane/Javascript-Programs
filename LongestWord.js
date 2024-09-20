//Find longest word from sentence

//1. using for loop

function findlongestword(str){
    let words=str.split(" ");

    let longestword="";

    for(let word of words){
       if(word.length > longestword.length){
        longestword = word;
       }
    }
    return longestword;
}

console.log(findlongestword("I love coding in javascript"));



// Using reduce()

function findLongestWord(str) {
    return str.split(" ").reduce((longest, current) => current.length > longest.length ? current : longest, "");
}

console.log(findLongestWord("I love coding in javascript"));



//2. Using map() and filter()

function findlongword(str){
    let words = str.split(" ");
    let maxLength = Math.max(...words.map(word => word.length));
    return words.filter(word => word.length === maxLength)[0];
}

console.log(findlongword("I love coding in javascript"));

