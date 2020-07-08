// define and export the Manager class. This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
    // brings in info from Employee.js
    super(name, id, email);
        // office number for manager only
        this.officeNumber = officeNumber
    }
    getRole() {
        return "Manager";
    }
    // Manager will have office number input
    getOfficeNumber() {
        return this.getRole;
    }
}
// sends Manager info 
module.exports = Manager;