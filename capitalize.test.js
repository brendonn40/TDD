const capitalize = require("./capitalize");

test("works with words already capitalized", () => {
  expect(capitalize("Adenor")).toBe("Adenor");
});
test("works with empty string", () => {
  expect(capitalize("")).toBe("");
});
test("works with regular string", () => {
  expect(capitalize("testando")).toBe("Testando");
});
test("works with multiple words", () => {
  expect(capitalize("testando varias palavras ao mesmo tempo")).toBe(
    "Testando varias palavras ao mesmo tempo"
  );
});
