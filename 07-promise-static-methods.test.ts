
import { describe, it, expect } from 'vitest';

// Koan for Promise.all
describe('Promise.all koans', () => {
  it('Promise.all resolves if all promises resolve', async () => {
    const promises = [Promise.resolve('apple'), Promise.resolve('banana')];
    // This test should check for correct resolution
    const result = await Promise.all(promises);
    expect(result).toEqual(['apple', 'banana']); // This should pass if correct
  });

  it('Promise.all rejects if a single promise rejects', async () => {
    const promises = [Promise.resolve('apple'), Promise.reject(new Error('Failed'))];
    // This test should check for rejection
    try {
      await Promise.all(promises);
      expect(true).toBe(false); // This should fail
    } catch (error) {
      expect(error.message).toBe('Failed'); // This should pass if correct
    }
  });
});

// Koan for Promise.allSettled
describe('Promise.allSettled koans', () => {
  it('Promise.allSettled always resolves with an array of results', async () => {
    const promises = [Promise.resolve('apple'), Promise.reject(new Error('Failed'))];
    // This test should check that allSettled resolves correctly
    const result = await Promise.allSettled(promises);
    expect(result.length).toBe(2); // This should pass if correct
    expect(Array.isArray(result)).toBe(true);
  });
});

// Koan for Promise.race
describe('Promise.race koans', () => {
  it('Promise.race resolves or rejects as soon as one promise settles', async () => {
    const promises = [new Promise(resolve => setTimeout(() => resolve('apple'), 100)), Promise.reject(new Error('Failed'))];
    // This test should check that race resolves or rejects correctly
    try{
      const result = await Promise.race(promises);
    expect(result).toBe('apple'); // This should pass if correct
    } catch (error) {
      expect (error instanceof Error).toBe(true);
    }
  });
});

// Koan for Promise.any
describe('Promise.any koans', () => {
  it('Promise.any resolves as soon as one promise resolves', async () => {
    const promises = [Promise.reject(new Error('Failed')), new Promise(resolve => setTimeout(() => resolve('apple'), 100))];
    // This test should check that any resolves correctly
    const result = await Promise.any(promises);
    expect(result).toBe('apple'); // This should pass if correct
  });
});

// Koan for Promise.resolve and Promise.reject
describe('Promise.resolve and Promise.reject koans', () => {
  it('Promise.resolve returns a promise that is resolved', async () => {
    const promise = Promise.resolve('apple');
    // This test should check that resolve returns a resolved promise
    const result = await promise;
    expect(result).toBe('apple'); // This should pass if correct
  });

  it('Promise.reject returns a promise that is rejected', async () => {
    const promise = Promise.reject(new Error('Failed'));
    // This test should check that reject returns a rejected promise
    try {
      await promise;
      expect(true).toBe(false); // This should fail
    } catch (error) {
      expect(error.message).toBe('Failed'); // This should pass if correct
    }
  });
});

// Additional koans can be added here to further explore Promise static methods
