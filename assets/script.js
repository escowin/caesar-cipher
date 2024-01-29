// dom variables
const dom = {
  copyrightEl: document.getElementById("copyright"),
  formEl: document.getElementById("form"),
  headerEl: document.querySelector("h1"),
  numInputEl: document.getElementById("num-input"),
  rangeInputEl: document.getElementById("num-range"),
  textareaEl: document.getElementById("text"),
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

// captures user form-input
function formSubmitHandler(e) {
  e.preventDefault();

  // form elements
  const num = dom.numInputEl.value;
  const range = dom.rangeInputEl.value;
  const text = dom.textareaEl.value;

  console.log(`${num}\n${range}\n${text}`);

  console.log(`original text: ${text}`);
  const result = encryptString(num, text);
  console.log(`encryption text: ${result}`);
}

function encryptString(num, string) {
  // shift string value based on the num value in relation to the character value from char code for uppercase (65 - 90) and lowercase (97-122) characters
  // ie.` 2, "hello"` will return "jgnnq"
  // case is maintained, therefore Z(90) + 1 will return A, ie "Zebra" returns "Afcsb"

  let result = '';
  for (let i = 0; i < string.length; i++) {
    let charCode = string.charCodeAt(i);

    // Encrypts uppercase letters
    if (charCode >= 65 && charCode <= 90) {
      result += String.fromCharCode(((charCode - 65 + num) % 26) + 65);
    }
    // Encrypts lowercase letters
    else if (charCode >= 97 && charCode <= 122) {
      result += String.fromCharCode(((charCode - 97 + num) % 26) + 97);
    }
    // Non-alphabetic characters remain unchanged
    else {
      result += string[i];
    }
  }

  // bug: A + 1 returns B, but Z + 1 returns R
  // original text: ABCDEFGHIJKLMNOPQRSTUVWXYZ, abcdefghijklmnopqrstuvwxyz
  // encryption text: BLVFPZJTDNXHRBLVFPZJTDNXHR, blvfpzjtdnxhrblvfpzjtdnxhr
  return result;
}

init();
