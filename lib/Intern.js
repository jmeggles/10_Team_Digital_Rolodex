// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email) {
    // brings in info from Employee.js
    super(name, id, email, school);
        // aded school for Interns
        this.school = school
    }
    getRole() {
        return "Intern";
    }
    // Interns will have school input
    getSchool() {
        return this.getSchool;
    }
}
// sends Intern info 
module.exports = Intern;