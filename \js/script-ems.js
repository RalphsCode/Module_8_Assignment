// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
//*******************************************************************************************
let empForm     = document.querySelector('#addForm');
let empTable    = document.getElementById("empTable");
let empCount    = document.querySelector('#empCount');
let tableBody   = document.querySelector('#empTable tbody');
let employees = []

// CREATE AN ARRAY OF EMPLOYEES
//*******************************************************************************************
if  (localStorage.employees) {                                                  // CHECK STORAGE FOR AN EXISTING ARRAY
    employees = JSON.parse(localStorage.getItem('employees'));
    }                                                                           // IF EXISTING ARRAY - USE THAT
else {
    employees = [                                                                // IF NO ARRAY IN STORAGE CREATE ONE
        ['00001111', 'Ben Dover', '1111', 'bwire@employer.org', 'Executive'],
        ['00002222', 'Sue Flay', '2222', 'sflay@employer.org', 'Administration'],
        ['00003333', 'Polly Graph', '3333', 'pgraph@employer.org', 'Marketing'],
        ['00004444', 'Ima Genius', '4444', 'igenius@employer.org', 'Sales'],
        ['00005555', 'Anita Bath', '5555', 'abath@employer.org', 'Sales']
    ];   }
        
// CREATE A COUNT FUNCTION TO DISPLAY NEXT TO EMPLOYEES HEADER
//*******************************************************************************************
function empCountFunction() {                                                   // FUNCTION TO KEEP RUNNING COUNT OF EMPLOYEES 
    let empCount = empTable.getElementsByTagName("tr").length;
    let n = document.getElementById("empCount");
    n.textContent = (empCount - 1);    
    }

// FUNCTION TO BUILD THE EMPLOYEE GRID FROM THE EMPLOYEE ARRAY
//*******************************************************************************************
function empArray(x)  {
tableBody.innerHTML = '';                                           // CLEAR THE EMPLOYEE GRID/ROWS

    for (let emp in x) {                                            // GET THE VALUES FROM THE EMPLOYEES ARRAY
        let empID       = x[emp][0];
        let empName     = x[emp][1];
        let empExt      = x[emp][2];
        let empEmail    = x[emp][3];
        let empDept     = x[emp][4];
       
        const empRow = document.createElement('tr');                // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
                                                                    // CONSTRUCT A NEW ROW IN THE TABLE AND POPULATE WITH THE EMPLOYEES
        empRow.innerHTML = `
        <td>${empID}</td>
        <td>${empName}</td>
        <td>${empExt}</td>
        <td>${empEmail}</td>
        <td>${empDept}</td>
        <td><button id='delete' class = 'btn btn-sm btn-danger delete'>X</button></td>
            `;
        tableBody.appendChild(empRow);                              // INSERT THE NEW ROW INTO THE GRID

        localStorage.setItem('employees', JSON.stringify(employees));          // STORE THE EMPLOYEES ON THE CLIENT
                    }     };

empArray(employees);                                                 // CALL THE FUNCTION TO BUILD THE GRID/ROWS

empCountFunction();                                                  // CALL THE FUNCTION TO DISPLAY THE EMPLOYEE COUNT

// ADD EMPLOYEE
//*******************************************************************************************
empForm.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();
    // GET THE VALUES FROM THE TEXT BOXES
    let empID       = document.querySelector('#id').value;
    let empName     = document.querySelector('#name').value;
    let empExt      = document.querySelector('#extension').value;
    let empEmail    = document.querySelector('#email').value;
    let empDept     = document.querySelector('#department').value;
  
    let newEmployee = [empID, empName, empExt, empEmail, empDept];          // ADD NEW EMPLOYEE TO THE EMPLOYEES ARRAY
    employees.push(newEmployee);

    empArray(employees);                                                // CALL THE FUNCTION TO BUILD THE GRID/ROWS

    empCountFunction();                                                 // CALL THE FUNCTION TO DISPLAY THE EMPLOYEE COUNT
            });

// DELETE EMPLOYEE
//*******************************************************************************************
empTable.addEventListener('click', (e) => {
    // CONFIRM DELETE
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure you want to delete this employee?')) {
            empTable.deleteRow(e.target.parentElement.parentElement.rowIndex);      //DELETE THE ROW

            empCountFunction();                                                     // CALL THE FUNCTION TO DISPLAY THE EMPLOYEE COUNT
        }
    }
});