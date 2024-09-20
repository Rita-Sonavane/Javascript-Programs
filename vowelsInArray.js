// return number of vowels in string

function findVowels(str) {

    let vowel = ["a", "e", "i", "o", "u"];

    let count = 0;

    for (let char of str.toLowerCase()) {

        //check wether char includes vowel
        if (vowel.includes(char)) {
            count++;
        }
    }

    return count;
}


console.log(findVowels("Hello, World!"));