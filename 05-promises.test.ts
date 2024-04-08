
import { describe, it, expect } from 'vitest';

// Slide 60: Creating a Promise
describe('Creating a Promise', () => {
  it('should create a promise that resolves to a number', () => {
    // The student needs to create a promise that resolves with a number
    const numberPromise: Promise<number> = new Promise((resolve, reject) => {
      resolve(42);
    }); // Replace null with a new Promise

    // This test will initially fail
    numberPromise.then(number => {
      expect(number).toBeTypeOf('number');
    });
  });
});

// Slide 61: Consuming Promises
describe('Consuming Promises', () => {
  it('should handle promise resolution and rejection', async () => {
    // The student needs to handle the resolution and rejection of a promise
    const promiseToConsume = new Promise<void>((resolve, reject) => {
      resolve()
      // This promise should be consumed with .then and .catch
    });

    let resolutionMessage = '';
    let rejectionMessage = '';

    // The student should add .then and .catch handlers to the promise
    // These tests will initially fail
    await promiseToConsume.then(() => {
      resolutionMessage = 'Promise resolved';
    }).catch(() => {
      rejectionMessage = 'Promise rejected';
    });

    expect(resolutionMessage).toBe('Promise resolved');
    expect(rejectionMessage).toBe('');
  });
  
});

it('should handle promise rejection', async () => {
  // The student needs to handle the resolution and rejection of a promise
  const promiseToConsume = new Promise<void>((resolve, reject) => {
    reject('this is a test rejection')
    // This promise should be consumed with .then and .catch
  });

  let resolutionMessage = '';
  let rejectionMessage = '';

  // The student should add .then and .catch handlers to the promise
  // These tests will initially fail
  await promiseToConsume.then(() => {
    resolutionMessage = '';
  }).catch(() => {
    rejectionMessage = 'Promise rejected';
  });

  expect(resolutionMessage).toBe('');
  expect(rejectionMessage).toBe('Promise rejected');
});

// Slide 62: Creating and Consuming Promises with setTimeout
describe('Creating and Consuming Promises with setTimeout', () => {
    it('should create and consume a promise that resolves after a timeout', async () => {
    // The student needs to create a promise that resolves using setTimeout
    const promiseWithTimeout: Promise<string> = new Promise
    ((resolve, reject) => {
      setTimeout(() => {
        resolve('Timeout completed')
      }, 100)
    }); // Replace null with a new Promise

    // The student should handle the promise resolution
    let resultMessage = '';

    // This test will initially fail
    await promiseWithTimeout.then(result => {
      resultMessage = result;
    });

    expect(resultMessage).toBe('Timeout completed');
  });
});

// Slide 63: Using Promises with Fetch
describe('Using Promises with Fetch', () => {
  it('should fetch data from an API and process the JSON result', async () => {
    // The student should use fetch to get data and process it with .then
    // This example requires an environment that supports fetch or a polyfill
    // The test will initially fail
    const fetchedData = await fetch('https://reqres.in/api/users').then(res => res.json());

    expect(fetchedData).toHaveProperty('data');
  });
});

// Slide 64: Chaining Promises
describe('Chaining Promises', () => {
  it('should chain multiple promises together', async () => {
    let chainedResult = 0;


    // The student needs to create a chain of promises
    // The test will initially fail
    chainedResult = await Promise.resolve(10)
      .then(result => result + 10)
      .then(result => {
        return result + 10;
      });

    expect(chainedResult).toBe(30);
  });
});

// Slide 65: Returning Promises in .then
describe('Returning Promises in .then', () => {
  it('should handle promises returned from .then', async () => {
    let finalResult = 0;

    // The student needs to return a new promise from within a .then
    // The test will initially fail
    await Promise.resolve(10)
      .then(result => {
        return new Promise(resolve => setTimeout(() => resolve(result + 10), 100));
      })
      .then(result => {
        finalResult = result as number;
      });

    expect(finalResult).toBe(20);
  });
});

// We can add more koans here for each slide and concept related to Promises
