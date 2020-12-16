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
	// console.log("connected as id " + connection.threadId + "\n");
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
			"Query all departments",
			"Query all roles",
			// "Add employee",
			// "Add department",
			// "Add role",
			// "Delete employee",
			// "Delete department",
			// "Delete role",
			// "Update role"
			
			// "exit"
		]
	})
		.then(function (answer) {
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

				// case "Add employee":
				// 	addEmployee();
				// 	break;
					  
				// case "Add department":
				// 	addDepartment();
				// 	break;

				// case "Add role":
				// 	addRole();
				// 	break;

				// case "Delete employee":
				// 	deleteEmployee();
				// 	break;

				// case "Delete department":
				// 	deleteDepartment();
				// 	break;
					
				// case "Delete role":
				// 	deleteRole();
				// 	break;

				// case "Update Role":
				// 	updateRole();
				// 	break;

				
		// 		case "exit":
        // connection.end();
        // break;
			}
		});
	}
		

function employeeSearch() {
	// console.log("Selecting all employees...\n");
	connection.query("SELECT * FROM employee", function(err, data) {
		if (err) throw err;
	  console.table(data);
	  runSearch();
	});

};
  function departmentSearch() {
	// console.log("Selecting all department...\n");
	connection.query("SELECT * FROM department", function(err, data) {
		if (err) throw err;
	  console.table(data);
	  runSearch();
	});
};
 
  function roleSearch() {
	// console.log("Selecting all roles...\n");
	connection.query("SELECT * FROM role", function(err, data) {
		if (err) throw err;
	  console.table(data);
	  runSearch;
	  connection.end();
	});}
