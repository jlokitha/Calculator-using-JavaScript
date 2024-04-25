/**
 * Logic of the calculator.
 */

const display = document.getElementById("display");
const buttons = document.querySelectorAll(".button");
const specialChars = ["+", "-", "*", "/", "%"];
let output = "";

function evaluateExpression(expression) {
  try {
    return eval(expression.replace("%", "/100"));
  } catch (error) {
    return "Error";
  }
}

function calculate(value) {
  if (value === "=" && output !== "") output = evaluateExpression(output);
  else if (value === "AC") output = "";
  else if (value === "C") output = output.toString().slice(0, -1);
  else {
    if (output === "" && specialChars.includes(value)) return;
    output += value;
  }

  display.value = output;
}

buttons.forEach((button) => {
  button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});

/**
 * Change theme whe toggle.
 */

const toggler = document.getElementById("toggler");
const calculator = document.getElementById("calculator");

toggler.addEventListener("change", function () {
  const isChecked = this.checked;

  calculator.classList.toggle("white-theme-cal", isChecked);
  document.body.classList.toggle("white-theme-bg", isChecked);
  display.classList.toggle("white-theme-font", isChecked);

  buttons.forEach((button) => {
    button.classList.toggle("white-theme-font", isChecked);
    button.classList.toggle("white-theme-button", isChecked);
  });
});
