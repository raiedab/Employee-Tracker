DROP DATABASE IF EXISTS tracker_db;
CREATE DATABASE tracker_db;
USE tracker_db;

CREATE TABLE department (
  department_id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30)
);

CREATE TABLE roles (
  roles_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, 
  title VARCHAR(30),
  salary DECIMAL,
  department_id INT,
  FOREIGN KEY (department_id) REFERENCES department(department_id)
);

CREATE TABLE employee (
  employee_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  roles_id INT,
  manager_id INT,
  FOREIGN KEY (roles_id) REFERENCES roles(roles_id),
  FOREIGN KEY (manager_id) REFERENCES employee(employee_id)
);
