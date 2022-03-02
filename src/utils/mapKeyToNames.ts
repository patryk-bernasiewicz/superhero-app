export const mapKeysToNames = (
  object: Record<string, unknown>
): Record<string, string> => {
  return Object.keys(object).reduce((accumulator, currentKey) => {
    return {
      ...accumulator,
      [currentKey]: currentKey.charAt(0).toUpperCase() + currentKey.slice(1),
    };
  }, {});
};
