// pulls info from Manager.js file
const Manager = require("./lib/Manager");
// pulls info from Engineer.js file
const Engineer = require("./lib/Engineer");
// pulls info from Intern.js file
const Intern = require("./lib/Intern");
// npm pkg inquirer to run tests
const inquirer = require("inquirer");
// follows required path
const path = require("path");
// file system to pull info for writing on page
const fs = require("fs");
// path for html output that will be written
const OUTPUT_DIR = path.resolve(__dirname, "output");
//  team.html will be insIde output folder
const outputPath = path.join(OUTPUT_DIR, "team.html");
// calls the info
const render = require("./lib/htmlRenderer");
// getting an array of all inputted employee information
const employees = [];

// building the team with objects as classes/subclasses
createCard()
function createCard() {
  // list of choices for user to choose from.  
  inquirer
    .prompt({
      type: "list",
      name: "title",
      message: "Title of team member?",
      choices: [
        "Manager",
        "Engineer",
        "Intern",
        "No more employees"
      ]
    })
    // depending on which title is chosen, the next set of required info will be asked.
    .then(({ title }) => {

      switch (title) {
        // if manager is selected...or...
        case "Manager":
          mgrCard();
          break;

        // if engineer is selected...or...
        case "Engineer":
          engCard();
          break;

        // if intern is selected...or...
        case "Intern":
          intCard();
          break;

        // if no more employees selected. 
        case "No more employees":
          generateHTML()
          break
      }
    })
}
// if manager is selected... 
function mgrCard() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "mgrName",
        message: "Manager's name?"
      },
      {
        type: "input",
        name: "mgrId",
        message: "Manager's employee Id?"
      },
      {
        type: "input",
        name: "mgrEmail",
        message: "Manager's email?"
      },
      {
        type: "input",
        name: "mgrPhone",
        message: "Manager's office number?"
      }
    ])
    // answers are written to the markdown file
    .then(({ mgrName, mgrId, mgrEmail, mgrPhone }) => {
      // collects all inputs
      const manager = new Manager(mgrName, mgrId, mgrEmail, mgrPhone);
      employees.push(manager);

      createCard();
    })
}
// if engineer is selected...
function engCard() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "engName",
        message: "Engineer's name?"
      },
      {
        type: "input",
        name: "engId",
        message: "Enginner's employee Id?"
      },
      {
        type: "input",
        name: "engEmail",
        message: "Engineer's email?"
      },
      {
        type: "input",
        name: "engGithub",
        message: "Engineer's github username?"
      }
    ])
    // answers are written to the markdown file
    .then(({ engName, engId, engEmail, engGithub }) => {
      //  collects all the inputs
      const engineer = new Engineer(engName, engId, engEmail, engGithub);
      employees.push(engineer);

      createCard();
    })
}
// if intern is selected...
function intCard() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "intName",
        message: "Intern's name?"
      },
      {
        type: "input",
        name: "intId",
        message: "Intern's employee Id?"
      },
      {
        type: "input",
        name: "intEmail",
        message: "Intern's email?"
      },
      {
        type: "input",
        name: "intSchool",
        message: "Intern's school?"
      }

    ])
    // answers are written to the markdown file
    .then(({intName, intId, intEmail, intSchool}) => {
      // takes inputs from here...
      const intern = new Intern(intName, intId, intEmail, intSchool);
      employees.push(intern);

      createCard();
    })
}
// puts all the info into html; view on server
function generateHTML() {
  generateOutput(render(employees))
}

// writes the info to an output html page
function generateOutput(data) {
  console.log(data)
  fs.writeFile(outputPath, data, (err) => {
    if (err) throw err;
    console.log("Successfully written to", outputPath);
  });
}