describe('Inheritance', () => {
    class Employee {
        name: string;

        constructor(name: string) {
            this.name = name;
        }
    }

    class Manager extends Employee {
    }

    class Director extends Manager {
    }

    it('should support inheritance', () => {
        const employee = new Employee("John");
        console.info(employee.name);

        const manager = new Manager("Mary");
        console.info(manager.name);

        const director = new Director("Peter");
        console.info(director.name);
    });
});