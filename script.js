const number1 = parseFloat(
  prompt(`Welcom to SWIFTCAL. Enter the first number`)
);
const operator = prompt("Enter operator: +, -, /, ., *, %");
const number2 = parseFloat(prompt(`Enter second number`));
let result;
if (operator === "+") {
  result = number1 + number2;
} else if (operator === "-") {
  result = number1 - number2;
} else if (operator === "/") {
  result = number1 / number2;
} else if (operator === ".") {
  result = number1.number2;
} else if (operator === "*") {
  result = number1 * number2;
} else if (operator === "%") {
  result = number1 % number2;
}
alert(
  `${number1} ${operator} ${number2} is ${result}. Thank you for using SWIFTCAL.`
);
