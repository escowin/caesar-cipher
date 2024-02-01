// dom variables
const dom = {
  copyrightEl: document.getElementById("copyright"),
  formEl: document.getElementById("form"),
  headerEl: document.querySelector("h1"),
  numInputEl: document.getElementById("num-input"),
  rangeInputEl: document.getElementById("num-range"),
  originalTextEl: document.getElementById("original-text"),
  encryptedTextEl: document.getElementById("encrypted-text")
};

// starts up app logic
function init() {
  const { formEl, numInputEl, rangeInputEl, ...html } = dom;
  credits(html);

  numInputEl.addEventListener("input", syncedValues);
  rangeInputEl.addEventListener("input", syncedValues);
  formEl.addEventListener("submit", (e) => formSubmitHandler(e));
}

// displays app details in the console & browser
function credits({ copyrightEl, headerEl }) {
  const date = new Date().getFullYear();
  const info = {
    github: `https://github.com/escowin/`,
    app: "caesar-cipher",
    v: "0.0.1",
    copyright: `\u00a9 ${date} Edwin M. Escobar`,
    link: () => info.github + info.app,
  };

  console.log(`${info.copyright}\n${info.link()}`);
  copyrightEl.setAttribute("href", info.link());
  copyrightEl.innerText = info.copyright;
  headerEl.innerText = `${info.app} ${info.v}`;
}

// Syncs range & num input values
function syncedValues(e) {
  const value = e.target.value;
  dom.rangeInputEl.value = value;
  dom.numInputEl.value = value;
}

// Captures user form-input
function formSubmitHandler(e) {
  e.preventDefault();

  // form element `num` is converted from string to number type to accurately calculate math
  const num = parseInt(dom.numInputEl.value);
  const text = dom.originalTextEl.value;
  const result = encryptString(num, text);

  console.log(`original text: ${text}`);
  console.log(`encryption text: ${result}`);
  displayEncryptedText(result)
}

// Encrypts string by shifting each alphabetic character ASCII value to the right by `num` value
function encryptString(num, string) {
  let result = "";
  for (let i = 0; i < string.length; i++) {
    let charCode = string.charCodeAt(i);
    let encryptedCode = charCode + num;

    // Encrypts upper & lower cases separately, adjusting for wrap-arounds as needed
    if (charCode >= 65 && charCode <= 90) {
      encryptedCode = encryptedCode > 90 ? encryptedCode - 26 : encryptedCode;
    } else if (charCode >= 97 && charCode <= 122) {
      encryptedCode = encryptedCode > 122 ? encryptedCode - 26 : encryptedCode;
    } else {
      encryptedCode = charCode;
    }
    result += String.fromCharCode(encryptedCode);
  }

  return result;
}

function displayEncryptedText(string) {
  // clears textarea before populating it with encrypted string
  dom.encryptedTextEl.innerText = ""
  dom.encryptedTextEl.innerText = string
}

init();
