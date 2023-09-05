import inquirer from "inquirer";
import chalk from "chalk";
//operators
var operators;
(function (operators) {
    operators["Add"] = "Addition";
    operators["Subtract"] = "Subtracction";
    operators["Multiply"] = "Multiplication";
    operators["Divide"] = "Division";
})(operators || (operators = {}));
console.log(chalk.red('WELLCOME TO MY CALCULATOR'));
//user input validation
const prompt = inquirer.createPromptModule();
function validateNumber(input) {
    if (isNaN(parseFloat(input))) {
        return "Please enter a  valid number";
    }
    return true;
}
async function main() {
    const input = await prompt([
        {
            name: "num1",
            type: "number",
            message: "Enter your first number:",
            validate: validateNumber,
        },
        {
            name: "operator",
            type: "list",
            message: "Select the operator:",
            choices: Object.values(operators)
        },
        {
            name: "num2",
            type: "number",
            message: "Enter your second number:",
            validate: validateNumber,
        }
    ]);
    const num1 = parseFloat(input.num1);
    const num2 = parseFloat(input.num2);
    const selectedOperator = input.operator;
    let result;
    if (selectedOperator === operators.Add) {
        result = num1 + num2;
        console.log(chalk.green.bgGrey(`The addition of ${num1} and ${num2} is equal to ${result}`));
    }
    else if (selectedOperator === operators.Subtract) {
        result = num1 - num2;
        console.log(chalk.redBright.bgBlueBright(`The Subtraction of ${num1} and ${num2} is equal to ${result}`));
    }
    else if (selectedOperator === operators.Multiply) {
        result = num1 * num2;
        console.log(chalk.blue(`The Multiplication of ${num1} and ${num2} is equal to ${result}`));
    }
    else if (selectedOperator === operators.Divide) {
        result = num1 / num2;
        console.log(chalk.yellow.bgBlue(`The Division of ${num1} and ${num2} is equal to ${result}`));
    }
}
main();
