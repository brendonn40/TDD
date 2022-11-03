function caesarCipher(string, key) {
  let result = [];
  for (let i = 0; i < string.length; i++) {
    let char;
    if (string[i].charCodeAt(0) > 96 && string[i].charCodeAt(0) < 123) {
      char = (string[i].charCodeAt(0) - 97 + key) % 26;
      result.push(String.fromCharCode(97 + char));
    } else if (string[i].charCodeAt(0) > 64 && string[i].charCodeAt(0) < 91) {
      char = (string[i].charCodeAt(0) - 65 + key) % 26;
      result.push(String.fromCharCode(65 + char));
    } else {
      result.push(string[i]);
    }
  }
  return result.join("");
}
