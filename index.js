const inquirer = require('inquirer')
const chalk = require('chalk')



var question = [{
  name: 'tacoIngredient',
  message: 'Whats another tasty thing to add to your taco?',
  default : ''
}]

var tacoIngredients = [];

function finalAction(){

  console.log('Make a taco with: =>' + tacoIngredients)
}

function askOrPerformFinalAction(answer) {

  ingredientsList.push(answers.tacoIngredient);

  if (!answers.tacoIngredient) {
    finalAction(tacoIngredients);
    return;
  }

  return inquirer.prompt(question, askOrPerformFinalAction);
}

inquirer.prompt(question, askOrPerformFinalAction);

console.log('tacoIngredient')