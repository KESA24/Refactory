/**
 Group assignment 
 Monica Iyabo
 Patricia Nekesa 
 */
// Get fibonacci numbers are returned in an array
const fibonacci_series = function (number) 
{
  // Added Starting point to check beginning point
  if (number===1) 
  {
    return [0, 1];
  } 
  else if(number>1)
  {
    const sum = fibonacci_series(number - 1);
    sum.push(sum[sum.length - 1] + sum[sum.length - 2]);
    return sum;
  }else{
      console.log("Please Enter a number greater than 1")
  }
};
// Test out put the function with good input
console.log(fibonacci_series(15));
// Test the output of the function with bad out put
console.log(fibonacci_series(-5))





