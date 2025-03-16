import React from 'react';
import clsx from 'clsx';
import { useDateTimeFormat } from '@docusaurus/theme-common/internal';
import { useBlogPost } from '@docusaurus/plugin-content-blog/client';
import BlogPostItemContainer from '@theme/BlogPostItem/Container';
import BlogPostItemHeader from '@theme/BlogPostItem/Header';
import BlogPostItemContent from '@theme/BlogPostItem/Content';
import BlogPostItemFooter from '@theme/BlogPostItem/Footer';
import type { Props } from '@theme/BlogPostItem';
import BlogPostItemHeaderAuthors from '@theme/BlogPostItem/Header/Authors';
import Link from "@docusaurus/Link";
import DateTime from '@theme/BlogPostItem/Header/Info';
import ReadingTime from '@site/src/components/ReadingTime';

// apply a bottom margin in list view
function useContainerClassName() {
  const { isBlogPostPage } = useBlogPost();
  return !isBlogPostPage ? 'margin-bottom--xl' : undefined;
}

export default function BlogPostItem({
  children,
  className,
}: Props): JSX.Element {
  const containerClassName = useContainerClassName();
  const { metadata, isBlogPostPage, frontMatter } = useBlogPost();
  const { permalink, title, date, readingTime } = metadata;
  const dateTimeFormat = useDateTimeFormat({
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });
  const formatDate = (blogDate: string) =>
    dateTimeFormat.format(new Date(blogDate));
  return (
    <>
      {isBlogPostPage ? (
        <BlogPostItemContainer className={clsx(containerClassName, className)}>
          <BlogPostItemHeader />
          <BlogPostItemContent>{children}</BlogPostItemContent>
          <BlogPostItemFooter />
        </BlogPostItemContainer>
      ) : (
        <BlogPostItemContainer className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 max-w-screen flex justify-center">
          <div>
            <Link href={permalink}>
              <img className="w-full rounded-lg shadow-xl shadow-blue-gray-900/50" src={frontMatter.image} alt="Blog Post Image" />
            </Link>
            <br /><br />
            <div className="flex flex-row justify-between items-center mb-5 text-gray-500">
              <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300"><i className="fa-solid fa-newspaper" /> Article</span>
              <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300"><i className="fa-regular fa-calendar" /> <DateTime /></span>
              <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300"><i className="fa-regular fa-clock" /> <ReadingTime readingTime={readingTime} /></span>
            </div>
            <div className='h-full flex-col justify-between align-baseline'>
              <div>
                <h2 className="self-start mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white h-2/5"><Link href={permalink}>{title}</Link></h2>
                <p className="self-center mb-5 font-light text-gray-500 dark:text-gray-400 h-2/5">{metadata.description}</p>
              </div>
              <div className="flex justify-between items-center">
                <BlogPostItemHeaderAuthors />
                <Link href={permalink} className="inline-flex items-center text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                  Read more
                  <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </Link>
              </div>
            </div>
            </div>
        </BlogPostItemContainer>
      )}
    </>
  );
}
