describe('Polymorphism', () => {
    class Employee {
        constructor(public name: string) {
        }
    }

    class Manager extends Employee {
    }

    class VicePresident extends Employee {
    }

    function sayHello(employee: Employee): void {
        if (employee instanceof VicePresident) {
            const vp = employee as VicePresident;
            console.info(`Hello VP ${vp.name}`)
        } else if (employee instanceof Manager) {
            const manager = employee as Manager;
            console.info(`Hello manager ${manager.name}`)
        } else {
            console.info(`Hello employee ${employee.name}`)
        }
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