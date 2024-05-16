#!/usr/bin/env node
 
 import inquirer from 'inquirer'

const currency: any = {

    USD : 1,
    EUR : 0.91,
    GBP : 0.76,
    INR : 74.57,
    PKR : 280,
};


let user_answer = await inquirer.prompt(
    [
        {
           name : 'from',
           message : 'enter from curency',
           type : 'list',
           choices : ['USD', 'EUR', 'GBP','INR','PKR']

        },
        {
            name : 'to',
           message : 'enter to curency',
           type : 'list',
           choices : ['USD', 'EUR', 'GBP','INR','PKR']

        },
        {
            name : 'amount',
            message : 'enter your account',
            type :'number'
        }
    ]   
)
console.log(user_answer);

 let fromamount = currency[user_answer.from]
let toamount = currency[user_answer.to]
let amount = user_answer.amount
let baseamount = amount / fromamount // usd base currency // 4
let convertedamount = baseamount * toamount

console.log(convertedamount);

// console.log(fromamount);
// console.log(toamount);
// console.log(amount);







