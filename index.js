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
			"Add employee",
			"Add department",
			"Add role",
			"Delete employee",
			"Delete department",
			"Delete role",
			"Update role"
			
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

				case "Add employee":
					addEmployee();
					break;
					  
				case "Add department":
					addDepartment();
					break;

				case "Add role":
					addRole();
					break;

				case "Delete employee":
					deleteEmployee();
					break;

				case "Delete department":
					deleteDepartment();
					break;
					
				case "Delete role":
					deleteRole();
					break;

				case "Update Role":
					updateRole();
					break;

				
		// 		case "exit":
        // connection.end();
        // break;
			}
		});
	}
		
	// connection.connect(function(err) {
	// 		if (err) throw err;
	// 		console.log("connected as id " + connection.threadId + "\n");
	// 		employeeSearch();
	// 	  });

function employeeSearch() {
	// console.log("Selecting all employees...\n");
	connection.query("SELECT * FROM employee", function(err, data) {

	//   if (err) throw err;
	  // Log all results of the SELECT statement
	  console.table(data);
	  employeeSearch();
	});
  // logs the actual query being run
//   console.log(res);
};
  function departmentSearch() {
	// console.log("Selecting all department...\n");
	connection.query("SELECT * FROM department", function(err, data) {
	//   if (err) throw err;
	  // Log all results of the SELECT statement
	  console.table(data);
	  departmentSearch();
	});
// 	//   connection.end();
};
  // logs the actual query being run
//   console.log(query.sql);

  function roleSearch() {
	// console.log("Selecting all roles...\n");
	connection.query("SELECT * FROM role", function(err, data) {
	//   if (err) throw err;
	  // Log all results of the SELECT statement
	  console.table(data);
	  roleSearch;
	//   connection.end();
	});
    // logs the actual query being run
	// console.log(query.sql);
 };
//   function addEmployee() {
// 	  console.log("Adding a new employee...\n");
// 	  var query = connection.query(
// 		"INSERT INTO employee SET ?",
// 	  {
// 	 first_name: "Nick",
// 	 last_name: "Tennis",
// 	 role_id: 1,
// 	 manager_id: 4
// },
// function(err, res) {
//   if (err) throw err;
//   console.log(res.affectedRows + " employee inserted!\n");
//   // Call addEmployee AFTER the INSERT completes
//   addDepartment();
// }
// 	  );
//   // logs the actual query being run
//   console.log(query.sql);
// }
// function addDepartment() {
// console.log("Adding new Department...\n");
// var query = connection.query(
// "INSERT INTO department SET ?",
// {
// id: "6",
 
// },
// function(err, res) {
// if (err) throw err;
// console.log(res.affectedRows + " department inserted!\n");
// // Call addRole AFTER the INSERT completes
// addRole();
// }
// 	);
// // logs the actual query being run
// console.log(query.sql);
// }

//   function addRole() {
// 	console.log("Adding new Role...\n");
// 	var query = connection.query(
// 	  "INSERT INTO role SET ?",
//     {
//    title: "VP of Marketing",
//    salary: 100000,
//    department_id: 6
   
// },
// function(err, res) {
// if (err) throw err;
// console.log(res.affectedRows + " role inserted!\n");
// // Call updateEmployee AFTER the INSERT completes
// updateEmployee();
// }
// 	);
// // logs the actual query being run
// console.log(query.sql);

// }

// function updateEmployee() {
// 	console.log("Updating employee roleId...\n");
// 	var query = connection.query(
// 	  "UPDATE employee SET  role_id = '5' WHERE role_id = '2'";
// 	  [
// 		{
// 		  first_name: "Venus",
// 		},
// {
// 		 last_name: "Williams",
// 	    },
// 		{
// 		  role_id: 6
// 		},
// 		{
// 		 manager_id: 6
// 	  }
// 	  ],
// 	  function(err, res) {
// 		if (err) throw err;
// 		console.log(res.affectedRows + " employee updated!\n");
// 		// Call updateEmployee AFTER the UPDATE completes
// 		deleteEmployee();
// 	  }
// 	);
// // logs the actual query being run
// console.log(query.sql);

// 	  function deleteEmployee() {
// 		console.log("Deleting employee...\n");
// 		var query = connection.query(
// 		  "DELETE FROM employee WHERE first_name = 'John'";
// 		  {
// 			// first_name: "John",
// 			// last_name: "McEnroe",
// 			// role_id:5,
// 			// manager_id:5

// 		  }
// 		  function(err, res) {
// 			if (err) throw err;
// 			console.log(res.affectedRows + " employee deleted!\n");
// 			// Call deleteRole AFTER the DELETE completes
// 			deleteRole();
// 		  }
// 		);

// 	  // logs the actual query being run
// 	  console.log(query.sql);
// 	}	
	  
// 	  function deleteRole() {
// 		console.log("Deleting role_id2 ...\n");
// 		var query = connection.query(
// 		  "DELETE FROM role SET",
// 		  {
// 			role_id: 2
// 		  },
// 		  function(err, res) {
// 			if (err) throw err;
// 			console.log(res.affectedRows + " role_id2 deleted!\n");
// 			// Call readRole AFTER the DELETE completes
// 			deleteManager();
// 		  }
// 		);
// 	  // logs the actual query being run
//   console.log(query.sql);

// 	  function deleteManager() {
// 		console.log("Deleting manager 4...\n");
// 		var query = connection.query(
// 		  "DELETE FROM employee SET ?",
// 		  {
// 			manager_id: 4
// 		  },
// 		  function(err, res) {
// 			if (err) throw err;
// 		    // Log all results of the SELECT statement
// 			console.log(res);
// 			connection.end();
// 		  });
		
