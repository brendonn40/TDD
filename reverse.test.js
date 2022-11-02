const reverse = require("./reverse");

test("works with regular string", () => {
  expect(reverse("regular")).toBe("raluger");
});
test("works with palindromes", () => {
  expect(reverse("anilina")).toBe("anilina");
});
test("works with multiple words", () => {
  expect(reverse("anilina went to the park")).toBe("krap eht ot tnew anilina");
});
