import React from 'react';
import clsx from 'clsx';
import { useColorMode } from '@docusaurus/theme-common';
import { useBlogPost } from '@docusaurus/theme-common/internal';
import EditThisPage from '@theme/EditThisPage';
import TagsListInline from '@theme/TagsListInline';
import ReadMoreLink from '@theme/BlogPostItem/Footer/ReadMoreLink';
import styles from './styles.module.css';
import Giscus from "@giscus/react";
import YTSubscribe from '@site/src/components/YTSubscribe';
import NativeShare from "@site/src/components/NativeShare";
import Divider from "@mui/joy/Divider";
export default function BlogPostItemFooter() {
  const { colorMode } = useColorMode();
  const { metadata, isBlogPostPage } = useBlogPost();
  const { tags, title, editUrl, hasTruncateMarker } = metadata;
  // A post is truncated if it's in the "list view" and it has a truncate marker
  const truncatedPost = !isBlogPostPage && hasTruncateMarker;
  const tagsExists = tags.length > 0;
  const renderFooter = tagsExists || truncatedPost || editUrl;
  if (!renderFooter) {
    return null;
  }
  return (
    <footer
      className={clsx(
        'row docusaurus-mt-lg',
        isBlogPostPage && styles.blogPostFooterDetailsFull,
      )}>

      {isBlogPostPage && (
        <>
          <Divider />
          <div className="margin-vert--xl">
            <h2>Share</h2>
            <div className="row">
              <div className="muiSpace" />
              <NativeShare />
              <div className="space" />
              <div className="addthis_inline_share_toolbox" />
            </div>
            <br />
            <h2>Subscribe to our YouTube Channel:</h2>
            <br />
            <YTSubscribe />
            <h2>Comments</h2>
            <br />
            <Giscus
              id="comments"
              repo="Comp-Labs/comp-labs-website"
              repoId="R_kgDOGaLmeA"
              category="Comments"
              categoryId="DIC_kwDOGaLmeM4CUTpC"
              mapping="title"
              term="Comments"
              reactionsEnabled="1"
              emitMetadata="0"
              inputPosition="top"
              theme={colorMode}
              lang="en"
              loading="lazy" />
          </div>
        </>
      )}

      {tagsExists && (
        <div className={clsx('col', { 'col--9': truncatedPost })}>
          <TagsListInline tags={tags} />
        </div>
      )}

      {isBlogPostPage && editUrl && (
        <div className="col margin-top--sm">
          <EditThisPage editUrl={editUrl} />
        </div>
      )}

      {truncatedPost && (
        <div
          className={clsx('col text--right', {
            'col--3': tagsExists,
          })}>
          <ReadMoreLink blogPostTitle={title} to={metadata.permalink} />
        </div>
      )}
    </footer>
  );
}
