import { jestIdsMap } from '@utils/jestHelpers';
import { useMemo } from 'react';
import styles from './HeroDetailsList.module.scss';

interface HeroDetailsListProps<T> {
  details: T;
  detailNamesMap: Record<string, string>;
}

export const HeroDetailsList = <T,>({
  details,
  detailNamesMap,
}: HeroDetailsListProps<T>) => {
  const parsedDetails = useMemo(() => {
    return Object.keys(details).reduce((accumulator, currentKey) => {
      const value = String(details[currentKey as keyof T]);
      const shouldSplit = value.match(/,(?![^(]*\))/);

      const parsedValue = shouldSplit
        ? value.split(/,(?![^(]*\))/).map((str) => str.trim())
        : value.trim();

      return {
        ...accumulator,
        [currentKey]: parsedValue,
      };
    }, {});
  }, [details]) as T;

  return (
    <dl className={styles.list}>
      {Object.keys(parsedDetails).map((key) => {
        const value = parsedDetails[key as keyof T];

        return (
          <div key={key} className={styles.item}>
            <dt className={styles.statName}>{detailNamesMap[key]}</dt>
            <dd
              className={styles.statValue}
              style={{
                width: '100%',
                overflow: 'hidden',
                flexGrow: 1,
              }}
              data-testid={jestIdsMap.heroDetails.detailLabel}
            >
              {Array.isArray(value) ? (
                <ul className={styles.valueList}>
                  {value.map((singleValue, index) => (
                    <li key={`${singleValue}-${index}`}>
                      {singleValue.trim()}
                    </li>
                  ))}
                </ul>
              ) : (
                value
              )}
            </dd>
          </div>
        );
      })}
    </dl>
  );
};
