const caesarCipher = require("./caesarCipher");

test("works on a single word ", () => {
  expect(caesarCipher("banana", 13)).toBe("onanan");
});
test("works on uppercase string ", () => {
  expect(caesarCipher("BANANA", 1)).toBe("CBOBOB");
});
test("works on mixed cases string ", () => {
  expect(caesarCipher("BAnANa", 1)).toBe("CBoBOb");
});
test("works with key 25", () => {
  expect(caesarCipher("abcdefghijklmnopqrstuvwxyz", 25)).toBe(
    "zabcdefghijklmnopqrstuvwxy"
  );
});
test("works with key 1", () => {
  expect(caesarCipher("abcdefghijklmnopqrstuvwxyz", 1)).toBe(
    "bcdefghijklmnopqrstuvwxyza"
  );
});
test("works with punctuation", () => {
  expect(caesarCipher("attack at, dawn.", 5)).toBe("fyyfhp fy, ifbs.");
});
