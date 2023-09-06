describe('Polymorphism', () => {
    class Employee {
        constructor(public name: string) {
        }
    }

    class Manager extends Employee {}
    class VicePresident extends Employee {}

    function sayHello(employee: Employee): void {
        console.info(`Hello ${employee.name}`);
    }

    it('should support polymorphism', () => {
        let employee = new Employee("John");
        console.info(employee);

        employee = new Manager("Mary");
        console.info(employee);

        employee = new VicePresident("Peter");
        console.info(employee);
    });

    it('should support method parameter polymorphism', () => {
        sayHello(new Employee("John"));
        sayHello(new Manager("Mary"));
        sayHello(new VicePresident("Peter"));
    });
});