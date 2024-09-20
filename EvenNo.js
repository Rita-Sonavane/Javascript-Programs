// Print all the even numbers present in an array

let arr = [23,34,54,0,4,7];

let EvenNumbers= arr.filter((val)=>{
    if(val%2==0){
        return val;
    }
});

console.log(EvenNumbers);