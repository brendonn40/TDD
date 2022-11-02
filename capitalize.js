function capitalize(string) {
  if (string === "") return "";
  return string.replace(string[0], string[0].toUpperCase());
}

module.exports = capitalize;
