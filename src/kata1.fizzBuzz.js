/* eslint-disable prettier/prettier */
const fizzBuzz = (number) => {
    const isDivisable3 = (number % 3) === 0;
    const isDivisible5 = (number % 5) === 0;

    if (isDivisable3 && isDivisible5) {
        return "FizzBuzz";
    }

    if (number % 5 === 0 && number % 3 === 0) {
        return "FizzBuzz";
    }

    if (number % 5 === 0) {
        return "Buzz";
    } 
        return "Fizz";
    
};

module.exports = fizzBuzz;
