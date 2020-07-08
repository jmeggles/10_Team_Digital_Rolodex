const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
// const path = require("path");
const fs = require("fs");

// const OUTPUT_DIR = path.resolve(__dirname, "output");
// //  team.html will be insIde output folder
// const outputPath = path.join(OUTPUT_DIR, "team.html");

// 
const render = require("./lib/htmlRenderer");

// // when done with objet in array, call the function
//     const teamArray = [];

//     const HTML = render(teamArray);

//     fs.re

const teamMembers = []

function createTeam() {

  inquirer
    .prompt([
      // list of choices for user to choose from.  
      {
        type: "list",
        name: "memberChoice",
        message: "Title of team member?",
        choices: [
          "Manager",
          "Engineer",
          "Intern",
        ]
      }

    ])
    // depending on which title is chosen, the next set of required info will be asked.
    .then(userChoice => {
      switch (userChoice.memberChoice) {
        case "Manager":
          addManager();

        case "Engineer":
          addEngineer();

        case "Intern":
          addIntern();
      }
    })

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
