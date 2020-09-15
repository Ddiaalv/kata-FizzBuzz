export const checkDivisible = (value: number, divider: number): boolean =>
  value % divider === 0;

export const getFizzBuzzValue = (
  isDividerByThree: boolean,
  isDividerByFive: boolean,
  number: number,
) => {
  if (isDividerByThree && isDividerByFive) {
    return 'FizzBuzz';
  } else if (isDividerByThree) {
    return 'Fizz';
  } else if (isDividerByFive) {
    return 'Buzz';
  } else {
    return number;
  }
};
