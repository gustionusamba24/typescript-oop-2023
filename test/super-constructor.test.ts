describe('Super Constructor', () => {
    class Person {
        name: string;

        constructor(name: string) {
            this.name = name;
        }
    }

    class Employee extends Person {
        department: string;

        constructor(name: string, department: string) {
            super(name);
            this.department = department;
        }
    }

    it('should support super constructor', () => {
        const person = new Person("John");
        console.info(person.name);

        const employee = new Employee("Mary", "HR");
        console.info(`Employee name: ${employee.name}, department: ${employee.department}`);
    });
});