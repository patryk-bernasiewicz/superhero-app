import { useContext } from 'react';

import { AppContext } from '@context/AppContext';
import { jestIdsMap } from '@utils/jestHelpers';
import { HeroesList } from '@features/HeroesBrowser/components/HeroesList/HeroesList';
import { SearchForm } from '@features/HeroesBrowser/components/SearchForm/SearchForm';
import { ReactComponent as RippleLoader } from '@svg/ripple.svg';
import messages from '@utils/messages';

import styles from './HeroesBrowser.module.scss';

export const HeroesBrowser = () => {
  const {
    areHeroesFetched,
    areHeroesFetching,
    hasSearchResults,
    searchText,
    setSearchText,
    displayedHeroes,
  } = useContext(AppContext);

  return (
    <>
      <SearchForm
        isDisabled={!areHeroesFetched}
        value={searchText}
        onChange={setSearchText}
      />
      {areHeroesFetched ? (
        <>
          {!hasSearchResults && (
            <div className={styles.randomSelection}>
              {messages.checkOutRandomHeroes}
            </div>
          )}
          <HeroesList isDisabled={areHeroesFetching} heroes={displayedHeroes} />
        </>
      ) : (
        <RippleLoader data-testid={jestIdsMap.loader} />
      )}
    </>
  );
};

export default HeroesBrowser;
