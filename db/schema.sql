DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE department (
  id INT AUTO_INCREMENT NOT NULL,
  name VARCHAR(30) NOT NULL);
  department_id INT(10)
  );

 

CREATE TABLE role(
id INT(10) AUTO_INCREMENT NOT NULL ,
title VARCHAR(30) NOT NULL,
salary decimal (8,0) NOT NULL,
department_id INT (10),
PRIMARY KEY (id),


CREATE TABLE employee (
id INT AUTO_INCREMENT NOT NULL,
first_name VARCHAR(30) NOT NULL,
last_name VARCHAR(30) NOT NULL,
role_id INT(10),
manager_id INT,
PRIMARY KEY (id)
);
