import { fizzBuzzProps } from './FizzBuzz.types';
import { checkDivisible, getFizzBuzzValue } from '../domain/service/FizzBuzzService';

export const fizzBuzz = (number: number): fizzBuzzProps => {
  const isDividerByThree = checkDivisible(number, 3);
  const isDividerByFive = checkDivisible(number, 5);
  return getFizzBuzzValue(isDividerByThree, isDividerByFive, number);
};
