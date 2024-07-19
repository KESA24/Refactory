// Patricia Nekesa & Monica Iyabo

const calculate = {};

calculate.factorial = (number) => {
  if (!Number.isInteger(number)) {
    return 'Input is not a number';
  }
  if (number < 0) {
    return 'Number must be greater than or equal to 0';
  }
  if (number === 0 || number === 1) {
    return 1;
  }
  return number * calculate.factorial(number - 1);
};

module.exports = calculate;