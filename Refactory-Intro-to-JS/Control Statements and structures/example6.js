//Control Statements and Structures

function checkNum (num1){
    if(num1===10){
        console.log("Number is " + num1);
    }
}

checkNum(10);
checkNum(7);

//Conditions are the best way to let the computer imagine by using control statements
//Parameterised function is a function that takes on a parameter

let a;
let b;
let d;
let c = a+b;
console.log (c);

//Functions that check for odd numbers

function oddNum(num5){
    if ((num5 % 2) !== 0){
        console.log( num5 +" " +"is an odd number");
    }
}
oddNum(7);

function evenNum(num5){
    if ((num5 % 2) == 0){
        console.log( num5 +" " +"is an even number");
    }
}
evenNum(10);

//if else statements
function checkNumType(num){
    if(num%2 !=0){
        console.log(num+ " " + "is an odd number");
    }
    else{
        console.log(num + " "+ "is an even number");
    }
}

checkNumType(20);

checkNumType(43);