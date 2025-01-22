import "./style.css";
import "./calculator.ts";
import { calculator } from "./calculator.ts";
import { themeSwitcher } from "./theme.ts";

const app: HTMLDivElement | any =
  document.querySelector<HTMLDivElement>("#app");

app.classList.add("dark_theme");

const buttons = [
  { type: "button", class: "btn_gray", id: "btn_clear", text: "C" },
  { type: "button", class: "btn_gray", id: "btn_math_minus", text: "+/-" },
  { type: "button", class: "btn_gray", id: "btn_precent", text: "%" },
  { type: "button", class: "btn_blue", id: "btn_divide", text: "/" },
  { type: "button", id: "btn_7", text: "7" },
  { type: "button", id: "btn_8", text: "8" },
  { type: "button", id: "btn_9", text: "9" },
  { type: "button", class: "btn_blue", id: "btn_multiply", text: "*" },
  { type: "button", id: "btn_4", text: "4" },
  { type: "button", id: "btn_5", text: "5" },
  { type: "button", id: "btn_6", text: "6" },
  { type: "button", class: "btn_blue", id: "btn_minus", text: "-" },
  { type: "button", id: "btn_1", text: "1" },
  { type: "button", id: "btn_2", text: "2" },
  { type: "button", id: "btn_3", text: "3" },
  { type: "button", class: "btn_blue", id: "btn_plus", text: "+" },
  { type: "button", id: "btn_dot", text: "." },
  { type: "button", id: "btn_0", text: "0" },
  { type: "button", id: "btn_del", text: "←" },
  { type: "button", class: "btn_blue", id: "btn_equals", text: "=" },
];

const buttonElements = buttons
  .map((button) => {
    const classAttr = button.class ? ` class="${button.class}"` : "";
    return `<button type="${button.type}"${classAttr} id="${button.id}">${button.text}</button>`;
  })
  .join("\n");

app.innerHTML = /*html */ `
<div class="container">
  <div class="theme_switcher">
    <div class="theme_switcher_item"></div>
  </div>
  <div class="calculator_content">
    <div class="inputs">
      <h4 id="text_top">0</h4>
      <h1 id="main_text">0</h1>
    </div>
    <div class="btns_wrapper">
      ${buttonElements}
    </div>
  </div>
</div>`;

calculator();
themeSwitcher();
