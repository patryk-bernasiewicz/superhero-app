import cx from 'classnames';

import { Superhero } from '@interfaces/superhero.interface';

import styles from './HeroHeadline.module.scss';
import { jestIdsMap } from '@utils/jestHelpers';

interface HeroHeadlineProps {
  name: Superhero['name'];
  alignment: Superhero['biography']['alignment'];
}

export const HeroHeadline = ({ name, alignment }: HeroHeadlineProps) => (
  <div className={styles.headline}>
    <h1
      className={styles.heroName}
      data-testid={jestIdsMap.heroDetails.heading}
    >
      {name}
    </h1>
    <span
      className={cx(styles.alignment, {
        [styles.good]: alignment === 'good',
        [styles.bad]: alignment === 'bad',
      })}
      data-testid={jestIdsMap.heroDetails.alignment}
    >
      {alignment}
    </span>
  </div>
);
