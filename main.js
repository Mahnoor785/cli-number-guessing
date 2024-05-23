"use strict";
//computer will generate a number
// user se input recieve for guessing number
// compare user input for generated number and show result
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
// const randomNumber =15;
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answers = await inquirer_1.default.prompt([
    {
        name: "UserGuessNumber",
        type: "number",
        message: "please guess number between 1-6",
    }
]);
// console.log(answers);
if (answers.UserGuessNumber === randomNumber) {
    console.log("congratulations you guessed right");
}
else {
    console.log("you guessed wrong number");
}
// math function generate random value and it is between 0 to 1
//math floor neechay chala jata ha 0 pe 
// const randomNumber = Math.floor(Math.random()* 10 + 1);
console.log(randomNumber);
