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
				
	// console.log("connected as id " + connection.threadId + "\n");
	runSearch();
});
	
 function runSearch() {
	inquirer
	.prompt({
		name: "action",
		type: "list",
		message: "What would you like to do?",
		choices: [
			"Query all employees",
			"Query all departments",
			"Query all roles",
			// "exit"
		]
	})
		.then(function(answer) {
			switch (answer.action) {
				case "View all employees":
					employeeSearch();
					break;

				case "View all departments":
					departmentSearch();
					break;

				case "View all roles":
					roleSearch();
					break;

				// case "exit":
				// 	connection.end();
				// 	break;

function employeeSearch(){
	console.log("Selecting all employee...\n");
	connection.query("SELECT * FROM employee", function(err, data) { 
	
	// if (err) throw err;
	cTable(data);
	departmentSearch();
	})
}
function departmentSearch(){
		console.log("Selecting all department...\n");
		connection.query("SELECT * FROM department", function(err, data) { 
		
		// if (err) throw err;
		cTable(data);
		roleSearch();
		})
	}
function roleSearch(){
			console.log("Selecting all role...\n");
			connection.query("SELECT * FROM role", function(err, data) { 
			// if (err) throw err;
			cTable(data);
			  
			})
}};},)};
