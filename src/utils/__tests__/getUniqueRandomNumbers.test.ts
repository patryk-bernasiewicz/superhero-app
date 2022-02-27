import { getUniqueRandomNumbers } from '@utils/getUniqueRandomNumbers';

test('generates an array of unique random numbers', () => {
  const wantedLength = 3;
  const maxNumber = 3;
  const controlArray: number[] = [];

  const result = getUniqueRandomNumbers(wantedLength, maxNumber, controlArray);

  expect(result.length).toBe(wantedLength);

  // validate every number is unique
  let lastNum: number;
  result.forEach((num, index) => {
    if (index === 0) {
      return;
    }

    expect(num).toBeLessThanOrEqual(maxNumber);

    console.log('===== ', num, lastNum);

    expect(lastNum).not.toBe(num);

    lastNum = num;
  });
});

test('ignores controlArray values if they are larger than maximum possible number', () => {
  const wantedLength = 3;
  const maxNumber = 3;
  const controlArray = [4, 5];

  const result = getUniqueRandomNumbers(wantedLength, maxNumber, controlArray);
  expect(result.length).toBe(wantedLength);
});

test('generates non-unique numbers if forceUnique flag is "true"', () => {
  const wantedLength = 3;
  const maxNumber = 3;
  const controlArray = [1, 2, 3];

  const result = getUniqueRandomNumbers(
    wantedLength,
    maxNumber,
    controlArray,
    false
  );

  expect(result.length).toBe(wantedLength);
});

test('throws if control array has too many valid values', () => {
  const wantedLength = 3;
  const maxNumber = 3;
  const controlArray = [1, 2];

  expect(() =>
    getUniqueRandomNumbers(wantedLength, maxNumber, controlArray)
  ).toThrow();
});

test('throws if length is larger than max possible number', () => {
  const wantedLength = 4;
  const maxNumber = 2;

  expect(() => getUniqueRandomNumbers(wantedLength, maxNumber, [])).toThrow();
});
