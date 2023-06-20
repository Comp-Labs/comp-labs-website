import React from 'react';
import clsx from 'clsx';
import { translate } from '@docusaurus/Translate';
import { useThemeConfig } from '@docusaurus/theme-common';
import Link from '@mui/joy/Link';
import LinkIcon from '@mui/icons-material/Link';
import type { Props } from '@theme/Heading';

import styles from './styles.module.css';

export default function Heading({ as: As, id, ...props }: Props): JSX.Element {
  const {
    navbar: { hideOnScroll },
  } = useThemeConfig();
  // H1 headings do not need an id because they don't appear in the TOC.
  if (As === 'h1' || !id) {
    return <As {...props} id={undefined} />;
  }

  const anchorTitle = translate(
    {
      id: 'theme.common.headingLinkTitle',
      message: 'Direct link to {heading}',
      description: 'Title for link to heading',
    },
    {
      heading: typeof props.children === 'string' ? props.children : id,
    },
  );

  return (
    <As
      {...props}
      className={clsx(
        'anchor',
        hideOnScroll
          ? styles.anchorWithHideOnScrollNavbar
          : styles.anchorWithStickyNavbar,
        props.className,
      )}
      id={id}>
      {props.children}
      <a
        className="hash-link"
        href={`#${id}`}
        title={translate({
          id: 'theme.common.headingLinkTitle',
          message: 'Direct link to heading',
          description: 'Title for link to heading',
        })}>
        <Link
          variant="outlined"
          fontSize="md"
          borderRadius="sm"
        >
          <LinkIcon />
        </Link>
      </a>
    </As>
  );
}
