// Print only the last four elements of an array

//1. using the slice method

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let lastfourelemnts = arr.slice(-4);

console.log(lastfourelemnts);

//2. using the for loop
let lastFourEles = [];
for(let i=arr.length-4;i<=arr.length-1;i++){
    lastFourEles.push(arr[i]);
}
console.log(lastFourEles);


//3. using the splice method
let lastFourElements = arr.splice(-4, 4);
console.log(lastFourElements);
