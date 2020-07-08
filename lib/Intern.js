// define and export the Intern class.  This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
    // brings in info from Employee.js
    super(name, id, email);
        // aded school for Interns
        this.school = school
    }
    getRole() {
        return "Intern";
    }
    // Interns will have school input
    getSchool() {
        return this.School;
    }
}
// sends Intern info 
module.exports = Intern;