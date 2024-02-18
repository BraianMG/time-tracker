import { dummy } from './dummy';

describe('dummy', () => {
  // case 1: 'Hello World!' => 'Hello World!'
  test('Case 1', () => {
    // define in out
    const input: string = 'Hello World!';
    const output: string = 'Hello World!';
    // invoke dummy
    const result = dummy(input);
    // assert
    expect(result).toBe(output);
  });
});
