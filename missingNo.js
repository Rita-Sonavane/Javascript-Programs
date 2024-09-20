// Find out missing number in array.


// find out max, find out sum of array then find out the sum of 0 to max then substract it from sum of array.

function missing(arr){
    let max = Math.max(...arr)
    console.log("max",max);

    let sum = arr.reduce((val,val1,index)=>{
        return val + val1;
    });

    let indexsum=0;
    for(let i=1;i<= max;i++){
        indexsum = indexsum + i;
    }

    return  indexsum - sum;
}

 console.log(missing([1,2,5,3,6]));


// Using Summation Formula

let arr = [1, 2, 4, 5];
let n = arr.length + 1; // since one number is missing
let expectedSum = (n * (n + 1)) / 2;
let actualSum = arr.reduce((acc, val) => acc + val, 0);
let missingNumber = expectedSum - actualSum;

console.log(missingNumber); // 3