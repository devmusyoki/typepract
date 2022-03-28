class Department {
   name : string; 
   employees: string[];

   constructor(n: string) {
       this.name = n;
   }
}

const accounting = new Department("Accounting");

accounting.addEmployee('Mark')
accounting.addEmployee('Musyoki')

describe(this: Department){
    console.log('Department: ' + this.name);
}

printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
}
addEmployee(employee:string){
    this.employees.push(employee); 
}
accounting.describe();

// const accountingCopy = {name: 'DUMMY', describe:accounting.describe}

// accountingCopy.describe();

