import { sum } from './sum';

test('it should return the sum of two numbers', () => {
    expect(sum(1, 2)).toBe(3);
})