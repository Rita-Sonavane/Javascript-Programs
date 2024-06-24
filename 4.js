// Print the maximum number present in an array

var arr = [23, 34, 54, 0, 4, 7];

var max = arr[0];

// 1. using for loop

for (let i = 0; i <= arr.length - 1; i++) {

    if (arr[i] > max) {
        max = arr[i];
    }
}

console.log(max);



//2. using reduce method
 
let output = arr.reduce((acc, cur) => {
    if ( cur > acc) {
        max = cur;
    }
    return max;
},arr[0]);

console.log(output);