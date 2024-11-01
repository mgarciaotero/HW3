/* Margarita Garcia-Otero
File Description:
This javascript code adds cells dynamically to an existing table in html.
It also styles some elements in the code.  I originally had two different functions to make the table.
One to add the first row and one to add a row at a time.
I used insertCell because I didn't have to differentiate between
th and td cells just to hold data.  (This decision probably hurt me later
when I started to play with scrolling and sticky positioning.)

(More details are in html File Description.)  

Obsolete functions are at the bottom.

Sources: w3Schools.com, stackoverflow.com, geeksforgeeks.org
           Class textbook, Javascript for Dummies
*/


// This function deletes table if it exists and generates new table
// insertCell is td by default.
function generateTable() {
    
    deleteTable();

    let elements = document.getElementsByName("number");
    let Xmin = parseInt(elements[0].value); 
    let Xmax = parseInt(elements[1].value); 
    let Ymin = parseInt(elements[2].value); 
    let Ymax = parseInt(elements[3].value); 
    //console.log(Xmin, Xmax, Ymin, Ymax);

    let table = document.getElementById("myTable");
    //document.getElementById("myTable").style.display="table";

    //add row at the end of the table and cell to end of row
    let row = table.insertRow(-1);
    let cell = row.insertCell(-1);
    cell.innerHTML = "X";
    cell.style.width = "50px";
    for (let Xcurr = Xmin; Xcurr <= Xmax; Xcurr += 1) {
        let cell = row.insertCell(-1);
        cell.innerHTML = Xcurr.toString();
        cell.style.width = "50px";
    } // end for loop

    
    // add first element in the second row
    for (let Ycurr = Ymin; Ycurr <= Ymax; Ycurr += 1) {
            let table = document.getElementById("myTable");
            let row = table.insertRow(-1);
            let cell = row.insertCell(-1);
            cell.innerHTML = Ycurr.toString();
            cell.style.width = "50px";  
            cell.add("sticky-col");
            console.log(Ycurr, "sticky cell class");

        // finish out the row
            for (let Xcurr = Xmin; Xcurr <= Xmax; Xcurr += 1) {
                let cell = row.insertCell(-1);
                cell.innerHTML = Ycurr*Xcurr;
                cell.style.width = "50px";
                cell.style.backgroundColor = "white";
                cell.style.color = "black";
                //   console.log(Ycurr,Xcurr);
            } // end inner for loop
    } // end outer for loop
} // end generateTable function


// this function gets collection of input and messages and does
// test on desired node in array using index
// and returns T or F value in "mischiefManaged" flag variable
function isValid(i) {
    console.log("isValid index", i);
    let elements = document.getElementsByName("number");
    let messages = document.getElementsByTagName("span");
        let mischiefManaged = false;
        let str = elements[i].value;     
        elements[i].style.background = "salmon";
        //elements[i].value = "";
        if (str == "") {
            messages[i].textContent
            = str + " empty string not allowed - reenter";  
        } else if (isNaN(str)) {
            messages[i].textContent
            = str + " is not a valid integer - reenter";
        } else if (parseFloat(str) != parseInt(str)) {
            messages[i].textContent
            = str + " floating point number not allowed - reenter";
        } else if (parseInt(str) < -50 || parseInt(str) > 50) {
        messages[i].textContent
          = str + " integer out of range - reenter";
        } else {
            mischiefManaged = true;
            elements[i].value = str;
            messages[i].textContent = "VALID";
            elements[i].style.background = "white";
        } // end if else chain of individual checks

        console.log("before range check...", mischiefManaged);

        // now check for correct order of min and max
        if ((i === 1 || i === 3) & mischiefManaged) {
            let min = parseInt(elements[i-1].value);
            let max = parseInt(elements[i].value);
            if (min > max) {
                mischiefManaged = false;
                elements[i-1].style.background = "gold";
                //elements[0].value = "";
                messages[i-1].textContent
                    = min + " > " + max + " min cannot be GT max - reenter";
            } // end if 
        } // end if

        console.log("leaving isValid function ", mischiefManaged)
        return mischiefManaged;
} // end isValid function

