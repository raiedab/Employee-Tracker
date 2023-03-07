INSERT INTO department (title) VALUES 
('Sales'),
('Enginering'), 
('Finance'), 
('Legal');


INSERT INTO employeeRoles (title, salary, department_name) VALUES

('Accountant', 97000, 1), 
('Account Manager', 110000, 1), 
('Salesperson', 50000, 2),
('Sales Lead', 800000, 2), 
('Software Engineer', 113000, 3),
('Lead Engineer', 136000, 3), 
('Lawyer', 200000, 4),
('Legal Team Lead', 265000, 4); 


INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
('Marcus', 'Rashford', 1, 2),
('Bruno', 'Fernandez', 2, NULL),
('Alejando', 'Garnacho', 3, 4),
('Jaden', 'Sancho', 4, NULL),
('Luke', 'Shaw', 5, 6),
('David', 'DeGea', 6, NULL),
('Rafael', 'Varane', 7, 8),
('Christian', 'Errikson', 8, Null);
