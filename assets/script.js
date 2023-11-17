// dom variables
const html = {
  headerEl: document.querySelector("h1"),
  copyrightEl: document.getElementById("copyright"),
};

// starts up app logic
function init() {
  credits(html);

  // Returns char strings from UTF-16 code units
  const x = String.fromCharCode(48, 57, 65, 90, 97, 122);
  console.log(x); // 0-9, A-Z, a-z
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

init();
