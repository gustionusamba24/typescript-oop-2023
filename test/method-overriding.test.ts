describe('Method Overriding', () => {
    class Person {
        name: string;

        constructor(name: string) {
            this.name = name;
        }

        sayHello(name: string): void {
            console.info(`Hello ${name}, my name is ${this.name}`);
        }
    }

    class Employee extends Person {
        department: string;

        constructor(name: string, department: string) {
            super(name);
            this.department = department;
        }

        sayHello(name: string): void {
            console.info(`Hello ${name}, my name is ${this.name}, I work in ${this.department}`);
        }
    }

    it('should support method overriding', () => {
        const person = new Person("John");
        person.sayHello("Mary");

        const employee = new Employee("Mary", "HR");
        employee.sayHello("Peter");
    });
});