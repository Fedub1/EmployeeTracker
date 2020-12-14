DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
  );

CREATE TABLE role(
id INT(10) AUTO_INCREMENT NOT NULL ,
title VARCHAR(500) NOT NULL,
salary decimal (8,0) NOT NULL,
department_id INT (10),
PRIMARY KEY (id),
FOREIGN KEY (department_id) REFERENCES department(id)

);
CREATE TABLE employee (
id INT NOT NULL AUTO_INCREMENT,
first_name VARCHAR(30) NOT NULL,
last_name VARCHAR(30) NOT NULL,
role_id INT(10),
manager_id INT,
PRIMARY KEY (id),
FOREIGN KEY (role_id) REFERENCES department(id),
FOREIGN KEY (manager_id) REFERENCES department(id)
);
