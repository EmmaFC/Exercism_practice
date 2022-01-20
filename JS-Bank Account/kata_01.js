
export class BankAccount {

    state;
    #balance;

    constructor() {
      this.#balance;
      this.state;
    }
   
    open() {

       if(this.state === true){
        return 'Error'
        //  throw new ValueError();
       }    
       this.state = true;
       return this.#balance = 0;
    }

    close() {

       if(this.state != true){
        return 'Error'
        //  throw new ValueError();
       }    
       this.state = false;
       return 'Error'
       //  throw new ValueError();
    }
   
    deposit(money) {
   
       if(this.state === true && money > 0){
          return this.#balance = this.balance + money;
       }
       return 'Error'
       //  throw new ValueError();
    }
   
    withdraw(money) {
   
       if(this.state === true && this.#balance >= money && money > 0){
          return this.#balance = this.#balance - money
       } 
       return 'Error'
       //  throw new ValueError();
    }
   
    get balance() {

       if(this.state === true){
          return this.#balance;
       } 
       return 'Error'
       //  throw new ValueError();
    }
      
}
   
// export class ValueError /*  extends Error  */{

//     constructor() {
//       super('Bank account error');
//     }
// }
