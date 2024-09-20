 // remove whiteSpace

 function removeWhiteSpace(sentence){
    console.log(sentence);
      let news = sentence.split("");
      let newSen="";
      for(let i=0;i<=news.length-1;i++){
       if(news[i] !== " "){
         newSen=newSen+news[i];
       }
      }
    return newSen;
    }
      
   console.log(removeWhiteSpace("Hello, World!")); 
  