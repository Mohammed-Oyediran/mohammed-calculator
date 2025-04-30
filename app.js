import path from "path";
import color from "colors";
import { fileURLToPath } from "url";
import { add, subtract, multiply, divide } from "./my_module/calculator.js";
import { stdin } from "process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const fileName = path.basename(__filename);

console.log(color.yellow(`The file name is: ${color.blue(fileName)}`), `\n`);
console.log(
  color.yellow(`The current directory name is: ${color.blue(__dirname)}`),
  `\n`
);
console.log(color.yellow(`The full path is: ${color.blue(__filename)}`), `\n`);

//Asking user for input
console.log(color.cyan(`Please enter the first number: `));

stdin.on("data", (firstNumber) => {
  const a = parseFloat(firstNumber.toString().trim());

  console.log(color.cyan(`Please enter the second number: `));

  stdin.on("data", (secondNumber) => {
    const b = parseFloat(secondNumber.toString().trim());

    if (isNaN(a) || isNaN(b)) {
      console.log(color.red("Invalid input. Please enter valid numbers."));
      return;
    }

    console.log(
      color.magenta(`The result of adding ${a} and ${b} is ${add(a, b)}\n`)
    );
    console.log(
      color.blue(
        `The result of subtracting ${a} and ${b} is ${subtract(a, b)}\n`
      )
    );
    console.log(
      color.green(
        `The result of multiplying ${a} and ${b} is ${multiply(a, b)}\n`
      )
    );

    try {
      console.log(
        color.yellow(
          `The result of dividing ${a} and ${b} is ${divide(a, b)}\n`
        )
      );
    } catch (error) {
      console.log(color.red(error.message));
    }

    stdin.destroy();
  });
});
