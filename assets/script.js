// dom variables
const dom = {
  copyrightEl: document.getElementById("copyright"),
  formEl: document.getElementById("form"),
  headerEl: document.querySelector("h1"),
  numInputEl: document.getElementById("num-input"),
  rangeInputEl: document.getElementById("num-range")
};

// starts up app logic
function init({formEl, numInputEl, rangeInputEl, ...html}) {
  credits(html);

  // Returns char strings from UTF-16 code units
  // const x = String.fromCharCode(48, 57, 65, 90, 97, 122);
  // console.log(x); // 0-9, A-Z, a-z

  numInputEl.addEventListener("input", syncedValues);
  rangeInputEl.addEventListener("input", syncedValues);
  formEl.addEventListener("submit", (e) => formSubmitHandler(e))
}

// displays app details in the console & browser
function credits({ copyrightEl, headerEl }) {
  const date = new Date().getFullYear();
  const info = {
    github: `https://github.com/escowin/`,
    app: "caesar-cipher",
    v: "0.0.1",
    copyright: `\u00a9 ${date} Edwin M. Escobar`,
    link: () => info.github + info.app 
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
  e.preventDefault()
  console.log("form submit")
  console.log(e.target.value)
}


init(dom);
