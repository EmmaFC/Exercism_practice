import {BankAccount} from './JS-Bank Account/kata_01.js';
/* import { } from './JS-Bank Account/kata_02.js';
import { } from './JS-Bank Account/kata_03.js'; */

function app (){

    let acount_01 = new BankAccount;
    acount_01.open();
    acount_01.deposit(200);
    acount_01.withdraw(50);
    console.log('The current account balance is: ' + acount_01.balance);
}
app ()