// This function runs deleteTable() and makes a new one.
function generateTable() {
    deleteTable();

    let elements = document.getElementsByName("number");
    let Xmin = parseInt(elements[0].value); 
    let Xmax = parseInt(elements[1].value); 
    let Ymin = parseInt(elements[2].value); 
    let Ymax = parseInt(elements[3].value); 
    //console.log(Xmin, Xmax, Ymin, Ymax);

    let table = document.getElementById("myTable");
    //document.getElementById("myTable").style.display="table";
    
    //add row at the end of the table and cell to end of row
    let row = table.insertRow(-1);
    let cell = row.insertCell(-1);
    cell.innerHTML = "X";
    cell.style.width = "50px";
    for (let Xcurr = Xmin; Xcurr <= Xmax; Xcurr += 1) {
        let cell = row.insertCell(-1);
        cell.innerHTML = Xcurr.toString();
        cell.style.width = "50px";
    } // end for loop

    // add remaining rows here.. TESTING!!!.
// add first element in the second row
    for (let Ycurr = Ymin; Ycurr <= Ymax; Ycurr += 1) {
            let table = document.getElementById("myTable");
            let row = table.insertRow(-1);
            let cell = row.insertCell(-1);
            cell.innerHTML = Ycurr.toString();
            cell.style.width = "50px";
            
        // finish out the row
            for (let Xcurr = Xmin; Xcurr <= Xmax; Xcurr += 1) {
                let cell = row.insertCell(-1);
                cell.innerHTML = Ycurr*Xcurr;
                cell.style.width = "50px";
                cell.style.backgroundColor = "white";
                cell.style.color = "black";
                //   console.log(Ycurr,Xcurr);
            } // end inner for loop
    } // end outer for loop


}// end firstrow function


// This function removes table as long as there is a first element, which is fast to check),
// it will continue to remove the last element in while loop.
function deleteTable() {
    var myElement = document.getElementById("myTable");
    while (myElement.firstElementChild != null) {
        console.log("inside while loop");
        myElement.removeChild(myElement.lastElementChild);
    }
}


// Obsolete functions are below...

/*
function validateAll() {
    console.log("inside validateAll function");
    let elements = document.getElementsByName("number");
    let messages = document.getElementsByTagName("span");
    //let mischiefManaged = false;
    for (let i = 0; i < elements.length; i++) {
        isValid(i);
    }
    console.log("checked all TB - both");
    console.log(mischiefManaged); 
    if (mischiefManaged) {
        console.log("generate table now");
        generateTable();
    } else {
        console.log("fix input");
    }
}

function validate() {
    console.log("inside validate function");
    let elements = document.getElementsByName("number");
    let messages = document.getElementsByTagName("span");
    let mischiefManaged = false;

    for (let i = 0; i < elements.length; i++) {
    // set flag to check for all valid entries before generating table
        mischiefManaged = false;
        let str = elements[i].value;     
        elements[i].style.background = "salmon";
        elements[i].value = "";
        if (str == "") {
            messages[i].textContent
            = str + " empty string not allowed - reenter";  
        } else if (isNaN(str)) {
            messages[i].textContent
            = str + " is not a valid integer - reenter";
        } else if (parseFloat(str) != parseInt(str)) {
            messages[i].textContent
            = str + " floating point number not allowed - reenter";
        } else if (parseInt(str) < -50 || parseInt(str) > 50) {
        messages[i].textContent
          = str + " integer out of range - reenter";
        } else {
            mischiefManaged = true;
            elements[i].value = str;
            messages[i].textContent = "valid entry"
            elements[i].style.background = "white";
        } // end if else chain of individual checks

    } // end for loop for input boxes

    console.log("before range check...", mischiefManaged);
    
    // now, check range order
    if (mischiefManaged) {
        let min = parseInt(elements[0].value);
        let max = parseInt(elements[1].value);
        if (min > max) {
            mischiefManaged = false;
            elements[0].style.background = "gold";
            //elements[0].value = "";
            messages[0].textContent
                = min + ">" + max + " min cannot be GT max - reenter";
        } // end if
        min = parseInt(elements[2].value);
        max = parseInt(elements[3].value);
        if (min > max) {
            mischiefManaged = false;
            elements[2].style.background = "gold";
            //elements[2].value = "";
            messages[2].textContent
                = min + ">" + max + " min cannot be GT max - reenter";
        } // end if
    }// end outer if

    console.log("after range checks - both");
    console.log(mischiefManaged); 
    if (mischiefManaged) {
        console.log("generate table now");
        generateTable();
    } else {
        console.log("fix input");
    }
} // end validate function

function generateTable_3step() {
    console.log("inside generateTable function");
    deleteTable();
    console.log("before addFirst");
    addFirstRow();
    console.log("after addFirst");
    //firstRow();
    console.log("completed firstRow function");
    addRemainingRows();
}

function addRemainingRows() {
    let Xmin = 1, Xmax = 10, Ymin = -10, Ymax = 0;
    // add first element in the row
    for (let Ycurr = Ymin; Ycurr <= Ymax; Ycurr += 1) {
        let table = document.getElementById("myTable");
        let row = table.insertRow(-1);
        let cell = row.insertCell(-1);
        cell.innerHTML = Ycurr.toString();
        cell.style.width = "50px";

    // finish out the row
        for (let Xcurr = Xmin; Xcurr <= Xmax; Xcurr += 1) {
            let cell = row.insertCell(-1);
            cell.innerHTML = Ycurr*Xcurr;
            cell.style.width = "50px";
            cell.style.backgroundColor = "white";
            cell.style.color = "black";
            //   console.log(Ycurr,Xcurr);
        } // end inner for loop
    } // end outer for loop
} // end function 
*/
