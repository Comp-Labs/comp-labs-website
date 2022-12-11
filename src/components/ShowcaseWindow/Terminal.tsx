import React, { type ReactNode } from 'react';
import terminalStyles from './terminalStyles.module.css';

interface terminalProps {
  background: string;
  children: ReactNode;
  color: string;
  minHeight: number;
  title: string;
}

function Terminal({
  background = '#000000',
  children,
  color = '#ffffff',
  minHeight,
  title = 'Tech Fiddle Terminal',
}: terminalProps): JSX.Element {
  return (
    <div className={terminalStyles.browserWindow} style={{ minHeight }}>
      <div className={terminalStyles.browserWindowHeader}>
        <div className={terminalStyles.buttons}>
          <span className={terminalStyles.dot} style={{ background: '#f25f58' }} />
          <span className={terminalStyles.dot} style={{ background: '#fbbe3c' }} />
          <span className={terminalStyles.dot} style={{ background: '#58cb42' }} />
        </div>
        <div className={terminalStyles.browserWindowAddressBar}>{title}</div>
        <div className={terminalStyles.browserWindowMenuIcon}>
          <i className="fa-solid fa-gear" />
        </div>
      </div>

      <div className={terminalStyles.browserWindowBody} style={{ background, color }}>{children}</div>
    </div>
  );
}

export default Terminal;