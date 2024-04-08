
import { describe, it, expect } from 'vitest';

// Koan for understanding data properties vs accessor properties
describe('data properties vs accessor properties', () => {
    it('accessing data properties directly', () => {
        const object = { firstName: 'John', lastName: 'Doe' };
        // Failing test: change 'undefined' to the correct property value
        expect(object.firstName).toBe('John');
    });

    it('using getter for computed property', () => {
        const object = {
            firstName: 'John',
            lastName: 'Doe',
            get fullName() {
                return this.firstName + ' ' + this.lastName;
            },
        };
        // Failing test: change 'undefined' to invoke the getter correctly
        expect(object.fullName).toBe('John Doe');
    });

    it('using setter to change property value', () => {
        const object = {
            _name: 'John',
            get name() {
                return this._name;
            },
            set name(value) {
                this._name = value;
            },
        };
        // Failing test: change the assignment to use the setter correctly
        object.name = 'Jane';
        expect(object.name).toBe('Jane');
    });
});

// Koan for understanding prototype inheritance
describe('prototype inheritance', () => {
    it('object should inherit properties from its prototype', () => {
        const animal = { eats: true };
        const rabbit = Object.create(animal);
        // Failing test: change 'false' to the correct value to pass the test
        expect(rabbit.eats).toBe(true);
    });

    it('changing the prototype affects all derived objects', () => {
        const animal = { eats: true };
        const rabbit = Object.create(animal);
        animal.eats = false;
        // Failing test: change 'true' to the correct value after the prototype is modified
        expect(rabbit.eats).toBe(false);
    });
});

// Koan for understanding constructor function prototypes
describe('constructor function prototypes', () => {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.speak = function () {
        return this.name + ' makes a noise.';
    };

    it('instance created via constructor should have methods from prototype', () => {
        const animal = new Animal('Dog');
        // Failing test: change 'undefined' to the correct method to pass the test
        expect(animal.speak()).toBe('Dog makes a noise.');
    });
});

// Koan for understanding native prototypes
describe('native prototypes', () => {
    it('array should inherit methods from Array.prototype', () => {
        const arr = [];
        // Failing test: change 'undefined' to the correct method to check existence
        expect('reduce' in arr).toBe(true);
    });

    it('modifying native prototypes is visible everywhere', () => {
        // Modifying native prototype for the sake of example (not recommended in production code)
        Array.prototype.customMethod = function () { return 'custom'; };
        const arr = [];
        // Failing test: change 'undefined' to the correct method to pass the test
        expect(arr.customMethod()).toBe('custom');
    });
});
