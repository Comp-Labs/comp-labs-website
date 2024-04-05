import React from 'react';
import clsx from 'clsx';
import { translate } from '@docusaurus/Translate';
import { usePluralForm } from '@docusaurus/theme-common';
import { useBlogPost } from '@docusaurus/theme-common/internal';
import type { Props } from '@theme/BlogPostItem/Header/Info';
import CalendarTodayRoundedIcon from '@mui/icons-material/CalendarTodayRounded';
import ReadingTime from "@site/src/components/ReadingTime";
import NativeShare from "@site/src/components/NativeShare";
import Chip from '@mui/joy/Chip';

import styles from './styles.module.css';

// Very simple pluralization: probably good enough for now
// function useReadingTimePlural() {
//   const {selectMessage} = usePluralForm();
//   return (readingTimeFloat: number) => {
//     const readingTime = Math.ceil(readingTimeFloat);
//     return selectMessage(
//       readingTime,
//       translate(
//         {
//           id: 'theme.blog.post.readingTime.plurals',
//           description:
//             'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',
//           message: 'One min read|{readingTime} min read',
//         },
//         {readingTime},
//       ),
//     );
//   };
// }

// function ReadingTime({readingTime}: {readingTime: number}) {
//   const readingTimePlural = useReadingTimePlural();
//   return <>{readingTimePlural(readingTime)}</>;
// }

function Date({ date, formattedDate }: { date: string; formattedDate: string }) {
  return (
    <time dateTime={date} itemProp="datePublished">
      {formattedDate}
    </time>
  );
}

// function Spacer() {
//   return <>{' · '}</>;
// }

export default function BlogPostItemHeaderInfo({
  className,
}: Props): JSX.Element {
  const { metadata } = useBlogPost();
  const { date, formattedDate, readingTime } = metadata;

  return (
    <div className={clsx(styles.container, 'margin-vert--md', className)}>
      <div className="flex flex-row">
        <Chip
          startDecorator={<CalendarTodayRoundedIcon />}
          color="primary"
          size="lg"
          variant="soft"
        >
          <Date date={date} formattedDate={formattedDate} />
        </Chip>
        {typeof readingTime !== 'undefined' && (
          <>
            <div className="space" />
            <ReadingTime />
            <div className="space" />
            <NativeShare />
            <div className="space" />
            <div className="addthis_inline_share_toolbox" />
          </>
        )}
      </div>
    </div>
  );
}
