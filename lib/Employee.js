// define and export the Employee class
class Employee {
    constructor(name, id, email) {
        // base info for all job titles
        this.name = name;
        this.id = id;
        this.email = email; 
    }
    getName() {
        return this.name;
    }
    getEmail() {
        return this.email;
    }
    getId() {
        return this.id;
    }
    getRole() {
        return "Employee";
    }
}
// sends info
module.exports = Employee;
