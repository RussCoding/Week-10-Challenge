const teamArr = [];
//imports inquirer package
const inquirer = require('inquirer');
//imports classes
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const path = require('path');
const fs = require('fs');

//starts the app and asks which type or employee to add until finished
function startApp () {
    inquirer.prompt([
        {
            type: 'list',
            message: "Would you like to add a Manager, Engineer, Intern, or finish adding members?",
            name: "mainPrompt",
            choices: ["Manager", "Engineer", "Intern", "Finish"]
        }
    ]).then(function (userInput) {
        switch(userInput.mainPrompt) {
            case "Manager":
                addManager();
                break;
            case "Engineer":
                addEngineer();
                break;
            case "Intern":
                addIntern();
                break;
            default:
                createSite();

        }
    }

    )
}

function addManager() {
    inquirer.prompt ([
    
        {
          type: "input",
          name: "name",
          message: "Enter the name"
        },
    
        {
          type: "input",
          name: "id",
          message: "Enter the employee ID number"
        },
    
        {
          type: "input",
          name: "email",
          message: "Enter the email address"
        },
    
        {
          type: "input",
          name: "officeNumber",
          message: "Enter the office number"
        }
    
      ]).then(answers => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        teamArr.push(manager);
        startApp();
      });
}

function addEngineer() {
    inquirer.prompt([
      
        {
          type: "input",
          name: "name",
          message: "Enter the name"
        },
  
        {
          type: "input",
          name: "id",
          message: "Enter the employee ID number" 
        },
  
        {
          type: "input",
          name: "email",
          message: "Enter the email address"
        },
  
        {
          type: "input",
          name: "git",
          message: "Enter the GitHub username"
        }
  
      ]).then(answers => {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.git);
        teamArr.push(engineer);
        startApp();
      });
}

function addIntern() {
    inquirer.prompt([
      
        {
          type: "input",
          name: "name",
          message: "What is the intern's name?"
        },
  
        {
          type: "input",
          name: "id",
          message: "What is the intern's employee ID number?" 
        },
  
        {
          type: "input",
          name: "email",
          message: "What is the intern's email address?"
        },
  
        {
          type: "input",
          name: "school",
          message: "Where did they receive their education?"
        }
  
      ]).then(answers => {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        teamArr.push(intern);
        startApp();
      });
}

function createSite(){

}