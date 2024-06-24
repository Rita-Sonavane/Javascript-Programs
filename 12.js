// anagram

function anagram(str1,str2){
 
    // sort both
    
    let sort1 = str1.split("").sort().join("");
    let sort2 = str2.split("").sort().join("");
    
   return sort1 == sort2;
  
  }

  console.log(anagram("mom","mom"));