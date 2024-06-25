// sort elments in an array using bubblesort

let arr = [4,2,1,5,3];

 for(let i=0;i<=arr.length-1;i++){
    for(let j=0;j<=arr.length-1;j++){
        if(arr[j]>arr[j+1]){
            let temp=arr[j];
            arr[j]=arr[j+1];
            arr[j+1]=temp;
        }
    }
 }

 console.log(arr);