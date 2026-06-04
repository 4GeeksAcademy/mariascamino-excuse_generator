import "./style.css";
import { generateExcuse } from "./excuse-generator.js";

window.onload = function () {
  const output = document.getElementById("output");
  const excuse = generateExcuse();
  output.textContent = excuse;
};
