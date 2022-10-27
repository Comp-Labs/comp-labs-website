import React from 'react';
import clsx from 'clsx';
import { translate } from '@docusaurus/Translate';
import { ThemeClassNames } from '@docusaurus/theme-common';
import { useBackToTopButton } from '@docusaurus/theme-common/internal';
import styles from './styles.module.css';
import Button from "@mui/joy/Button";
import Tooltip from "@mui/joy/Tooltip";
export default function BackToTopButton() {
  const { shown, scrollToTop } = useBackToTopButton({ threshold: 300 });
  return (
    // <Button
    //   className={clsx(
    //     'clean-btn',
    //     ThemeClassNames.common.backToTopButton,
    //     styles.backToTopButton,
    //     shown && styles.backToTopButtonShow,
    //   )}
    //   aria-label={translate({
    //     id: 'theme.BackToTopButton.buttonAriaLabel',
    //     message: 'Scroll back to top',
    //     description: 'The ARIA label for the back to top button',
    //   })}
    //   onClick={scrollToTop}
    //   size="sm"
    //   variant="soft"
    // />
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
  );
}
