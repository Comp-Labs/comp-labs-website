import React from 'react';
import clsx from 'clsx';
import { useBlogPost } from '@docusaurus/plugin-content-blog/client';
import BlogAuthor from '@theme/Blog/Components/Author';
import type { Props } from '@theme/BlogPostItem/Header/Authors';
import styles from './styles.module.css';
import Tooltip from "@mui/joy/Tooltip";

// Component responsible for the authors layout
export default function BlogPostItemHeaderAuthors({
  className,
}: Props): JSX.Element | null {
  const {
    metadata: { authors },
    assets,
    isBlogPostPage,
  } = useBlogPost();
  const authorsCount = authors.length;
  if (authorsCount === 0) {
    return null;
  }
  const imageOnly = authors.every(({ name }) => !name);
  const singleAuthor = authors.length === 1;
  return (
    <>
      {isBlogPostPage ? (
        <div
          className={clsx(
            'margin-top--md margin-bottom--sm',
            imageOnly ? styles.imageOnlyAuthorRow : 'row',
            className,
          )}>
          {authors.map((author, idx) => (
            <div
              className={clsx(
                !imageOnly && (singleAuthor ? 'col col--12' : 'col col--6'),
                imageOnly ? styles.imageOnlyAuthorCol : styles.authorCol,
              )}
              key={idx}>
              <BlogAuthor
                author={{
                  ...author,
                  // Handle author images using relative paths
                  imageURL: assets.authorsImageUrls[idx] ?? author.imageURL,
                }}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="flex items-center">
          <div className="flex items-center space-x-4 mb-5">
            {authors.map((author, idx) => (
              <div className="avatar">
                <img
                  className="avatar__photo avatar__photo--sm"
                  src={assets.authorsImageUrls[idx] ?? author.imageURL} />
                <div className="avatar__intro">
                  <div className="avatar__name">{author.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        //     <div className="flex mb-5 -space-x-4">
        //       <Tooltip arrow placement="top" variant="solid" color="neutral" size="md" title="Tech Fiddle">
        //         <img data-tooltip-target="tooltip-complabs" className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="https://github.com/comp-labs.png" alt="" />
        //       </Tooltip>
        //       <Tooltip arrow placement="top" variant="solid" color="neutral" size="md" title="Rudra Sen">
        //         <img data-tooltip-target="tooltip-rudrasen2" className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="https://github.com/rudrasen2.png" alt="" />
        //       </Tooltip>
        //     </div>
        //   </div>
        // </div>
      )}
    </>
  );
}
