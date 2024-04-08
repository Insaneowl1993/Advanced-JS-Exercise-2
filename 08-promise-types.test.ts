
import { describe, it, expect } from 'vitest';

// Koan for typing the resolved value of a Promise
describe('Typing the resolved value of a Promise', () => {
  it('should resolve with a typed value', async () => {
    // The student needs to correct the type of the Promise
    const typedPromise: Promise<string> = new Promise((resolve, reject) => {
      resolve('42'); // This should be a string according to the Promise type
    });

    // This test will fail initially
    await typedPromise.then(value => {
      expect(value).toBeTypeOf('string');
    });
  });
});

// Koan for handling Promise rejection with types
describe('Handling Promise rejection with types', () => {
  it('should catch a typed error from a rejected Promise', async () => {
    // The student needs to type the error correctly
    const typedRejectionPromise: Promise<string> = new Promise((resolve, reject) => {
      reject(new TypeError('This should be a TypeError'));
    });

    // This test will fail initially
    try {
      await typedRejectionPromise;
    } catch (error) {
      expect(error).toBeInstanceOf(TypeError);
      expect(error.message).toEqual('This should be a TypeError');
    }
  });
});

// Koan for using type inference with Promises
describe('Using type inference with Promises', () => {
  it('should infer the type of the resolved value', async () => {
    // The student should realize that the type is inferred from the resolved value
    const inferredPromise = Promise.resolve('TypeScript');

    // This test will fail initially
    await inferredPromise.then(value => {
      expect(value).toBeTypeOf('string'); // This should be 'string'
    });
  });
});

// Additional koans can be added here to further explore typing with Promises
