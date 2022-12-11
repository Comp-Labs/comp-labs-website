import React, { type ReactNode } from 'react';
import styles from './styles.module.css';

interface Props {
  background: string;
  children: ReactNode;
  color: string;
  minHeight: number;
  url: string;
}

function Browser({
  background = '#ffffff',
  children,
  color = '#000000',
  minHeight,
  url = 'https://complabs.in/',
}: Props): JSX.Element {
  return (
    <div className={styles.browserWindow} style={{ minHeight }}>
      <div className={styles.browserWindowHeader}>
        <div className={styles.buttons}>
          <span className={styles.dot} style={{ background: '#f25f58' }} />
          <span className={styles.dot} style={{ background: '#fbbe3c' }} />
          <span className={styles.dot} style={{ background: '#58cb42' }} />
        </div>
        <div className={styles.browserWindowAddressBar}><i className="fa-solid fa-lock" /> {url}</div>
        <div className={styles.browserWindowMenuIcon}>
          <div>
            <span className={styles.bar} />
            <span className={styles.bar} />
            <span className={styles.bar} />
          </div>
        </div>
      </div>

      <div className={styles.browserWindowBody} style={{ background, color }}>{children}</div>
    </div>
  );
}

export default Browser;