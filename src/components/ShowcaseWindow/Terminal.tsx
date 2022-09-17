import React, { type ReactNode } from 'react';
import styles from './terminalStyles.module.css';

interface Props {
  children: ReactNode;
  minHeight: number;
  title: string;
}

function Terminal({
  children,
  minHeight,
  title = 'Tech Fiddle Terminal',
}: Props): JSX.Element {
  return (
    <div className={styles.browserWindow} style={{ minHeight }}>
      <div className={styles.browserWindowHeader}>
        <div className={styles.buttons}>
          <span className={styles.dot} style={{ background: '#f25f58' }} />
          <span className={styles.dot} style={{ background: '#fbbe3c' }} />
          <span className={styles.dot} style={{ background: '#58cb42' }} />
        </div>
        <div className={styles.browserWindowAddressBar}>{title}</div>
      </div>

      <div className={styles.browserWindowBody}>{children}</div>
    </div>
  );
}

export default Terminal;