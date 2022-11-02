const calculator = require("./calculator");

test("addition works with positive numbers", () => {
  expect(calculator.add(1, 3)).toBe(4);
});
test("addition works with negative numbers", () => {
  expect(calculator.add(1, -3)).toBe(-2);
});
test("converts to int before adding", () => {
  expect(calculator.add("2", "5")).toBe(7);
});
test("subtraction with positive numbers", () => {
  expect(calculator.subtract(5, 4)).toBe(1);
});
test("subtraction with negative numbers", () => {
  expect(calculator.subtract(-5, -4)).toBe(-1);
});
test("multiply positive numbers correctly", () => {
  expect(calculator.multiply(5, 5)).toBe(25);
});
test("multiply 2 negative numbers correctly", () => {
  expect(calculator.multiply(-5, -4)).toBe(20);
});
test("multiply negative/positive numbers correctly", () => {
  expect(calculator.multiply(5, -4)).toBe(-20);
});
test("divide integer numbers correctly", () => {
  expect(calculator.divide(20, 4)).toBe(5);
});
test("divide integer numbers correctly", () => {
  expect(calculator.divide(20, 4)).toBe(5);
});
test("give float results in non integer division and round 2 cases", () => {
  expect(calculator.divide(20, 3)).toBe(6.67);
});
