import React from 'react';
import clsx from 'clsx';
import { translate } from '@docusaurus/Translate';
import { usePluralForm } from '@docusaurus/theme-common';
import { useDateTimeFormat } from '@docusaurus/theme-common/internal';
import { useBlogPost } from '@docusaurus/plugin-content-blog/client';
import type { Props } from '@theme/BlogPostItem/Header/Info';
import CalendarTodayRoundedIcon from '@mui/icons-material/CalendarTodayRounded';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import NativeShare from "@site/src/components/NativeShare";
import Chip from '@mui/joy/Chip';

import styles from './styles.module.css';

// Very simple pluralization: probably good enough for now
function useReadingTimePlural() {
  const { selectMessage } = usePluralForm();
  return (readingTimeFloat: number) => {
    const readingTime = Math.ceil(readingTimeFloat);
    return selectMessage(
      readingTime,
      translate(
        {
          id: 'theme.blog.post.readingTime.plurals',
          description:
            'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',
          message: '1 min read|{readingTime} min read',
        },
        { readingTime },
      ),
    );
  };
}

export function ReadingTime({ readingTime }: { readingTime: number }) {
  const readingTimePlural = useReadingTimePlural();
  return <>{readingTimePlural(readingTime)}</>;
}

export function DateTime({
  date,
  formattedDate,
}: {
  date: string;
  formattedDate: string;
}) {
  return <time dateTime={date}>{formattedDate}</time>;
}

export default function BlogPostItemHeaderInfo({
  className,
}: Props): JSX.Element {
  const { metadata } = useBlogPost();
  const { date, readingTime } = metadata;

  const dateTimeFormat = useDateTimeFormat({
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });

  const formatDate = (blogDate: string) =>
    dateTimeFormat.format(new Date(blogDate));

  return (
    <div className={clsx(styles.container, 'margin-vert--md flex justify-normal space-x-2', className)}>
      <Chip
        startDecorator={<CalendarTodayRoundedIcon />}
        color="primary"
        size="lg"
        variant="soft"
      >
        <DateTime date={date} formattedDate={formatDate(date)} />
      </Chip>
      {typeof readingTime !== 'undefined' && (
        <>
          <Chip
            startDecorator={<AccessTimeRoundedIcon />}
            color="primary"
            size="lg"
            variant="soft"
          >
            <ReadingTime readingTime={readingTime} />
          </Chip>
        </>
      )}
      <NativeShare />
    </div>
  );
}
