import { describe, expect, test } from '@jest/globals';
import { fizzBuzz } from './FizzBuzz';
import { checkDivisible } from '../domain/service/FizzBuzzService';

describe('FizzBuzz', () => {
  describe('checkDivider - divisible numbers', () => {
    test('Should return true when number is divisible by 3', () => {
      const numbers = [3, 12, 9, 33, 69];
      numbers.forEach((number) => expect(checkDivisible(number, 3)).toBeTruthy());
    });
    test('Should return true when number is divisible by 5', () => {
      const numbers = [100, 95, 70, 35, 10];
      numbers.forEach((number) => expect(checkDivisible(number, 5)).toBeTruthy());
    });
    test('Should return false if numbers is not divisible by 3', () => {
      const numbers = [100, 95, 70, 35, 10];
      numbers.forEach((number) => expect(checkDivisible(number, 9)).toBeFalsy());
    });
    test('Should return false if numbers is not divisible by 5', () => {
      const numbers = [3, 12, 9, 33, 69];
      numbers.forEach((number) => expect(checkDivisible(number, 7)).toBeFalsy());
    });
  });

  describe('fizzBuzz get value', () => {
    test('Should return "number" if its not divisible for 3 or 5', () => {
      const notDividerByThreeAndFive = [1, 2, 22, 61, 98];
      notDividerByThreeAndFive.forEach((number) => {
        expect(fizzBuzz(number)).toBe(number);
      });
    });
    test('Should return Fizz if its divisible for 3', () => {
      const dividerByThree = [3, 6, 69, 54, 72, 99];
      dividerByThree.forEach((number) => {
        expect(fizzBuzz(number)).toBe('Fizz');
      });
    });
    test('Should return Buzz if its divisible for 5', () => {
      const dividersByFive = [5, 10, 35, 65, 50, 55];
      dividersByFive.forEach((number) => {
        expect(fizzBuzz(number)).toBe('Buzz');
      });
    });
    test('Should return FizzBuzz if its divisible for 3 and 5', () => {
      let dividersByThreeAndFive = [15, 30, 45, 75];
      dividersByThreeAndFive.forEach((number) => {
        expect(fizzBuzz(number)).toBe('FizzBuzz');
      });
    });
  });
});
