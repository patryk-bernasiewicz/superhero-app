import { SEARCH_DEBOUNCE_TIME } from '@utils/constants';
import { useEffect, useRef, useState } from 'react';

export const useDebouncedSearch = <T>(
  searchText: string | undefined,
  collection: T[] | undefined,
  keys: keyof T | keyof T[]
) => {
  const [isSearching, setSearching] = useState(false);
  const searchTimer = useRef<ReturnType<typeof setTimeout>>();
  const mountedRef = useRef<boolean>(false);
  const [filteredCollection, setFilteredCollection] = useState<
    T[] | undefined
  >();

  useEffect(() => {
    if (!collection?.length) {
      return;
    }

    if (!mountedRef.current) {
      mountedRef.current = true;
      return;
    }

    setSearching(true);

    if (searchTimer.current) {
      clearTimeout(searchTimer.current);
    }

    searchTimer.current = setTimeout(() => {
      setSearching(false);

      if (!searchText?.length || searchText.length < 2) {
        setFilteredCollection(undefined);
        return;
      }

      const filteredItems = collection.filter((item: T) => {
        if (Array.isArray(keys)) {
          return keys.some((key: keyof T) =>
            String(item[key]).toLowerCase().includes(searchText.toLowerCase())
          );
        }

        return String(item[keys as keyof T])
          .toLowerCase()
          .includes(searchText.toLowerCase());
      });
      setFilteredCollection(filteredItems);
    }, SEARCH_DEBOUNCE_TIME);
  }, [collection, keys, searchText]);

  return {
    isSearching,
    filteredResults: filteredCollection,
  };
};
