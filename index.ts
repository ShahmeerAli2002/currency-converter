#!/usr/bin/env node

import inquirer from "inquirer"

//currency converter

console.log("Welcome to Currency Converter")
console.log("----------------------------")
console.log("Select your currency")
console.log("----------------------------")
console.log("USD = 1")
console.log("INR = 75.57")
console.log("GBP = 0.76")
console.log("EUR= 0.91")
console.log("PKR = 280")
console.log("----------------------------")
console.log("****************************")

const currency :any = { 

    USD:1,
    INR:75.57,
    GBP:0.76,
    EUR:0.91,
    PKR:280
}
 



let userAnswer = await inquirer.prompt([
    {
        name:"from",
        type:"list",
        choices:["USD","INR","GBP","EUR","PKR"],
        message:"Select your currency"
    }, 

    {
        name:"to",
        type:"list",
        choices:["USD","INR","GBP","EUR","PKR"],
        message:"select your second currency"
    },
    {
        name:"amount",
        type:"number",
        message:"ENTER YOUR AMOUNT"
    } 

])
 let fromAmount = currency[userAnswer.from]
 let toAmount = currency[userAnswer.to]
 let amount = userAnswer.amount
 let result = (amount * fromAmount) / toAmount
 console.log(`Your amount is ${result.toFixed()}`)

 console.log('"#""#"""#""""#""#"""#"""#"""#""""#""""#"""#"""#"""#"');
 
