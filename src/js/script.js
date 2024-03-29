import "../css/style.css"
const { encryptString } = require("./encryption");

// DOM variables
const dom = {
  copyrightEl: document.getElementById("copyright"),
  versionEl: document.getElementById("version"),
  formEl: document.getElementById("cipher-form"),
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
  staticLegendEl: document.getElementById("static-legend"),
  encryptedLegendEl: document.getElementById("encrypted-legend"),
};

// Start up displays cipher information & listen for user interactions
function init() {
  const { formEl, input, btn, ...html } = dom;
  const events = {
    engaged: ["mousedown", "touchstart", "focus", "keydown"],
    disengaged: ["mouseup", "touchend", "blur"],
  };

  credits(html);
  displayLegend();

  input.numEl.addEventListener("input", syncedValues);
  input.rangeEl.addEventListener("input", syncedValues);
  formEl.addEventListener("submit", (e) => formSubmitHandler(e));
  btn.clear.addEventListener("click", (e) => clearOriginalText(e));
  btn.copy.addEventListener("click", copyEncryptedText);

  // Encrypted legend lights & dims when user interacts with input fields
  legendEventListeners(input.numEl, events.engaged, true);
  legendEventListeners(input.rangeEl, events.engaged, true);
  legendEventListeners(input.originalTextEl, ["focus"], true);
  legendEventListeners(input.encryptedTextEl, ["focus"], true);

  legendEventListeners(input.numEl, events.disengaged, false);
  legendEventListeners(input.rangeEl, [...events.disengaged, "keyup"], false);
  legendEventListeners(input.originalTextEl, ["blur"], false);
  legendEventListeners(input.encryptedTextEl, ["blur"], false);
}

// Displays app details in the console & browser
function credits({ copyrightEl, versionEl }) {
  const date = new Date().getFullYear();
  const info = {
    github: `https://github.com/escowin/`,
    app: "caesar-cipher",
    v: "2.0.1",
    copyright: `\u00a9 ${date} Edwin M. Escobar`,
    link: () => info.github + info.app,
  };

  console.log(`${info.app} v${info.v}\n${info.copyright}\n${info.link()}`);
  copyrightEl.innerText = date;
}

// Syncs range & num input values
function syncedValues(e) {
  const value = e.target.value;
  dom.input.rangeEl.value = dom.input.numEl.value = value;
  displayLegend();
}

// Displays two alphabetic legend to communicate substitution encryption process
function displayLegend() {
  // Clears existing content
  dom.staticLegendEl.innerHTML = "";
  dom.encryptedLegendEl.innerHTML = "";

  // Dynamically generates A-Z list elements
  for (let i = 65; i <= 90; i++) {
    // Static legend
    let charOriginal = String.fromCharCode(i);
    let liOriginal = document.createElement("li");
    liOriginal.textContent = charOriginal;
    dom.staticLegendEl.appendChild(liOriginal);

    // Encrypted legend synced range/num input value
    let num = parseInt(dom.input.numEl.value);
    let charShifted = String.fromCharCode(((i - 65 + num) % 26) + 65);
    let liShifted = document.createElement("li");
    liShifted.textContent = charShifted;
    dom.encryptedLegendEl.appendChild(liShifted);
  }
}

// User interaction with input elements affect appearance of encrypted legend
function legendEventListeners(inputEl, events, handler) {
  events.forEach((event) =>
    inputEl.addEventListener(event, () => {
      // Determines whether to light up or dim the encrypted legend
      handler
        ? (dom.encryptedLegendEl.style.backgroundColor = "var(--light)")
        : (dom.encryptedLegendEl.style.backgroundColor = "var(--bg-unfocus)");
    })
  );
}

// Captures user form-input
function formSubmitHandler(e) {
  e.preventDefault();

  // Converts `numEl` value type to accurately perform math
  const num = parseInt(dom.input.numEl.value);
  const text = dom.input.originalTextEl.value;
  const result = encryptString(num, text);

  displayEncryptedText(result);
}

// Clears the original text element of any existing text
function clearOriginalText(e) {
  e.preventDefault();
  dom.input.originalTextEl.value = "";
  dom.input.encryptedTextEl.innerText = "";
}

// Displays generated encrypted text in browser
function displayEncryptedText(string) {
  const { btn, input } = dom;
  // Communicates that the newly encrypted string has yet to be copied
  if (btn.copy.innerText === "copied") btn.copy.innerText = "copy";
  input.encryptedTextEl.textContent = string;
}

// Copies encrypted text string to clipboard
function copyEncryptedText() {
  const string = dom.input.encryptedTextEl.textContent;

  navigator.clipboard
    .writeText(string)
    .then(() => (dom.btn.copy.innerText = "copied"))
    .catch((err) => console.error(err));
}

init();
