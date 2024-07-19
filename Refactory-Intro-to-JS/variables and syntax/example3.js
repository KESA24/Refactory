//Mathematical operators +,-,=,/,*,<,>,(),
const num1=10, num2=30;
let ans = (num1+num2);
let ans2 = (ans*num1);
//Logical  operators
let ans3 = ans&&ans2; //and operators, returns/stores the second value
let ans4 = ans||ans2; // or operator, returns/stores the first value
let ans5 = ans!=ans2;// ! stands for (not), in this instance this means not equal to
let ans6 = ans===ans2; //=== equal sign operator that compares both value and data type while == compares only value.
let b = 3;
let c = "3";
let a = b==c; // checks the value only, returns true.
let d = b===c; // checks he value and data type, returns false.
console.log(a,d);

let ans7 = ans<ans2 ? ans:ans2; // ":" means otherwise, "?" is a tenary operator,This statement checks whether ans is less than ans 2 
                                //     and returns the value that supports the true version of the statement
console.log(ans);
console.log (ans2);
console.log(ans2<ans);
console.log (ans2>ans);
console.log (ans2>=ans);
console.log (ans2**ans);
console.log(ans2%ans);
console.log (ans%ans2);
console.log(ans3);
console.log(ans4);
console.log(ans5);
console.log(ans6);
console.log(ans7);

//Naming of variables
//Never start a variable with a number or special characters
//dont use keywords as names of variables
//do not leave spaces in the variable names
//never assign variable names that do not make sense
//If you have a variable with two words, you can separate with _ or camel notation (myName)

