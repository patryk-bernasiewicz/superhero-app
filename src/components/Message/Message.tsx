import { ReactNode } from 'react';
import cx from 'classnames';

import styles from './Message.module.scss';

interface MessageProps {
  children?: ReactNode;
  heading?: string;
  text: string;
  kind?: 'error' | 'info';
}

export const Message = ({
  children,
  heading,
  text,
  kind = 'error',
  ...messageProps
}: MessageProps) => (
  <div
    className={cx(styles.wrapper, {
      [styles.error]: kind === 'error',
      [styles.info]: kind === 'info',
    })}
    {...messageProps}
  >
    <div className={styles.boundary}>
      {heading && <div className={styles.heading}>{heading}</div>}
      <p>{text}</p>
      {children}
    </div>
  </div>
);
