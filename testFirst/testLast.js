/**
 Group assignment 
 Monica Iyabo
 Patricia Nekesa 
 */

// Factorial of a number using for loop
function factorial(number){
    let answer = 1;
    if (number == 0 || number== 1){
      return answer;
    }
    else {
      for(var i = number; i >= 1; i--){
        answer = answer * i;
      }
      return answer;
    }
    // else {
    //     console.log(err);
    // }

  }
//   Test with good input
   answer = factorial(5)
  console.log("The factorial of " + 5+ " is " + answer);
//   Test with bad input
answer = factorial(-1)
console.log("The factorial of " + -1+ " is " + answer);

