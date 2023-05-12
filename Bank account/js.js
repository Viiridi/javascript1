const Account = function(name, number, balance){
    this.name = name;
    this.number = number;
    this.balance = balance;

    this.deposit = function(amount){
        this.balance += amount
    }

    this.withdraw = function(amount){
        this.balance -= amount
    } 

    this.display = function(){
        console.log(this.name, this.number, this.balance);
    }
};

const a1 = new Account("A1", 47, 200)
const a2 = new Account("A2", 48, 200)
a1.display();
a2.display();
a1.deposit(100);
a2.deposit(100);
a1.display();
a2.display();
console.log(a1.constructor);

