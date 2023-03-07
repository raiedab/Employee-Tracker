INSERT INTO department (title) VALUES 
('Sales'),
('Engineering'), 
('Finance'), 
('Legal');

INSERT INTO roles (title, salary, department_id) VALUES
('Accountant', 97000, 3), 
('Account Manager', 110000, 3), 
('Salesperson', 50000, 1),
('Sales Lead', 80000, 1), 
('Software Engineer', 113000, 2),
('Lead Engineer', 136000, 2), 
('Lawyer', 200000, 4),
('Legal Team Lead', 265000, 4); 

INSERT INTO employee (first_name, last_name, roles_id, manager_id) VALUES
('Marcus', 'Rashford', 2, 1),
('Bruno', 'Fernandez', 3, NULL),
('Alejandro', 'Garnacho', 5, 4),
('Jaden', 'Sancho', 6, NULL),
('Luke', 'Shaw', 8, 7),
('David', 'DeGea', 7, NULL),
('Rafael', 'Varane', 1, 2),
('Christian', 'Eriksen', 2, NULL);