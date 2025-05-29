const mongoose = require("mongoose");

// Step 1: Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/company");

// Step 2: Define the Employee Schema
const employeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  salary: { type: Number, required: true },
});

// Step 3: Create the Employee Model
const Employee = mongoose.model("Employee", employeeSchema);

// Step 4: Insert Data into the Collection
// async function addEmployee(name, salary) {
//   const employee = new Employee({ name, salary });
//   await employee.save();
//   console.log("Employee Added:", employee);
// }

// Step 5: Retrieve Data from the Collection
async function getEmployees() {
  const employees = await Employee.findOne();
  console.log("Employees List:", employees.name);
}

// Step 6: Execute Functions
(async () => {
  // await addEmployee("John Doe", 50000); // Add an employee
  await getEmployees(); // Fetch all employees
  mongoose.connection.close(); // Close connection
})();
