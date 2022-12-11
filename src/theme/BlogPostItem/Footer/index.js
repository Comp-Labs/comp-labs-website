import React from 'react';
import clsx from 'clsx';
import { useBlogPost } from '@docusaurus/theme-common/internal';
import EditThisPage from '@theme/EditThisPage';
import TagsListInline from '@theme/TagsListInline';
import ReadMoreLink from '@theme/BlogPostItem/Footer/ReadMoreLink';
import styles from './styles.module.css';
import Giscus from "@giscus/react";
import YTSubscribe from '@site/src/components/YTSubscribe';
import NativeShare from "@site/src/components/NativeShare";
import { Provider, UpdownButton } from "@lyket/react";
export default function BlogPostItemFooter() {
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
      <hr />
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
        <div data-chirpy-comment="true" />
        <br />
        <Giscus
          id="comments"
          repo="Comp-Labs/comp-labs-website"
          repoId="R_kgDOGaLmeA"
          category="General"
          categoryId="DIC_kwDOGaLmeM4CBAA6"
          mapping="title"
          term="Comments"
          reactionsEnabled="1"
          emitMetadata="0"
          inputPosition="top"
          theme="preferred_color_scheme"
          lang="en"
          loading="lazy"
        />
      </div>
      <Provider apiKey="6fc6243f4df274525650ea97e4d638"
        theme={{
          colors: {
            primary: '#22c1c3',
            secondary: '#ff00c3',
            background: 'transparent',
            text: '#292929',
            highlight: '#e095ed',
            icon: '#292929',
          },
          fonts: {
            body: 'inherit',
          },
        }}
      >
        <UpdownButton
          namespace="techfiddle-react-website"
          id="everybody-updown-now"
        />
      </Provider>
      <br />
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
