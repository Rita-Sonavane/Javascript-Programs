// Print the sum of all numbers present in an array

let arr = [23, 34, 54, 0, 4, 7];

let sum = 0;


// 1. using for loop

for (let i = 0; i <= arr.length - 1; i++) {
    sum += arr[i];
}

console.log(sum);



//2. using reduce method

let output = arr.reduce((acc, cur) => {
    acc += cur;
    return acc;
}, 0);

console.log(output);


//3. Also write this using reduce 

function sumofArray(arr) {


    let sum = arr.reduce((val, val1, index) => {
        return val + val1;
    });

    return sum;

}

console.log(sumofArray([1, 2, 3, 4, 5, 6]));



//4. sum of all array by recursion 

function sumofArray1(arr) {

    if (arr.length < 1) {
        return 0;
    }

    let sum = arr.pop() + sumofArray1(arr);
    console.log("check",sum);
    return sum;
}

console.log(sumofArray1([1, 2, 3, 4, 5, 6])); 