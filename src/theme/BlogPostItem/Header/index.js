import React from 'react';
import BlogPostItemHeaderTitle from '@theme/BlogPostItem/Header/Title';
import BlogPostItemHeaderInfo from '@theme/BlogPostItem/Header/Info';
import BlogPostItemHeaderAuthors from '@theme/BlogPostItem/Header/Authors';
import ReadingTime from "@site/arc/components/ReadingTime";
import NativeShare from "@site/src/components/NativeShare";
import {useBlogPost} from '@docusaurus/theme-common/internal';
const {frontMatter} = useBlogPost();
export default function BlogPostItemHeader() {
  return (
    <header>
        <img src={frontMatter.image} title="Blog Image" />
      <BlogPostItemHeaderTitle />
      <div className="row">
        <ReadingTime />
        <NativeShare />
        <div className="addthis_inline_share_toolbox" />
        </div>
      {/* <BlogPostItemHeaderInfo /> */}
      <BlogPostItemHeaderAuthors />
    </header>
  );
}
