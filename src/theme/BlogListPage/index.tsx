import React from 'react';
import clsx from 'clsx';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {
  PageMetadata,
  HtmlClassNameProvider,
  ThemeClassNames,
} from '@docusaurus/theme-common';
import BlogLayout from '@theme/BlogLayout';
import BlogListPaginator from '@theme/BlogListPaginator';
import SearchMetadata from '@theme/SearchMetadata';
import type { Props } from '@theme/BlogListPage';
import BlogPostItems from '@theme/BlogPostItems';
import Link from "@docusaurus/Link";
import Divider from "@mui/joy/Divider";

function BlogListPageMetadata(props: Props): JSX.Element {
  const { metadata } = props;
  const {
    siteConfig: { title: siteTitle },
  } = useDocusaurusContext();
  const { blogDescription, blogTitle, permalink } = metadata;
  const isBlogOnlyMode = permalink === '/';
  const title = isBlogOnlyMode ? siteTitle : blogTitle;
  return (
    <>
      <PageMetadata title={title} description={blogDescription} />
      <SearchMetadata tag="blog_posts_list" />
    </>
  );
}

function BlogListPageContent(props: Props): JSX.Element {
  const { metadata, items, sidebar } = props;
  return (
    <BlogLayout sidebar={sidebar}>
      <div className="text-center lg:mb-16 mb-8">
        <h1 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Welcome to Tech Fiddle Guides!</h1>
        <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">Select one of the blog posts from the list below or search using the search box above for your convenience. As most of our blog posts are YouTube Videos, we recommend you to visit our YouTube Channel and browse our videos. You can see the Blog Archive at the link below as well.</p>

        <div className="flex flex-col items-center justify-center">
          <div className="button-group">
            <Link className="button button--primary button--md" href="https://techfiddle.org/blog/rss.xml">
              <i className="fa-solid fa-rss" /> RSS Feed
            </Link>
            <Link className="button button--primary button--md" to="/blog/tags">
              <i className="fa-solid fa-tag" /> Filter by Tags
            </Link>
            <Link className="button button--primary button--md" to="/blog/archive">
              <i className="fa-solid fa-box-archive" /> Archive
            </Link>
            <Link
              className="button button--primary button--md"
              href="https://youtube.com/@techfiddle"
            >
              <i className="fa-brands fa-youtube" /> YouTube Channel
            </Link>
          </div>
        </div>
      </div>
      <Divider />
      <br />
      <BlogPostItems items={items} />
      <BlogListPaginator metadata={metadata} />
    </BlogLayout>
  );
}

export default function BlogListPage(props: Props): JSX.Element {
  return (
    <HtmlClassNameProvider
      className={clsx(
        ThemeClassNames.wrapper.blogPages,
        ThemeClassNames.page.blogListPage,
      )}>
      <BlogListPageMetadata {...props} />
      <BlogListPageContent {...props} />
    </HtmlClassNameProvider>
  );
}
