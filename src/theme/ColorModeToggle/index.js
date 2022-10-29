import React from 'react';
import clsx from 'clsx';
import useIsBrowser from '@docusaurus/useIsBrowser';
import {translate} from '@docusaurus/Translate';
import IconLightMode from '@theme/Icon/LightMode';
import IconDarkMode from '@theme/Icon/DarkMode';
import styles from './styles.module.css';
import IconButton from "@mui/joy/IconButton";
import Tooltip from "@mui/joy/Tooltip";
import { useColorScheme } from '@mui/joy/styles';
function ColorModeToggle({className, value, onChange}) {
  const { mode, setMode } = useColorScheme();
  const isBrowser = useIsBrowser();
  const title = translate(
    {
      message: '{mode}',
      id: 'theme.colorToggle.ariaLabel',
      description: 'The ARIA label for the navbar color mode toggle',
    },
    {
      mode:
        value === 'dark'
          ? translate({
              message: 'Turn on the light',
              id: 'theme.colorToggle.ariaLabel.mode.dark',
              description: 'The name for the dark color mode',
            })
          : translate({
              message: 'Turn off the light',
              id: 'theme.colorToggle.ariaLabel.mode.light',
              description: 'The name for the light color mode',
            }),
    },
  );
  return (
    <>
    <div className="space"></div>
    <div className={clsx(styles.toggle, className)}>
      <Tooltip color="neutral" variant="solid" title={title}>
        <IconButton
          variant="outlined"
          color="primary"
          size="sm"
          className={clsx(
            styles.toggleButton,
            !isBrowser && styles.toggleButtonDisabled
          )}
          onClick={() => {onChange(value === 'dark' ? 'light' : 'dark'); setMode(mode === 'dark' ? 'light' : 'dark')}}
          disabled={!isBrowser}
          aria-label={title}>
          <IconLightMode
            className={clsx(styles.toggleIcon, styles.lightToggleIcon)} />
          <IconDarkMode
            className={clsx(styles.toggleIcon, styles.darkToggleIcon)} />
        </IconButton>
      </Tooltip>
    </div>
    </>
  );
}
export default React.memo(ColorModeToggle);
