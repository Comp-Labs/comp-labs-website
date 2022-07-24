import React from "react";
import { DiscussionEmbed } from "disqus-react";
import { useBlogPost } from "@docusaurus/theme-common/internal";
import BlogPostItem from "@theme-original/BlogPostItem";

export default function BlogPostItemWrapper(props) {
  const { metadata } = useBlogPost();
  const { frontMatter, slug, title } = metadata;
  const { comments = true } = frontMatter;
  return (
    <>
      <BlogPostItem {...props} />
      <hr></hr>
      <strong>Subscribe to our Channel:</strong>
      <iframe
          src="https://complabs.in/html/subscribe.html"
          title="Subscribe Comp Labs"
          height="100"
        ></iframe>
      <h2>Comments</h2>
      {comments && (
        <DiscussionEmbed
          shortname="comp-labs"
          config={{
            url: slug,
            identifier: slug,
            title,
            language: "en_US",
          }}
        />
      )}
    </>
  );
}
