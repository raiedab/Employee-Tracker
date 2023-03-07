DROP DATABASE IF EXISTS tracker_db;
CREATE DATABASE tracker_db;

USE tracker_db;

CREATE TABLE department (
department_id INT AUTO_INCREMENT PRIMARY KEY,
title VARCHAR(30)
);

CREATE TABLE employee_role (
ID INT NOT NULL PRIMARY KEY AUTO_INCREMENT, 
title VARCHAR(30),
salary DECIMAL,
department_name INT
FOREIGN KEY (department_name),
REFERENCES department(department_name)
);

CREATE TABLE employee (
id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
first_name VARCHAR (30),
last_name VARCHAR (30),
role_id INT,
manager_id INT REFERENCES employee(id)
FOREIGN KEY (role_id),
REFERENCES employeeRole(role_id),
REFERENCES employee(employee_id)
);