export function countWords (str) {
 
    let strLowerCase = str.toLowerCase()
    let RegExp = /[^'0123456789abcdefghijklmnñopqrstuvwxyz]/gi;
    let whiteSpace = /\s\s+/g;
    let strArray = strLowerCase.split(RegExp).join(' ').trim().replace(whiteSpace,' ').split(' ');

    for(let i  = 0; i<strArray.length; i ++){
      
      if(strArray[i].charAt(0) == "'"){
        let aa = strArray[i].substring(1);
        strArray.splice(i,1, aa)
      }

      if(strArray[i].charAt(strArray[i].length - 1) == "'"){
        let bb = strArray[i].slice(0, -1)
        strArray.splice(i,1, bb)
      }
    }
    let originalArray = strArray
    console.log(strArray);

  let matchArray = [];
 /*  let copyArray = strArray;
  let counter = 0; */
    /* strArray.forEach((word)=>{

      for (let i = 1; i<copyArray.length; i++){

        let otherWord = copyArray[i]
         
          if(otherWord == word){

            if(matchArray.includes(otherWord) === true){
              console.log(word + '1')
              console.log(otherWord + '1' + word)
               matchArray.push(' ')
              
              console.log(word+'····'+otherWord) 
              console.log('*')
               return counter ++ 
              
         }
                else { 
                  console.log(word+ '2')
                  console.log(otherWord+ '2' + word)
                console.log(false) 
                  matchArray.push(otherWord)
                  return counter ++
                }
          
        }
      
    }
    
  }) */
 /*  console.log(counter) */
/* let finalArray = []
  for(let i  = 0; i<matchArray.length; i ++){
      
    if(matchArray[i] != " "){
      finalArray.push(matchArray[i])
    }

  } */
/*   let lonw3g = originalArray.length
 *//*   console.log(counter) */
/*    let difference = lonw3g - counter
 *//*    console.log(difference)
 */
/*    console.log(lonw3g)
    console.log(finalArray)
    console.log(lonw3g + difference) */
 
 let stringx = [] 
    let stringy = [] 
    let cmc = 0
     for(let i = 0; i <strArray.length; i++){
      function sameWord(word) {
         return word == strArray[i];
      }
      let filtered = strArray.filter(sameWord);
      stringx.push(filtered.length)
     if(filtered.length==1){
      stringy.push(strArray[i])
     }
     if(filtered.length>1){
      stringy.push(strArray[i])
      if(strArray.includes(strArray[i]) === true){
      stringy.splice(strArray[i], 1)
      cmc +1
      }
     }
     } 
     console.log(stringx)
     console.log(stringy)
     console.log(strArray)

     let string2 =[]
     let string3 =[]
     let string4 =[]
     for(let e = 0; e < strArray.length; e++){
      let words2 = strArray[e]
     for(let i = 0; i < strArray.length; i++){
            
      let word = strArray[i]

      if(words2 === word){
        if (string2.includes(words2) == false){
        string2.push(words2)    
      }
      if (string2.includes(words2) == true){
        string3.push(words2)    
      }
     if (strArray.includes(words2) == true){
        string4.push(words2)    
      }
       
     
      }
/* for (let index = 0; index < strArray.length; index++) {

  let cuadn = strArray.filter(find(strArray[index]))
  console.log(cuadn)
  
} */
     
for(let i = 0; i <strArray.length; i++){
  let rwr =  strArray[i]
  function same2Word(word) {
     return word ==rwr;
  }
  
  let filtere2 = strArray.filter(same2Word);
  if(filtere2.length == 1){
    console.log(word + filtere2.length)
    
  }
     
}

      
}
}

     
     console.log(string2)
     console.log(string3)
     console.log(string4)
    /*  console.log(cmc) */
    stringx.forEach((ind)=>{
  
      let ogfjrweg = string2.reduce((a,f ) => ({ ...a, [f]:ind}), {})  
      console.log(ogfjrweg)
    })
     
    
// { a: "a", b: "b", c: "c" }

} 
