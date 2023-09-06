describe('Properties', () => {
    class Customer {
        readonly id: number;
        name: string;
        address?: string;

        constructor(id: number, name: string) {
            this.id = id;
            this.name = name;
        }

        sayHello(name: string): void {
            console.info(`Hello ${name}, my name is ${this.name}`);
        }
    }

    it('should support properties in the class', () => {
        const customer = new Customer(1, "John");
        expect(customer.id).toBe(1);
        expect(customer.name).toBe("John");
        expect(customer.address).toBeUndefined();


        console.info("Customer id: " + customer.id);
        console.info("Customer name: " + customer.name);
        console.info("Customer address: " + customer.address);
    });

    it('should can have method', () => {
        const customer = new Customer(1, "John");
        customer.sayHello("Mary");
    });
});