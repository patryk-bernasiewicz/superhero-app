import { getUniqueRandomNumbers } from '@utils/getUniqueRandomNumbers';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

export const useRandomItems = <T>(
  collection: T[] | undefined,
  length = 3,
  carouselTime = 15000
) => {
  const carouselTimer = useRef<ReturnType<typeof setTimeout>>();
  const [randomIndexes, setRandomIndexes] = useState<number[]>([]);

  const randomItems = useMemo(() => {
    if (!collection?.length || !randomIndexes.length) {
      return;
    }

    return randomIndexes.map((randomIndex) => collection[randomIndex]);
  }, [collection, randomIndexes]);

  const generateRandomIndexes = useCallback(() => {
    if (!collection?.length) {
      return;
    }

    const indexes = getUniqueRandomNumbers(
      length,
      collection?.length,
      randomIndexes
    );
    setRandomIndexes(indexes);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [collection]);

  const clearCarousel = () => {
    if (carouselTimer.current) {
      clearInterval(carouselTimer.current);
    }
  };

  useEffect(() => {
    generateRandomIndexes();
    carouselTimer.current = setInterval(generateRandomIndexes, carouselTime);

    return clearCarousel;
  }, [generateRandomIndexes, collection, carouselTime]);

  return randomItems;
};
