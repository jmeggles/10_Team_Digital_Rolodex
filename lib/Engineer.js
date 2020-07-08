// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email) {
    // brings in info from Employee.js
    super(name, id, email, github);
        // this.name = name;
        // this.id = id;
        // this.email = email; 
        this.github = github
    }
    getRole() {
        return this.getRole;
    }
    // Engineers will have github input
    getGithub() {
        return "Engineer";
    }
}
// sends Engineer info 
module.exports = Engineer;