import { ReactNode } from 'react';

import styles from './Layout.module.scss';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => (
  <div className={styles.wrapper}>
    <main className={styles.content}>{children}</main>
  </div>
);
