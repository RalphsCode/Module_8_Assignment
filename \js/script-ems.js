// CREATE AN ARRAY OF EMPLOYEES


// create loop to create row for each employee
/*
for (let emp in employees) { 
    console.log(`Emp Number: ${employees[emp][0]}`)
    console.log(`Emp Name: ${employees[emp][1]}`)
    console.log(`Extension.: ${employees[emp][2]}`)
    console.log(`Emp email: ${employees[emp][3]}`)
    console.log(`Emp Dept: ${employees[emp][4]}`)
};
*/
// ADD EMPLOYEES FROM ARRAY
function empArray(x)  {
// GET THE VALUES FROM THE ARRAY
let employees = [
    ['00001111', 'Ben Dover', '1111', 'bwire@employer.org', 'Executive'],
    ['00002222', 'Sue Flay', '2222', 'sflay@employer.org', 'Administration'],
    ['00003333', 'Polly Graph', '3333', 'pgraph@employer.org', 'Marketing'],
    ['00004444', 'Ima Genius', '4444', 'igenius@employer.org', 'Sales'],
    ['00005555', 'Anita Bath', '5555', 'abath@employer.org', 'Sales']
];
    for (let emp in x) { 
        let empID       = employees[emp][0];
        let empName     = employees[emp][1];
        let empExt      = employees[emp][2];
        let empEmail    = employees[emp][3];
        let empDept     = employees[emp][4];
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
                        }
                        };
empArray(employees);
/*
// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY


// GET DOM ELEMENTS


// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS


// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION

    // GET THE VALUES FROM THE TEXT BOXES

    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT

    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY

    // BUILD THE GRID

    // RESET THE FORM

    // SET FOCUS BACK TO THE ID TEXT BOX

});

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    // CONFIRM THE DELETE

        // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)

        // REMOVE EMPLOYEE FROM ARRAY

        // BUILD THE GRID

});

// BUILD THE EMPLOYEES GRID
function buildGrid() {
    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION

    // REBUILD THE TBODY FROM SCRATCH

    // LOOP THROUGH THE ARRAY OF EMPLOYEES
    // REBUILDING THE ROW STRUCTURE

    // BIND THE TBODY TO THE EMPLOYEE TABLE

    // UPDATE EMPLOYEE COUNT

    // STORE THE ARRAY IN STORAGE

};*/