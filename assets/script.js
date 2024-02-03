// dom variables
const dom = {
  copyrightEl: document.getElementById("copyright"),
  versionEl: document.getElementById("version"),
  formEl: document.getElementById("form"),
  input: {
    numEl: document.getElementById("num-input"),
    rangeEl: document.getElementById("num-range"),
    originalTextEl: document.getElementById("original-text"),
    encryptedTextEl: document.getElementById("encrypted-text"),
  },
  btn: {
    copy: document.getElementById("copy-btn"),
    encrypt: document.getElementById("encrypt-btn"),
    clear: document.getElementById("clear-btn"),
  },
};

// starts up app logic
function init() {
  const { formEl, input, btn, ...html } = dom;
  credits(html);

  input.numEl.addEventListener("input", syncedValues);
  input.rangeEl.addEventListener("input", syncedValues);
  formEl.addEventListener("submit", (e) => formSubmitHandler(e));
  btn.clear.addEventListener("click", (e) => clearOriginalText(e));
  btn.copy.addEventListener("click", copyEncryptedText);
}

// displays app details in the console & browser
function credits({ copyrightEl, versionEl }) {
  const date = new Date().getFullYear();
  const info = {
    github: `https://github.com/escowin/`,
    app: "caesar-cipher",
    v: "1.0.2",
    copyright: `\u00a9 ${date} Edwin M. Escobar`,
    link: () => info.github + info.app,
  };

  console.log(`${info.copyright}\n${info.link()}`);
  copyrightEl.setAttribute("href", info.link());
  copyrightEl.innerText = info.copyright;
  versionEl.innerText = `v${info.v}`;
}

// Syncs range & num input values
function syncedValues(e) {
  const value = e.target.value;
  dom.input.rangeEl.value = dom.input.numEl.value = value;
}

// Captures user form-input
function formSubmitHandler(e) {
  e.preventDefault();

  // form element `num` is converted from string to number type to accurately calculate math
  const num = parseInt(dom.input.numEl.value);
  const text = dom.input.originalTextEl.value;
  const result = encryptString(num, text);

  displayEncryptedText(result);
}

// Clears the original text element of any existing text
function clearOriginalText(e) {
  e.preventDefault();
  dom.input.originalTextEl.value = "";
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
  const { btn, input } = dom;
  // Shows new encrypted string has yet to be copied
  if (btn.copy.innerText === "copied") btn.copy.innerText = "copy";
  input.encryptedTextEl.textContent = string;
}

function copyEncryptedText() {
  const string = dom.input.encryptedTextEl.textContent;

  navigator.clipboard
    .writeText(string)
    .then(() => (dom.btn.copy.innerText = "copied"))
    .catch((err) => console.error(err));
}

init();
