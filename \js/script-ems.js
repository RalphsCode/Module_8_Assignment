// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
let empForm     = document.querySelector('#addForm');
let empTable    = document.getElementById("empTable");
let empCount    = document.querySelector('#empCount');
let tableBody   = document.querySelector('#empTable tbody');

// CREATE AN ARRAY OF EMPLOYEES

let employees = [
    ['00001111', 'Ben Dover', '1111', 'bwire@employer.org', 'Executive'],
    ['00002222', 'Sue Flay', '2222', 'sflay@employer.org', 'Administration'],
    ['00003333', 'Polly Graph', '3333', 'pgraph@employer.org', 'Marketing'],
    ['00004444', 'Ima Genius', '4444', 'igenius@employer.org', 'Sales'],
    ['00005555', 'Anita Bath', '5555', 'abath@employer.org', 'Sales']
];

// create loop to create row for each employee

// ADD EMPLOYEES FROM ARRAY
function empArray(x)  {

// GET THE VALUES FROM THE ARRAY

/*
deleteBtn.;               // ADD APPROPRIATE BOOTSTRAP CLASSES
deleteBtn.appendChild(document.createTextNode('X'));                // ADD THE 'X' TEXT TO BUTTON
*/

    for (let emp in x) { 
        let empID       = x[emp][0];
        let empName     = x[emp][1];
        let empExt      = x[emp][2];
        let empEmail    = x[emp][3];
        let empDept     = x[emp][4];
        let deleteBtn   = "<button id='myButton' className = 'btn btn-sm btn-danger delete'>X</button>";      // CREATE THE DELETE BUTTON
    
        // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
        const empRow = document.createElement('tr');
            // Construct the row HTML using a template literal string
            empRow.innerHTML = `
            <td>${empID}</td>
            <td>${empName}</td>
            <td>${empExt}</td>
            <td>${empEmail}</td>
            <td>${empDept}</td>
            <td>${deleteBtn}</td>
        `;
        tableBody.appendChild(empRow);
                       }
                       
                        };
empArray(employees);                                    // CALL THE FUNCTION TO DISPLAY THE ARRAY IN THE EMPLOYEE TABLE


// ADD EMPLOYEE

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let count = 0;

// ADD EMPLOYEE
empForm.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();
    // GET THE VALUES FROM THE TEXT BOXES
    let empID       = document.querySelector('#id').value;
    let empName     = document.querySelector('#name').value;
    let empExt      = document.querySelector('#extension').value;
    let empEmail    = document.querySelector('#email').value;
    let empDept     = document.querySelector('#department').value;
    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let empRow      = empTable.insertRow();
    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    let cellID      = empRow.insertCell();
    let cellName    = empRow.insertCell();
    let cellExt     = empRow.insertCell();
    let cellEmail   = empRow.insertCell();
    let cellDept    = empRow.insertCell();
    let cellDelete  = empRow.insertCell();
    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    cellID.appendChild(document.createTextNode(empID));
    cellName.appendChild(document.createTextNode(empName));
    cellExt.appendChild(document.createTextNode(empExt));
    cellEmail.appendChild(document.createTextNode(empEmail));
    cellDept.appendChild(document.createTextNode(empDept));
    // CREATE THE DELETE BUTTON
    let deleteBtn   = document.createElement('button');
    // ADD APPROPRIATE BOOTSTRAP CLASSES
    deleteBtn.className = 'btn btn-sm btn-danger delete';
    // ADD THE 'X' TEXT TO BUTTON
    deleteBtn.appendChild(document.createTextNode('X'));
    // APPEND BUTTON TO THE CELL
    cellDelete.appendChild(deleteBtn);
    // RESET THE FORM
    document.querySelector('#addForm').reset();
    // SET FOCUS BACK TO THE ID TEXT BOX
    document.querySelector('#id').focus();
    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    count++;
    empCount.value = `(${count})`;
});

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    // CONFIRM DELETE
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure you want to delete this employee?')) {
            // CALL THE DELETEROW() METHOD TO DELETE SPECIFIC ROW IN TABLE
            // PASS THE ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)
            empTable.deleteRow(e.target.parentElement.parentElement.rowIndex);
            // DECREMENT THE COUNTER
            count--;
            empCount.value = `(${count})`;
        }
    }
});
