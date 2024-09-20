// //Remove duplicate elements from array

// let arr = [1, 2, 8, 2, 9, 8];

// let duplicateEle = []

// let FindDuplicate = arr.filter((val, index, arr) => {

//     if (arr.indexOf(val) != index) {
//         duplicateEle.push(val);
//     }
   
// });

// console.log(duplicateEle);


//  //check if it already present or not (if it is not present it will return -1)

//  let uniqueElements=[];

//  let removeDuplicate = arr.filter((val, index, arr) => {

//     if (uniqueElements.indexOf(val) === -1) {
//          uniqueElements.push(val);
//     }
    
// });

// console.log(uniqueElements);





// Duplicate elements in an array

// easy solution where every i vale check with other elements

let stringarr =["java","c","c++","python","java"];

    for(let i=0;i<=stringarr.length-1;i++){
        for(let j=i+1;j<=stringarr.length-1;j++){
            // i value check with remaining values
            if(stringarr[i]===stringarr[j]){
                console.log("Found Duplicate Elements:",stringarr[i]);
            }
        }
    }