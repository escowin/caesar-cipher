// Encrypts string by shifting each alphabetic character ASCII value to the right by `num` value
function encryptString(num, string) {
  let result = "";
  for (let i = 0; i < string.length; i++) {
    let charCode = string.charCodeAt(i);
    let encryptedCode = charCode + num;

    // Encrypts character sets separately, adjusting for wrap-arounds as needed
    switch (true) {
      // Uppercase
      case charCode >= 65 && charCode <= 90:
        encryptedCode = encryptedCode > 90 ? encryptedCode - 26 : encryptedCode;
        break;
      // Lowercase
      case charCode >= 97 && charCode <= 122:
        encryptedCode =
          encryptedCode > 122 ? encryptedCode - 26 : encryptedCode;
        break;
      // Numerals and Symbols A
      case charCode >= 32 && charCode <= 64:
        encryptedCode = encryptedCode > 64 ? encryptedCode - 33 : encryptedCode;
        break;
      // Symbols B
      case charCode >= 91 && charCode <= 96:
        encryptedCode = encryptedCode > 96 ? encryptedCode - 6 : encryptedCode;
        break;
      // Symbols C
      case charCode >= 123 && charCode <= 126:
        encryptedCode = encryptedCode > 126 ? encryptedCode - 4 : encryptedCode;
        break;
      default:
        encryptedCode = charCode;
    }

    result += String.fromCharCode(encryptedCode);
  }

  return result;
}

module.exports = { encryptString };
