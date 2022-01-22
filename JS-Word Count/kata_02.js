export function countWords (str) {

    console.log(str);
    let x = str.toLowerCase()
    let RegExp = /[^'0123456789abcdefghijklmnñopqrstuvwxyz]/gi;
    let whiteSpace = /\s\s+/g;
    let strArray = x.split(RegExp).join(' ').trim().replace(whiteSpace,' ').split(' ');
    console.log(strArray);

let matchArray = [];
let copyArray = strArray
let countSame =0
let countOther = 0
    strArray.forEach((word)=>{

      for (let i = 0; i<strArray.length; i++){

        copyArray.forEach((otherWord)=>{

          if(otherWord === word){
            if(matchArray.includes(otherWord)){
              console.log(word+'····'+otherWord)
              console.log(true)
/*               return countSame +1
 */            }
            matchArray.push(otherWord)
            console.log(word+'····'+otherWord)
            console.log(true)
            /* return countSame +1 */
          }
      /*     else {
            console.log(word+'----'+otherWord)
            console.log(false)
            return countOther +1
          } */
        
      })

      
    }

  })

    console.log(matchArray)

} 
