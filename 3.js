
// Print the minimum number present in an array

let arr = [23, 34, 54, 4, 7];

let min = arr[0];


// 1. using for loop

for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] < min) {
        min = arr[i];
    }
}

console.log(min);


//2. using reduce method
 
let output = arr.reduce((acc, cur) => {
    if ( cur < acc) {
        min = cur;
    }
    return min;
},arr[0]);

console.log(output);


