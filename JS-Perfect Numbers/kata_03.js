


function getDividers(number) {

    
}

export function numberClassiffy (number) {

    let dividers = [];
    let sumOfDividers = 0;

    for (let i = 0; i < number; i++) {
        if (number % i == 0){
            dividers.push (i);
        }
    }

    for (let i = 0; i < dividers.length; i++) {
        sumOfDividers += dividers[i];
    }

    if (number <= 0) {
        console.log (number + ' is a not a natural number.');
        return number +  ' is a not a natural number.'
        // throw new Error('Classification is only possible for natural numbers.')
      }

    else {
        if (sumOfDividers == number) {
            console.log (number + ' is a perfect number.');
            return number + ' is a perfect number.'
        }

        if (sumOfDividers > number) {
            console.log (number + ' is an abundant number.');
            return number + ' is an abundant number.'
        }

        if (sumOfDividers < number) {
            console.log (number + ' is a deficient number.');
            return number + ' is a deficient number.'
        }
    }
}

