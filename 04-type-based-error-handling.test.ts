
import { describe, it, expect } from 'vitest';

// A simple Result type that represents either a success with a value or an error with a message
type Result<T> = 
{ kind: 'success', value: T } | 
{ kind: 'error', message: string };

function parseJson(json: string): Result<unknown> {
  // Students should handle parsing errors and return a Result type
  try {
    return{kind: 'success', value: JSON.parse(json) };
   } catch(e) {
  return{kind: 'error', message: 'Invalid JSON'};
}
}

describe('Type-Based Error Handling', () => {
  it('should return a success type for valid JSON', () => {
    const result = parseJson('{ "name": "Vitest" }');
    expect(result).toMatchObject({ kind: 'success' });
    if (result.kind === 'success')
    expect(result.value).toMatchObject({ name: 'Vitest' });
  });

  it('should return an error type for invalid JSON', () => {
    const result = parseJson('invalid JSON');
    expect(result).toMatchObject({ kind: 'error' });
    if(result.kind === 'error') {
    expect(result.message).toBe('Invalid JSON');
    }
  });
});

// We can add more koans here for each error handling concept using the type system
