import React from 'react';
import Chip from "@mui/joy/Chip";
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';
export default function Tag({ permalink, label, count }) {
  return (
    <Chip
      color="primary"
      variant="soft"
      component="a"
      href={permalink}
    >
      {label}
      {count && <div className="space" />}
      {count && <code>{count}</code>}
    </Chip>
  );
}
