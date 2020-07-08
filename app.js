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
const OUTPUT_DIR = path.resolve(__dirname, "output");
//  team.html will be insIde output folder
const outputPath = path.join(OUTPUT_DIR, "team.html");
// calls the info
const render = require("./lib/htmlRenderer");
// getting an array of all inputted employee information
const employees = [];
// 
const HTML = render(employees);


// writes the info to an output html page
fs.writeFile(outputPath, HTML, (err) =>{
  console.log("File generated");
} )

// building the team with objects as classes/subclasses
function createTeam() {
     
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
          addManager();
        // if engineer is selected...or...
        case "Engineer":
          addEngineer();
        // if intern is selected.
        case "Intern":
          addIntern();
      }
    })
    
  // if manager is selected... 
  inquirer
    .prompt([
    {
        type: "input",
        name: "name",
        message: "Manager's name?"
    },
    {
        type: "input",
        name: "id",
        message: "Manager's employee Id?"
    },
    {
        type: "input",
        name: "email",
        message: "Manager's email?"
    },
    {
      type: "input",
      name: "phone",
      message: "Manager's office number?"
    }

    // if engineer is selected...
  inquirer
    .prompt([
    {
        type: "input",
        name: "name",
        message: "Engineer's name?"
    },
    {
        type: "input",
        name: "id",
        message: "Enginner's employee Id?"
    },
    {
        type: "input",
        name: "email",
        message: "Engineer's email?"
    },
    {
      type: "input",
      name: "github",
      message: "Engineer's github?"
    }
    
    // if intern is selected...
  inquirer
    .prompt([
    {
        type: "input",
        name: "name",
        message: "Intern's name?"
    },
    {
        type: "input",
        name: "id",
        message: "Intern's employee Id?"
    },
    {
        type: "input",
        name: "email",
        message: "Intern's email?"
    },
    {
      type: "input",
      name: "school",
      message: "Intern's school?"
    }
 
        
  
        
        // valIdate: async (input)=> {    
          //             if (input===Manager) {

          //                 }
          //             }
          //         }




// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
    // refer to class or subclass, an object needs to be created

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!
    //  push object into array after enigineer, manager, intern then generate and return block of html that will write to a file

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.
    //  

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provIded `render` function to work! ```
