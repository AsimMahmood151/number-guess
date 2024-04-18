#! /usr/bin/env node
import inquirer from "inquirer";
const compGuess = Math.floor(Math.random() * 10 + 1);
const userGuess = await inquirer.prompt([{
        name: "guess",
        type: "number",
        message: "Please Guess a Number between 1 and 10: "
    }]);
if (userGuess.guess === compGuess) {
    console.log("WOW, You Guess is correct");
}
else {
    console.log("Oops! You Guess is incorrect");
}
