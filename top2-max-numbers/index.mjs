// Problem
// Write a function getTop2MaxNumbers that takes an array of numbers as input
// and returns an array containing the top two maximum numbers
// from the input array and if there are duplicated numbers, please remove them

// Examples:
// getTop2MaxNumbers([10, 40, 20, 2, 9, 19]) === [40, 20]
// getTop2MaxNumbers([-10, -40, -20, -2, -9, -19]) === [-2, -9]
// getTop2MaxNumbers([10, 40, 20, 2, 40, 9, 19]) === [40, 20]

export const getTop2MaxNumbers = (numbers) => {
  let maxNumber1 = -Infinity;
  let maxNumber2 = -Infinity;
  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    if (num > maxNumber1) {
      maxNumber2 = maxNumber1;
      maxNumber1 = num;
    } else if (num > maxNumber2 && num !== maxNumber1) {
      maxNumber2 = num;
    }
  }
  return [maxNumber1, maxNumber2];
};
console.log(getTop2MaxNumbers([10, 40, 20, 2, 9, 19]));
console.log(getTop2MaxNumbers([-10, -40, -20, -2, -9, -19]));
console.log(getTop2MaxNumbers([10, 40, 20, 2, 40, 9, 19]));
