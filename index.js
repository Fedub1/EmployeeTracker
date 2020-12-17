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
			"Delete Employee",



			"exit"
		]
	})
		.then(function(answer) {
			switch (answer.action) {
				case "View all departments":
					departmentSearch();
					break;

				case "View all roles":
					roleSearch();
					break;

				case "View all employees":
					employeeSearch();
					break;

				case "Add department":
					addDepartment();
					break;
					  
				case "Add role":
					createRole();
					break;

				case "Add employee":
					createEmployee();
					break;
				case "Update employee":
						updateEmployee();
						break;
				case "Delete employee":
							deleteEmployee();
							break;		
				// case "exit":
				// 	connection.end();
				// 	break;

function departmentSearch(){
	console.log("Selecting all departments...\n");
	connection.query("SELECT * FROM department", function(err, data) { 
	
	if (err) throw err;
	console.table(data);
	roleSearch();
	})
}
function roleSearch(){
	console.log("Selecting all roles...\n");
	connection.query("SELECT * FROM role", function(err, data) { 
		
	if (err) throw err;
	console.table(data);
	employeeSearch();
	})
	}
function employeeSearch(){
	console.log("Selecting all employees...\n");
	connection.query("SELECT * FROM employee", function(err, data) { 
	if (err) throw err;
	console.table(data);
	addDepartment();
			}),
		
	
function addDepartment() {
	
	inquirer
	.prompt([
		{
			name: "department",
			type: "input",
			message: "Enter new department"
		}])

	.then(function(answer) {	
	connection.query(
		"INSERT INTO department (name) VALUES (?)", 
		[answer.department],
	function(err) {
	if (err) throw err;
	console.table("New Department added");
// Call addRole AFTER the INSERT completes

    addRole();
	});},
	// logs the actual query being run
	function addRole() {
		inquirer
	.prompt([
		{
			name: "title",
			type: "input",
			message: "Enter new role",

			name: "salary",
			type: "number",
			message: "Enter new salary",

			name: "department_id",
			type: "number",
			message: "Enter new department id"
		}])

				.then(function(answer) {	
				connection.query(
					"INSERT INTO role (title, salary, department_id) VALUES (?,?,?)", 
					[answer.title,
					 answer.salary,
					 answer.department_id],
				function(err) {
				if (err) throw err;
				console.table("New Role added");
	// Call addEmployee AFTER the INSERT completes
				
		addEmployee();
		})})});
		// logs the actual query 
						
		function addEmplyee() {
			inquirer
			.prompt([
				{
			name: "first_name",
			type: "input",
			message: "Enter employee first name",

			name: "last_name",
			type: "input",
			message: "Enter employee last name",

			name: "role_id",
			type: "number",
			message: "Enter employee role id",

			name: "manager_id",
			type: "manager",
			message: "Enter employee manager id"
			}])
		}}
			.then(function(answer) {	
				connection.query("INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)", res.role),
			[answer.first_name,
			answer.last_name,
			answer.role_id,
			answer.manager_id],
			function(err) {
				if (err) throw err;
				console.table("New employee added");
			updateEmployee();
			}},
			
			// Call updateEmployee AFTER the INSERT completes
			function updateEmployee() {
				inquirer
				.prompt([
					{
				message: "Enter first name of employee you want to update",		
				name: "first_name",
				type: "input",

				message: "Enter employee new last name",
				name: "last_name",
				type: "input"
					}])
				.then(function(answer) {	
					connection.query("UPDATE employee SET last_name WHERE first_name =?", 
				[answer.last_name,
				answer.first_name],
				function(err) {
					if (err) throw err;
					console.table("New employee added");
				deleteEmployee();
	
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
					  
					  function(err) {
						if (err) throw err;
						console.table("Deleted Employee");
						
						connection.end();
					  		
					  };});}})})},)}}})}