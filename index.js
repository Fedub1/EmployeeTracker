var mysql = require('mysql');
var inquirer = require('inquirer');

//Create Connection
var connection = mysql.createConnection({
	host: "localhost",

	// Your port; if not 3306
	port: 3306,

	// Your username
	user: "root",

	// Your password
	password: "root",
	database: "employee_db"
});
//Connect to MySql
connection.connect(function (err) {
	if (err) throw err;

	console.log('Connected to MySQL!!');
	runSearch();
});
// const app = inquirer();

function runSearch() {
	inquirer
	.prompt({
		name: "action",
		type: "list",
		message: "What would you like to do?",
		choices: [
			"Query all employees",
			"Query departments",
			"Query employees by manager",
			"Add employee",
			"Delete employee",
			"Update role",
			"Update manager",
			"exit"
		]
	})
		.then(function (answer) {
			switch (answer.action) {
				case "Query all employees":
					employeeSearch();
					break;

				case "Query employees by department":
					departmentSearch();
					break;

				case "Query employees by roles":
					roleSearch();
					break;

				case "Add employee":
					addEmployee();
					break;

				case "Add deparment":
					addDepartment();
					break;

				case "Add role":
					addRole();
					break;

				case "Update Role":
					updateRole();
					break;

				case "Update Manager":
					updateManager();
					break;

			
				case "Delete department":
					deleteDepartment();
					break;

				case "Delete role":
					deleteEmployee();
					break;

				case "Delete employee":
					deleteRole();
					break;
				case "exit":
        connection.end();
        break;
			}
		});
}

function employeeSearch() {
	connection.query("SELECT * FROM employee", function (err,data){
		console.table(data);
		runSearch();

	})
}


function departmentSearch() {
	connection.query("SELECT * FROM department", function (err,data){
		console.table(data);
		runSearch();

	})
}
function roleSearch() {
	connection.query("SELECT * FROM role", function (err,data){
		console.table(data);
		runSearch();

	})
}



function addEmployee() {
	inquirer.prompt([{
type: "input",
name: "firstName",
message: "Enter employees first name?",

}, {
type: "input",
name: "lastName",
message: "Enter employees last name?",

}, {
type: "input",
name: "roleId",
message: "Enter employee role id",

}, {
type: "input",
name: "managerId",
message: "Enter employee manager id",

}])
.then(function (err) {
connection.query( 'INSERT INTO employee (first_name, last_name, roleId, managerId')
if (err) throw err;
console.table("Successfully Added Employee");
runSearch();
})
}

function addDepartment() {
	inquirer.prompt([{
type: "input",
name: "department",
message: "Enter new department",

},])
.then(function (res) {
connection.query( 'INSERT INTO department (name) VALUES (?)' , [res.department],function(err,data){
if (err) throw err;
console.table("Successfully Added Department");
runSearch();
})
});

function addRole() {
	inquirer.prompt([{
type: "input",
name: "title",
message: "Enter employees title",

}, {
type: "input",
name: "salary",
message: "Enter annual salary",

}, {
type: "input",
name: "department_id",
message: "Enter department id",

}])
.then(function (res) {
connection.query('INSERT INTO roles (title,salary, department_id) VALUES (?,?,?)' , [res.title, res.salary. re.department_id],function(err,data){
// if (err) throw err;
console.table("Successfully Added Role");
runSearch();
})
});
function updateRole() {
inquirer.prompt([{
name: "role",
type: "input",
message: "which employee role ",



}, {
message: "Enter employees annual salary",
type: "number",
name: "salary",
}, {
message: "Enter employees departmentId",
type: "number",
name: "department_id",

},

])
.then(function (res) {
	connection.query( 'INSERT INTO role(title, salary, department_id')
	if (err) throw err;
	console.table("Successfully Added Employee");
	runSearch();
	})
	};

};
function deleteEmployee() {
inquirer.prompt([{
name: "firstName",
type: "input",
message: "Enter employees first name",

}, {

name: "lastName",
type: "input",
message: "Enter employees last name",

}, {
name: "roleId",
type: "input",
message: "Enter employee role id",

}, {
name: "managerId",
	type: "input",
message: "Enter employee manager id",

}])
.then(function (res) {
connection.query = `DELETE INTO employee (first_name, last_name, roleId, managerId)
Values: ?, ?, ?, ?)`,

{
firstName_name: res.firstName,
lastName_name: res.lastName,
roleId: res.roleId,
managerId: res.managerId
},


function (err, res) {
if (err) throw err;
console.table("Successfully Deleted Employee");
};
runSearch();
});

function updateManager() {
inquirer.prompt([{
name: "role",
type: "input",
message: "Enter manager Id",

}])

.then(function (res) {
connection.query = `INSERT INTO roles (title, salary, departmentId)
  Values: ?, ?, ?, ?)`,

function (err, res) {
if (err) throw err;
console.table("Successfully Inserted Manager");
runSearch();
};


function UpdateEmployeeRole() {

function updateManager() {
inquirer.prompt([{
name: "manager",
type: "input",
message: "Enter managerId",

}, {

message: "Enter employees first name?",
type: "number",
name: "annual salary",


}, {
message: "Enter departmentId",
	type: "number",
name: "departmentId",


}])

.then(function (res) {
connection.query = `INSERT INTO roles (managerId, salary, departmentId)
Values: ?, ?, ?, ?)`,

{
manager_name: res.manager,
annual_salary: res.salary,
roleId: res.roleId,
departmentId: res.departmentId
},


function (err, data) {
if (err) throw err;
console.table("Successfully Updated Manager");
connection.end();


		
			

function updateManager() {
inquirer
.prompt({
name: "employee",
type: "input",
message: "Enter name of new employee"
.then(function (answer) {
var query = "SELECT * FROM employee" 
var query = "SELECT * FROM employee" 
connection.query(query, function (err, data) {
										

})})})}};})};}})}}};
