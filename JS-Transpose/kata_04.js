export const transpose = (arr) => {
    let new_matrix = [];
    console.log(arr)
 
    if(arr.length = 1){
    arr.forEach((item)=>{
        let newArray = Array.from(item)
        for(let i=0; i<newArray.length; i++){
            let character = newArray[i]
            new_matrix.push(character) 
       }
     })
    }

    if(arr.length > 1){

    arr.forEach((item)=>{

       let newArray = Array.from(item)


       for(let i=0; i<newArray.length; i++){

           let character = newArray[i]
           console.log(character)

           if( new_matrix[i] != undefined){
           new_matrix[i] = new_matrix[i] + character
           return new_matrix

            }else{
                new_matrix[i] = character
                return new_matrix

            }
        }
        
        
          
    })
}
    console.log(new_matrix)
    return new_matrix
    
};
  