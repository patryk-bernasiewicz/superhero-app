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
    // if forceUnique, only allow numbers unique to control array numbers
    // and numbers generated so far
    if (forceUnique) {
      return (
        !validControlArrayValues.includes(num) && !generatedNums.includes(num)
      );
    }

    // check if there are possible unique numbers to generate
    const remainingPossibleNums =
      maxNum - generatedNums.length - validControlArrayValues.length;
    if (remainingPossibleNums === 0) {
      return true;
    }

    // if there are no possible remaining numbers to generate,
    // allow number existing in control array but not in numbers generated so far
    return !generatedNums.includes(num);
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
