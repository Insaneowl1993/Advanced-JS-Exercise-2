
import { describe, it, expect } from 'vitest';

// Slide 56 - try...catch Syntax
describe('Slide 56 - try...catch Syntax', () => {
  it('should catch an error thrown inside a try block', () => {
    let errorCaught = false;

    // This should be wrapped in a try...catch block
    // Students will wrap this in a try...catch to catch the error
    try {
      throw new Error('This error should be caught');
    } catch(error) {
      errorCaught = true;
    }

    expect(errorCaught).toBe(true);
  });
});

// Slide 57 - Handling Non-syntactical Errors
describe('Slide 57 - Handling Non-syntactical Errors', () => {
  it('should catch a reference error', () => {
    let referenceErrorCaught = false, error;

    // This code should cause a ReferenceError which should be caught
    // Students will add try...catch to set referenceErrorCaught to true
    try {
       nonExistentFunction();
    } catch(e) {
      error = e;
      referenceErrorCaught = true;
    }

    expect(error instanceof ReferenceError).toBe(true);
    expect(error.message).toBe('nonExistentFunction is not defined')
    expect(referenceErrorCaught).toBe(true);
  });
});

// Slide 58 - The throw Operator
describe('Slide 58 - The throw Operator', () => {
  it('should throw a custom error', () => {
    let customErrorCaught = false;
    class DaleError extends Error {
      constructor(message: string) {
        super(message);
        this.name = 'DaleError'
      }
    }

    try {
      // Students will throw an error inside this block
      // Replace the following line with a throw statement
      console.log('Replace this line with a throw statement');
      throw new DaleError; ('This error should be caught')
    } catch (error) {
      customErrorCaught = error instanceof Error;
    }

    expect(customErrorCaught).toBe(true);
  });
});

// Slide 59 - The finally Clause
describe('Slide 59 - The finally Clause', () => {
  it('should always execute the finally block', () => {
    let finallyBlockExecuted = false;

    try {
      throw new Error('An error that should be caught');
    } catch (error) {
      // Handle the error
    } finally {
      // Students will set finallyBlockExecuted to true here
      finallyBlockExecuted = true;
    }

    expect(finallyBlockExecuted).toBe(true);
  });
});

// We can add more koans here for each error handling concept
