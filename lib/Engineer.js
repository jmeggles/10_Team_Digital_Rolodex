// define and export the Engineer class. This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email) {
    // brings in info from Employee.js
    super(name, id, email, github);
        // aded github for engineers
        this.github = github
    }
    getRole() {
        return "Engineer";
    }
    // Engineers will have github input
    getGithub() {
        return this.getGithub;
    }
}
// sends Engineer info 
module.exports = Engineer;