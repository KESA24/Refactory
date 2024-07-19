//Conditions and Loops under functions

//a function is a group of statements  that peform a given task and have a given name

//Function definition
function addNum(){
    const num1 = 2, num2=4;
    let sum = num1+num2;

    console.log(sum);
}

//{} -brace; ()- parenthesis
//A function will not run until we call it
//{function definition}

// calling a function / function invoketion
addNum();

//Another way of function definition
//Parameters are the values we pass in the parenthesis
function addNum2( num1, num2, num3){
   const addition = num1+num2+num3;
   console.log (addition);
}

//Arguments are the values we pass in the function definition in the place of parameters
addNum2(5,8,3);
addNum2(20,27,8)
addNum2(8,7,5)

//Another way to do the same thing
function addNum3 (num,num1,num3){
    num3 = num1 +num;
    console.log (num3);
}


addNum3(4,5);
addNum3(70,45);