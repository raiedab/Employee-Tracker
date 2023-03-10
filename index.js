const mysql = require('mysql2');
const inquirer = require('inquirer');
const consoleTable = require('console.table');
require('dotenv').config();

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Amani!630',
    database: 'tracker_db'
  },

  console.log(`Connected to the tracker_db database.`));

  function start() {
  inquirer.prompt([{
        type: 'list',
        message: 'Make a selection',
        name: 'main_directory',
        choices: [
          'Add an Employee',
          'Add a Role',
          'Add a Department',
          'View All Employees',
          'View All Roles',
          'View All Departments',
        ]
      },
    ])
    .then((response) => {
      switch (response.main_directory) {
        case 'View All Departments':
          viewDepartment();
          break;
        case 'View All Employees':
          viewEmployee();
          break;
        case 'View All Roles':
          viewEmployeeRoles();
          break;
        case 'Add a Department':
          addDepartment();
          break;
        case 'Add a Role':
          addRoles();
          break;  
        case 'Add an Employee':
          addEmployee();
        case 'Update employee role':
          updateEmployee();
          break;         
      }
    })
};


const viewDepartment = () => {
  connection.query('SELECT * FROM department', (err, res) => {
    if (err) throw err;
    console.table(res);
    start();
  });
};

const viewEmployeeRoles = () => {
  connection.query('SELECT * FROM roles', (err, res) => {
    if (err) throw err;
    console.table(res);
    start();
  });
}

const viewEmployee = () => {
  console.log("Viewing all employees...");
  connection.query( 'SELECT * FROM employee', (err, res) => {
      if (err) {
        console.log(err);
        throw err;
      }
      console.table(res);
      start();
    });
};


const addDepartment = () => {
  inquirer.prompt([
    {
      name: 'department',
      type: 'input',
      message: 'What is the department name?',
    },
  ]).then(answer => {
    connection.query(
      'INSERT INTO department (name) VALUES (?)',
      [answer.department],
      (err, res) => {
        if (err) throw err;
        console.log('Department added!');
        start();
      }
    );
  });
};

const addRoles = () => {
  inquirer.prompt([
    {
      name: 'employeeRolesTitle',
      type: 'input',
      message: 'What is the roles title?',
    },
    {
      name: 'salary',
      type: 'input',
      message: 'What is the salary for this role?',
    },
    {
      name: 'department_nameId',
      type: 'input',
      message: 'What is the department ID number?',
    },
  ]).then(answer => {
    connection.query(
      'INSERT INTO employeeRoles (title, salary, department_id) VALUES (?, ?, ?)',
      [answer.rolesTitle, answer.salary, answer.deptId],
      (err, res) => {
        if (err) throw err;
        console.log('Roles added!');
        start();
      }
    );
  });
};

const addEmployee = () => {
  inquirer.prompt([
    {
      name: 'nameFirst',
      type: 'input',
      message: "What is the employee's first name?",
    },
    {
      name: 'nameLast',
      type: 'input',
      message: "What is the employee's last name?",
    },
    {
      name: 'rolesId',
      type: 'input',
      message: "What is the employee's role id?",
    },
    {
      name: 'managerId',
      type: 'input',
      message: 'What is the manager Id?',
    },
  ]).then(answer => {
    connection.query(
      'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)',
      [answer.nameFirst, answer.nameLast, answer.rolesId, answer.managerId],
      (err, res) => {
        if (err) throw err;
        console.log('Employee added!');
        start();
      }
    );
  });
};

const updateEmployee = () => {
  inquirer.prompt([
    {
      name: 'id',
      type: 'input',
      message: 'Enter employee id',
    },
    {
      name: 'rolesId',
      type: 'input',
      message: 'Enter new employees role id',
    },
  ]).then(answer => {
    connection.query(
      'UPDATE employee SET employee_role_id=? WHERE id=?',
      [answer.rolesId, answer.id],
      function (err, res) {
        if (err) throw err;
        console.log('Employee updated!');
        start();
      }
    );
  });
};


start();