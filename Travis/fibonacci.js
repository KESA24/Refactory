// Patricia Nekesa & Monica Iyabo

const  sequence = {};

sequence.fibonacci = (number) => {
    if (!Number.isInteger(number)) {
      return 'Input is not a number';
    }
    if (number < 0) {
      return 'Number must be greater than or equal to 0';
    }
    if (number > 1000) {
      return 'Number should not be greater than 1000';
    }
    // Return series in an array
    const result = [0, 1];
    while (result[result.length - 1] + result[result.length - 2] < number) {
      result.push(result[result.length - 1] + result[result.length - 2]);
    }
    return result;
  };


  module.exports = sequence