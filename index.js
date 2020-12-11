var mysql = require('mysql');
var inquirer = require('inquirer');


// const SearchQuery = {

//     searchEmployees: "Query All Employees",
//     searchDepartment: "Query Employees by Department",
//     searchManager: "Query Employees by Manager",
//     addEmployee: "Add Employee",
//     removeEmployees: "Delete Employee",
//     UpdateRole: "Amend Role",
//     UpdatedManager: "Amend Manager",
// };

//Create Connection
const connection = mysql.createConnection({
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

	console.log('Connected to MySQL!!');
	runSearch();
});
// const app = inquirer();

// connection.get('/createdb', (req, res) => {

	let mysequel = "CREATE DATABASE node_mysequel";
	connection.query(mysequel, err => {
		if (err) {
			throw err;
		}
		res.send('Database Created');
	});


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

	.then(function(answer) {
		switch (answer.action) {
			case "Query all employees":
				EmployeesQuery();
				break;

			case "Query employees by department":
				DepartmentQuery();
				break;

			case "Query employees by manager":
				QueryManagers();
				break;

			case "Add employee":
				AddEmployees();
				break;

			case "Delete employee":
				DeleteEmployees();
				break;

			case "Update Role":
				UpdateRole();
				break;

			case "Update Manager":
				UpdateManager();
				break;


		}
	});
}

function employeeQuery() {
	inquirer
		.prompt({
				name: "employee",
				type: "input",
				message: "What employee would you like to search for?"
					.then(function(answer) {
							connection.query("SELECT first_name, last_name, role, manager FROM department ?", {
								// connection.query(query, { employee: answer.employee }, 

								function(err, res) {
									if (err) throw err;
									for (var i = 0; i < res.length; i++) {
										console.log("first_name: " + res[i].last_name + " || Role: " + res[i].role + " || Manager: " + res[i].manager);
									}
									runSearch();
								}
							});

							connection.employeequery("SELECT * FROM employee", function(err, data) {
									console.table(data);
									runSearch();
								}),
								function departmentQuery() {
									connection.query("SELECT * FROM department", function(err, data) {
											console.table(data);
											runSearch();
										}),
										function RoleQuery() {
											connection.query("SELECT * FROM role", function(err, data) {
													console.table(data);
													runSearch();
												}),
												function addEmployee() {
													Connection.query("SELECT * FROM employee", function(err, data) {
															console.table(data);
															runSearch();
														}),




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
																.then(function(res) {
																	connection.query = `INSERT INTO employee (first_name, last_name, roleId, managerId)
        Values: ?, ?, ?, ?)`,

																		{firstName_name: res.firstName,
																			lastName_name: res.lastName,
																			roleId: res.roleId,
																			managerId: res.managerId
                                                                        },

																		function(err, res) {
																			if(err) throw err;
																			console.table("Successfully Added Employee");
																		
                                                                        runSearch();
                                                                },                                                                
														
												

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
													.then(function(res) {
														connection.query = `DELETE INTO employee (first_name, last_name, roleId, managerId)
    Values: ?, ?, ?, ?)`,

                                                        {
                                                            firstName_name: res.firstName,
                                                            lastName_name: res.lastName,
                                                            roleId: res.roleId,
                                                            managerId: res.managerId
                                                        },


															function(err, res) {
																if (err) throw err;
																console.table("Successfully Deleted Employee");
															};
                                                            runSearch();
													});
											}
										},


									function updateRole() {
										inquirer.prompt([
                                            {
												name: "role",
												type: "input",
												message: "Enter employee roleId",



											}, {

												message: "Enter employees annual salary",
												type: "number",
												name: "annual salary",


											}, {
												message: "Enter employees departmentId",
												type: "number",
												name: "departmentId",


											},

										]);
									}
								
								.then(function(res) {
										connection.query = `INSERT INTO roles (title, salary, departmentId)
            Values: ?, ?, ?, ?)`,

											{name: res.title,
											annual_salary: res.salary,
											department_Id: res.departmentId
											},

											function(err, res) {
												if (err) throw err;
												console.table("Successfully Inserted");
												runSearch();
											};


										// function UpdateEmployeeRole() {

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


												},

											]);
										}
									}
									.then(function(res) {
											connection.query = `INSERT INTO roles (managerId, salary, departmentId)
                Values: ?, ?, ?, ?)`,

                                            {
                                                manager_name: res.manager,
                                                annual_salary: res.salary,
                                                roleId: res.roleId,
                                                departmentId: res.departmentId
                                            },


												function(err, data) {
													if(err) throw err;
													console.table("Successfully Updated Manager");
													connection.end();
                                                }},),),)}}}}},),})};