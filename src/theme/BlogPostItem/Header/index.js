import React from 'react';
import BlogPostItemHeaderTitle from '@theme/BlogPostItem/Header/Title';
import BlogPostItemHeaderInfo from '@theme/BlogPostItem/Header/Info';
import BlogPostItemHeaderAuthors from '@theme/BlogPostItem/Header/Authors';
import ReadingTime from "@site/src/components/ReadingTime";
import NativeShare from "@site/src/components/NativeShare";
import { useBlogPost } from '@docusaurus/theme-common/internal';
export default function BlogPostItemHeader() {
  const { frontMatter } = useBlogPost();
  return (
    <header>
      <BlogPostItemHeaderTitle />
      <div className="row">
        <div className="muiSpace" />
        <ReadingTime />
        <div className="space" />
        <NativeShare />
        <div className="space" />
        <div className="addthis_inline_share_toolbox" />
      </div>
      <BlogPostItemHeaderInfo />
      <BlogPostItemHeaderAuthors />
      <img src={frontMatter.image} />
    </header>
  );
}
