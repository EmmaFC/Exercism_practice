import {BankAccount} from './JS-Bank Account/kata_01.js';
/* import {countWords} from './JS-Bank Account/kata_02.js';*/
import {numberClassiffy} from './JS-Perfect Numbers/kata_03.js'; 

function app () {

    /////////////// KATA 01
    let acount_01 = new BankAccount;
    acount_01.open();
    acount_01.deposit(200);
    acount_01.withdraw(50);
    console.log('The current account balance is: ' + acount_01.balance);
    /////////////// KATA 02

    /////////////// KATA 03
    numberClassiffy(0);
    numberClassiffy(6);
    numberClassiffy(12);
    numberClassiffy(8);
}

app ()