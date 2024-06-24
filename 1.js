// Find length of an array without using length function


//1. Using a for loop
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let count=0;
for(let i=0;arr[i] !== undefined;i++){
    count++;
};
console.log(count);


//2. Using for...of loop

let count1 = 0;
for(let elements of arr){
    count1++;
}

console.log(count1);


//3. Using reduce method

let lengthofarray =  arr.reduce(acc => acc + 1, 0);

console.log(lengthofarray);


//4. Using map method


let count2 = 0;

arr.map(() => {
    count2++;
});

console.log(count2); 


//5. Using recursion

function findArrLength(array,index = 0){
    if (array[index] === undefined) {
        return index;
    }

    return findArrLength(array, index + 1);
};

let count3 = findArrLength(arr);

console.log(count3);





