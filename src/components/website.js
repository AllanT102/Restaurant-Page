import navbar from "./navbar";
import initHome from "./homepage";
import "/src/styles/body.scss";

function initializeWebsite() {
  document.body.append(navbar(), createMain());
  initHome();
}

function createMain() {
  const main = document.createElement("main");
  main.classList.add("main");
  main.setAttribute("id", "main");
  return main;
}

export default initializeWebsite;
