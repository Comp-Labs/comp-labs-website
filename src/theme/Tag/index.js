import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';
import Chip from "@mui/joy/Chip";
import { CssVarsProvider } from "@mui/joy/styles";

export default function Tag({ permalink, label, count }) {
  return (
    <CssVarsProvider>
      <Chip
        // className={clsx(
        //   count ? styles.tagWithCount : styles.tagRegular,
        // )}
        color="primary"
        variant="soft"
        component="a"
        href={permalink}
      >
        {count && <code>{count}</code>}
        <code>Posts Contain</code>
        <div className="space"></div>
        {label}
      </Chip>
    </CssVarsProvider>

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

{/* <Chip
        className={clsx(
          count ? styles.tagWithCount : styles.tagRegular,
        )}
        color="primary"
        variant="soft"
        component="a"
        href={permalink}
      > */}
