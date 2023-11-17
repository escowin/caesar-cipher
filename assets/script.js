function init() {
  const copyrightEl = document.getElementById("copyright");
  const headerEl = document.querySelector("h1");
  const date = new Date().getFullYear();
  const info = {
    app: "caesar-cipher",
    v: "0.0.1",
    github: `https://github.com/escowin/`,
    copyright: `\u00a9 ${date} Edwin M. Escobar`,
  };

  console.log(`${info.copyright}\n${info.github + info.app}`);
  copyrightEl.setAttribute("href", info.github + info.app);
  copyrightEl.innerText = info.copyright;
  headerEl.innerText = `${info.app} ${info.v}`;
}

init();
