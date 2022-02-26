/**
 * Function that generates {length} random unique values.
 * @param {Number} length Number of random values to generate
 * @param {Number} maxNum Maximum possible number to generate
 * @param {Number[]} controlArray Optional array of numbers to check uniqueness against
 * @param {boolean} forceUnique Set to "false" if you don't care about uniqueness. Default = true
 * @returns {Number[]}
 */
export const getUniqueRandomNumbers = (
  length: number,
  maxNum: number,
  controlArray: number[] = [],
  forceUnique = true
): number[] => {
  const validControlArrayValues = Array.isArray(controlArray)
    ? controlArray.filter((controlNum) => controlNum <= maxNum)
    : [];

  if (
    forceUnique &&
    (length > maxNum ||
      (validControlArrayValues.length &&
        length > maxNum - validControlArrayValues.length))
  ) {
    throw new Error('Impossible to generate unique values!');
  }

  const validateIsUnique = (num: number, generatedNums: number[]): boolean => {
    if (
      !forceUnique ||
      (!validControlArrayValues.length && !generatedNums.length)
    ) {
      return true;
    }

    if (validControlArrayValues.length) {
      return (
        !validControlArrayValues.includes(num) && !generatedNums.includes(num)
      );
    }

    return true;
  };

  const generatedNums: number[] = [];
  return new Array(length).fill(null).map(() => {
    let generatedNum: number;

    do {
      generatedNum = Math.floor(Math.random() * maxNum);
    } while (!validateIsUnique(generatedNum, generatedNums));

    generatedNums.push(generatedNum);
    return generatedNum;
  });
};
