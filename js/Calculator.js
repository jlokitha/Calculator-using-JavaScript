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
  console.log("value : ", value);

  if (value === "=" && output !== "") {
    output = evaluateExpression(output);
  } else if (value === "AC") {
    output = "";
  } else if (value === "C") {
    output = output.slice(0, -1);
  } else {
    if (output === "" && specialChars.includes(value)) return;
    output += value;
  }

  display.value = output;
}

buttons.forEach((button) => {
  button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});
