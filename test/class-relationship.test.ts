describe('Class Relationship', () => {
    class Person {
        constructor(public name: string) {
        }
    }

    class Customer {
        constructor(public name: string) {
        }
    }

    it('should support class relationship', () => {
        const person: Person = new Customer("John");
        console.info(person);
    });
});