// pulls info from Manager.js file
const Manager = require("./lib/Manager");
// pulls info from Engineer.js file
const Engineer = require("./lib/Engineer");
// pulls info from Intern.js file
const Intern = require("./lib/Intern");
// npm pkg
const inquirer = require("inquirer");
// follows 
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
// send employee array to html output 
const HTML = render(employees);

// building the team with objects as classes/subclasses
function createCard() {

  // list of choices for user to choose from.  
  inquirer
    .prompt([
      {
        type: "list",
        name: "title",
        message: "Title of team member?",
        choices: [
          "Manager",
          "Engineer",
          "Intern",
          "No more members."
        ]
      }
    ])

    // depending on which title is chosen, the next set of required info will be asked.
    .then(selection => {
      switch (selection.title) {
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
          break
      }
    })

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
      ]);
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
    ]);
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
  }
}
// module,exports = employees
// createCard();

// answers are written to the markdown file
.then(answer => generateOutput(answer))

// writes the info to an output html page
function generateOutput(data) {
fs.writeFile(outputPath, HTML, (err) => {
  console.log("File generated");
});
}
// generate and return a block of HTML including templated divs for each employee!
    //  push object into array after enigineer, manager, intern then generate and return block of html that will write to a file

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.

// for the provIded `render` function to work! ```
  
