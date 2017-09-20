const inquirer = require('inquirer')
const chalk = require('chalk')


console.log('Welcome to Night Blades Pizzaria')

var questions = [{
   message: "Have you ordered through us before?",
   name:  'member',
   type: "list",
   choices:['yes','no']
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
   choices:['yes','no']
  },{
    message: "Addons?",
   name:  'extras',
      type: "list",
   choices:['yes','no']
 
  }]

inquirer.prompt(questions).then(function({member,address,number,size,cut,extras}){

if (member = yes){
  var questions = [{
   message: "Enter member number",
   name:  'mnumb',
   type: "input",
   
  }]

}
inquirer.prompt(questions).then(function({member,mnumb,address,number,size,cut,extras}){
console.log(member,mnumb,address,number,size,cut,extras)
})})