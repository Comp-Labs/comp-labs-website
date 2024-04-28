import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import type { Props } from '@theme/Tag';
import Chip from "@mui/joy/Chip";

import styles from './styles.module.css';

export default function Tag({ permalink, label, count }: Props): JSX.Element {
  return (
    <Chip
      color="primary"
      variant="soft"
      component="a"
      size="lg"
      href={permalink}
    >
      {label}
      {count && " "}
      {count && <code>{count}</code>}
    </Chip>
    // <Link
    //   href={permalink}
    //   className={clsx(
    //     styles.tag,
    //     count ? styles.tagWithCount : styles.tagRegular,
    //   )}>
    //   {label}
    //   {count && <span>{count}</span>}
    // </Link>
  );
}
