import React from 'react';
import clsx from 'clsx';
import { translate } from '@docusaurus/Translate';
import { ThemeClassNames } from '@docusaurus/theme-common';
import { useBackToTopButton } from '@docusaurus/theme-common/internal';
import Tooltip from "@mui/joy/Tooltip";

import styles from './styles.module.css';

export default function BackToTopButton(): JSX.Element {
  const { shown, scrollToTop } = useBackToTopButton({ threshold: 300 });
  return (
    <Tooltip title="Scroll to top" variant="solid">
      <button
        aria-label={translate({
          id: 'theme.BackToTopButton.buttonAriaLabel',
          message: 'Scroll back to top',
          description: 'The ARIA label for the back to top button',
        })}
        className={clsx(
          'clean-btn',
          ThemeClassNames.common.backToTopButton,
          styles.backToTopButton,
          shown && styles.backToTopButtonShow,
        )}
        type="button"
        onClick={scrollToTop}
      />
    </Tooltip>
  );
}