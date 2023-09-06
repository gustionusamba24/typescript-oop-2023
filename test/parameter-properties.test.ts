describe('Parameter Properties', () => {
    class Person {
        constructor(public name: string = "") {
        }
    }

    it('should support parameter properties', () => {
        const person = new Person("John");
        console.info(person.name);
    });
});