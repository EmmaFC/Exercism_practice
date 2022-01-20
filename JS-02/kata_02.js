
let phrase = `"That's the password: 'PASSWORD 123'!", cried the Special Agent.\nSo I fled.`

function countWords (str){
    let words = str.split(' ').join().split(/[.*+?!¡"^${}()|[\]\\]/gi);
    let other =words
   /*  words.forEach((word) =>{
       let eachWord = RegExp(word)
    }) */
    console.log(other);
  /*   let resultStr = words.unique();
    console.log(resultStr.length) */
    /* 
    let resultStr = RegExp(str);
    console.log(resultStr); */


} 
countWords (phrase)