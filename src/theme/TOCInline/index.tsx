import React from 'react';
import TOCItems from '@theme/TOCItems';
import type { Props } from '@theme/TOCInline';
import Card from '@mui/joy/Card';
import Typography from "@mui/joy/Typography";

import styles from './styles.module.css';

export default function TOCInline({
  toc,
  minHeadingLevel,
  maxHeadingLevel,
}: Props): JSX.Element {
  return (
    <Card variant="outlined">
      <div className={styles.tableOfContentsInline}>
        <Typography level="h4" component="h6">Table of Contents</Typography>
        <TOCItems
          toc={toc}
          minHeadingLevel={minHeadingLevel}
          maxHeadingLevel={maxHeadingLevel}
          className="table-of-contents"
          linkClassName={null}
        />
      </div>
    </Card>
  );
}
