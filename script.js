
let employees = [
    {
        name : "John",
        age : 30,
        department : "Marketing",
        salary : 50000
    },
    {
        name : "Alice",
        age : 35,
        department : "HR",
        salary : 60000
    },
    {
        name : "Bob",
        age : 28,
        department : "IT",
        salary : 70000
    },
    {
        name : "Emily",
        age : 32,
        department : "Marketing",
        salary : 55000
    }
];

function displayOutput(output) {
    document.getElementById('output').innerHTML = output;
};

function avgSalary(){
    totalSalary = 0
    for(let i of employees){
        totalSalary += i.salary;
    }
    avgSalary = totalSalary / employees.length;
    console.log(totalSalary);
    displayOutput("Average Salary: Rs " + avgSalary + "/-");
}


function findEmployeByDept(){
    empDept = "";
    for(let i of employees){
        if (i.department === "Marketing"){
            empDept = empDept + i.name + ",";
        }
    }
    displayOutput("Employees in Marketing: " + empDept);
}

function increaseSalary(percentage){
    increasedSalary = 0;
    for(let i of employees){
        increasedSalary = i.salary * (percentage/100)
        console.log(increasedSalary);
    }    
    displayOutput("Salary Increased!!!")
    
}

function sortEmployeesByAge(){
    employees.sort((a, b) => a.age - b.age);
        displayOutput(`Employees Sorted by Age: ${employees.map(emp => emp.name).join(', ')}`);
}
