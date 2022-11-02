const calculatorFactory = () => {
  const add = (a, b) => {
    if (typeof a !== "number" || typeof b !== "number") {
      return parseInt(a) + parseInt(b);
    } else {
      return a + b;
    }
  };
  const subtract = (a, b) => {
    if (typeof a !== "number" || typeof b !== "number") {
      return parseInt(a) - parseInt(b);
    } else {
      return a - b;
    }
  };
  const multiply = (a, b) => {
    if (typeof a !== "number" || typeof b !== "number") {
      return parseInt(a) * parseInt(b);
    } else {
      return a * b;
    }
  };
  const divide = (a, b) => {
    if (typeof a !== "number" || typeof b !== "number") {
      return (parseFloat(a) / parseFloat(b)).toFixed(2);
    } else {
      if (a % b !== 0) {
        return parseFloat((parseFloat(a) / parseFloat(b)).toFixed(2));
      } else {
        return a / b;
      }
    }
  };
  return {
    add,
    subtract,
    multiply,
    divide,
  };
};
let calculator = calculatorFactory();
module.exports = calculator;
