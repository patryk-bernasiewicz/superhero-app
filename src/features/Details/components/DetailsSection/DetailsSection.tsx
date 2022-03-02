import { ReactNode } from 'react';

import styles from './DetailsSection.module.scss';

interface DetailsSectionProps {
  heading: string;
  children: ReactNode;
}

export const DetailsSection = ({ heading, children }: DetailsSectionProps) => (
  <section className={styles.wrapper}>
    <h2 className={styles.heading}>{heading}</h2>
    {children}
  </section>
);
