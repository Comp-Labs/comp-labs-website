import React from 'react';
import BlogPostItemHeaderTitle from '@theme/BlogPostItem/Header/Title';
import BlogPostItemHeaderInfo from '@theme/BlogPostItem/Header/Info';
import BlogPostItemHeaderAuthors from '@theme/BlogPostItem/Header/Authors';
import { useBlogPost } from '@docusaurus/theme-common/internal';
export default function BlogPostItemHeader() {
  const { frontMatter } = useBlogPost();
  return (
    <header>
      <BlogPostItemHeaderTitle />
      <BlogPostItemHeaderInfo />
      <BlogPostItemHeaderAuthors />
      <img src={frontMatter.image} />
    </header>
  );
}
