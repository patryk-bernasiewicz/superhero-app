import cx from 'classnames';
import { Link } from 'react-router-dom';

import { Superhero } from '@interfaces/superhero.interface';
import { jestIdsMap } from '@utils/jestHelpers';

import styles from './HeroesList.module.scss';

interface HeroesListProps {
  heroes: Superhero[];
}

export const HeroesList = ({ heroes }: HeroesListProps) => {
  if (!heroes.length) {
    return <div className={styles.notFoundMessage}>No heroes to display.</div>;
  }

  return (
    <ul className={styles.list} data-testid={jestIdsMap.heroesList.list}>
      {heroes.map(
        ({ id, name, slug, biography: { fullName, alignment, publisher } }) => (
          <li key={id} data-testid={jestIdsMap.heroesList.item}>
            <Link
              to={`/${slug}`}
              className={styles.item}
              data-testid={jestIdsMap.heroesList.link}
            >
              <div className={styles.name}>{name}</div>
              <div className={styles.hidden}>
                <span className={styles.fullName}>{fullName}</span>
                {', '}
                <span className={cx(styles.alignment, styles[alignment])}>
                  {alignment}
                </span>
                {', '}
                <span className={styles.publisher}>{publisher}</span>
              </div>
            </Link>
          </li>
        )
      )}
    </ul>
  );
};
