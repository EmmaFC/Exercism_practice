import {BankAccount} from './JS-Bank Account/kata_01.js';
import {countWords} from './JS-Word Count/kata_02.js';
import {numberClassiffy} from './JS-Perfect Numbers/kata_03.js'; 
import {transpose} from './JS-Transpose/kata_04.js'; 


function app () {

    /////////////// KATA 01
    let acount_01 = new BankAccount;
    acount_01.open();
    acount_01.deposit(200);
    acount_01.withdraw(50);
    console.log('The current account balance is: ' + acount_01.balance);
    /////////////// KATA 02
    let phrase = `"That's the password: 'PASSWORD 123'!", cried the Special Agent.\nSo I fled.`
    countWords(phrase)
    /////////////// KATA 03
    numberClassiffy(0);
    numberClassiffy(6);
    numberClassiffy(12);
    numberClassiffy(8);
    /////////////// KATA 04
    const arr = ['A', '1']
    transpose (arr)
}

app ()