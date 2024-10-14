interface Employee {
    id: number;
    name: string;
    getSalary(): number;
}

class FullTimeEmployee implements Employee {
    id: number;
    name: string;
    annualSalary: number;

    constructor(id: number, name: string, annualSalary: number) {
        this.id = id;
        this.name = name;
        this.annualSalary = annualSalary;
    }

    getSalary(): number {
        return this.annualSalary;
    }
}

class PartTimeEmployee implements Employee {
    id: number;
    name: string;
    hourlyRate: number;
    hoursWorked: number;

    constructor(id: number, name: string, hourlyRate: number, hoursWorked: number) {
        this.id = id;
        this.name = name;
        this.hourlyRate = hourlyRate;
        this.hoursWorked = hoursWorked;
    }

    getSalary(): number {
        return this.hourlyRate * this.hoursWorked;
    }
}

function printEmployeeSalary(employee: Employee): void {
    console.log(`${employee.name} receives a salary of $${employee.getSalary()}`);
}

const fullTimeEmployee = new FullTimeEmployee(1, "João", 60000);
const partTimeEmployee = new PartTimeEmployee(2, "Raposo", 20, 1000);

printEmployeeSalary(fullTimeEmployee); // João receives a salary of $60000
printEmployeeSalary(partTimeEmployee); // Raposo receives a salary of $20000