const mysql = require('mysql')
const inquirer = require('inquirer')
const cTable = require('console.table');


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
connection.connect(function(err) {
	if (err) throw err;
				
	console.log("connected as id " + connection.threadId + "\n");
	runSearch();
});
	
 function runSearch() {
	inquirer
	.prompt({
		name: "action",
		type: "list",
		message: "What would you like to do?",
		choices: [
			"View all departments",
			"View all roles",
			"View all employees",
			"Add department",
			"Add role",
			"Add employee",
			"Update employee",
			"Delete employee",



			"exit"
		],
		
	})
		.then(function(answer) {
			switch (answer.action) {
				case "View all departments":
					departmentSearch()
					break;

				case "View all roles":
					roleSearch()
					break;

				case "View all employees":
					employeeSearch()
					break;

				case "Add department":
					addDepartment()
					break;
					  
				case "Add role":
					addRole()
					break;

				case "Add employee":
					addEmployee()
					break;
				case "Update employee":
						updateEmployee()
						break;
				case "Delete employee":
							deleteEmployee();
							break;		
				case "exit":
					connection.end();
					break;
			}
		})
	}

function departmentSearch(){
	connection.query("SELECT * FROM department", function(err, data) { 
	if (err) throw err;
	console.table(data);
	runSearch();
	})
}

function roleSearch(){
	connection.query("SELECT * FROM role", function(err, data) { 
	if (err) throw err;
	console.table(data);
	runSearch();
	})
	}
function employeeSearch(){
	connection.query("SELECT * FROM employee", function(err, data) { 
	if (err) throw err;
	console.table(data);
	runSearch();
			})
}
		
function addDepartment() {
	
	inquirer
	.prompt([
		{
			type: "input",
			name: "department",
			message: "Enter new department"
		}])

	.then(function(answer) {	
	connection.query(
		"INSERT INTO department (name) VALUES (?)", 
		[answer.department],
	function(err, data) {
	if (err) throw err;
	console.table(data);
// Call addRole AFTER the INSERT completes

runSearch();
	})
})
}
	// logs the actual query being run
	function addRole() {
		inquirer
	.prompt([
		{
			message: "Enter new role",
			type: "input",
			name: "title"
			
		},
		{
			message: "Enter new salary",
			type: "number",
			name: "salary"
		},
		{
			message: "Enter new department id",
			type: "number",
			name: "department_id"
			
		}])

				.then(function(answer) {	
				connection.query(
					"INSERT INTO role (title, salary, department_id) VALUES (?,?,?)", 
					[answer.title,
					 answer.salary,
					 answer.department_id],
				function(err, data) {
				if (err) throw err;
				console.table(data);
	// Call addEmployee AFTER the INSERT completes
					
				
	runSearch();
		})
	})	
	}
		// logs the actual query 
						
		function addEmployee() {
			inquirer
			.prompt([
				{
				type: "input",
				name: "first_name",
				message: "Enter employee first name"
				},
				{
			
				type: "input",
				name: "last_name",
				message: "Enter employee last name"
				},
				{
				type: "number",
				name: "role_id",
				message: "Enter employee role id"
				},
				{
				type: "number",
				name: "manager_id",
				message: "Enter employee manager id"
			}])
		
			.then(function(answer) {	
				connection.query("INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)", 
			[answer.first_name,
			answer.last_name,
			answer.role_id,
			answer.manager_id],
			function(err,data) {
				if (err) throw err;
				console.table("Added Employee");
			
				runSearch();
			})
		})
		
			}
			
			// Call updateEmployee AFTER the INSERT completes
			function updateEmployee() {
				inquirer
				.prompt([
					{
				message: "Enter first name of employee you want to update",		
				name: "first_name",
				type: "input"
					},
					{
				message: "Enter employee new last name",
				name: "last_name",
				type: "input"
					}])
				.then(function(answer) {	
					connection.query("UPDATE employee SET last_name WHERE first_name =?", 
				[answer.last_name,
				answer.first_name],
				function(err,data) {
					if (err) throw err;
					console.table(data);
				
					runSearch();
			})
		})
		}
				function deleteEmployee() {
					inquirer
				.prompt([
					{
				message: "Enter first name of employee you want to delete",		
				name: "first_name",
				type: "input",
					}])
					.then(function(answer) {
					  "DELETE FROM employee  WHERE first_name = ?",
					  [answer.first_name],
					  
					  function(err, data) {
						if (err) throw err;
						console.table(data);
						
						connection.end();
					  		
					  };})}