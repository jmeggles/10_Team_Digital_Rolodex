// define and export the Engineer class. This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
    // brings in info from Employee.js
    super(name, id, email);
        // aded github for engineers
        this.github = github
    }
    getRole() {
        return "Engineer";
    }
    // Engineers will have github input
    getGithub() {
        return this.github;
    }
}
// sends Engineer info 
module.exports = Engineer;