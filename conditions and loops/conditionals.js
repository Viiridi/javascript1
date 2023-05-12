// 1. no branches
if (false) {
    console.log('code in if block executed');
}

// 2. one branch. if - else
if (false) {
    console.log("code in if block executed");
} else { //anything else at all - no condition
    console.log("code in else block executed");
}

// 3. many branches
if (false) {
    console.log("code in if block executed");
} else if (true) { //anything else at all - no condition
    console.log("code in fourth if block executed");
} else {
    console.log("Code in else block executed");
}

// 4. switch statements
// interchangeable with if - elses
// suit hardcoded data while if - selse suits ranges of things
// they test one value for equality 
// if vthere is a match, that "clause" gets run

let variable = 2;
switch(variable){
    case 1:
        console.log("you chose option 1");
        break;
    case 2:
        console.log("You chose option 2");
        break
    case 3:
        console.log("You chose option 3");
        break    
    default: //like else
        console.log("Choose a valid option 1-3");    
} //end of switch statement

// use of switch without a break statement results in
// each case below the match executing 

let mealDeal = 1;
switch(mealDeal){
    case 3:
        console.log("Drink");
    case 2:
        console.log("Fries");
    case 1:
        console.log("Burger");   
    default: //like else
        console.log("Thanks you");    
} //end of switch statement

// switch statement without break suited to additive logic
// where you want to cut down on duplicated code in the case statements

// ternary operator (three operands)

let loggedInComponent = '<p>Admin only</p>'
let loggedOutComponent = '<p>Guest</p>'
let isLoggedIn = true;

let display = (isLoggedIn)? loggedInComponent : loggedOutComponent;
console.log(display)