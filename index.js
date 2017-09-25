const inquirer = require('inquirer')
const chalk = require('chalk')


console.log('Welcome to Night Blades Pizzaria you can call us at 417-545-5377')

var questions = [{
  message: "Have you ordered through us before?",
   name:  'member',
   type: "confirm",
   choices:['yes','no']
  },{
    message: "Enter member number if you dont have one just leave blank",
    name:  'mnumb',
    type: "password",
  },{
    message: "Address for the order??",
   name:  'address',
      type: "input",

  },{
    message: "How many?",
   name:  'number',
      type: "list",
   choices:['1','2','3','4','5','6',]
  },{
    message: "Size?",
   name:  'size',
      type: "list",
   choices:['Small','Medium','Large', 'Extra large', 'Various']
  },{
    message: "How do you want it cut?",
   name:  'cut',
      type: "list",
   choices:['in a halfmoon','deep','pizza style','squared']
  },{
    message: "Addons?",
   name:  'extras',
      type: 'checkbox',
   choices:['olives','onions','chopped tomato','anchovies','extra cheese']
   
 
  }]

inquirer.prompt(questions).then(function({member,mnumb,address,number,size,cut,extras}){

  console.log(chalk.greenBright("\n\nSo you want" ,number, size, "pizzas cut",cut, "with", extras,"at", address,"\n\n"))


  var confirm = [{
   message: "is this request correct",
   name:  'correct',
   type: "confirm",
   choices:['yes','no']
   
  }]


inquirer.prompt(confirm).then(function({correct}){
if (correct == true){
  console.log(chalk.red("your order will be handled"));
}
else {
  console.log(chalk.blueBright("we apologize for the inconvenience"));
}
})


})