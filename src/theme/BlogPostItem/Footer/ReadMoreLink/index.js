import React from 'react';
import Translate, { translate } from '@docusaurus/Translate';
import Link from '@docusaurus/Link';
import Button from "@mui/joy/Button";
import {CssVarsProvider} from "@mui/joy/styles";
function ReadMoreLabel() {
  return (
    <b>
      <Translate
        id="theme.blog.post.readMore"
        description="The label used in blog post item excerpts to link to full blog posts">
        Read More
      </Translate>
    </b>
  );
}
export default function BlogPostItemFooterReadMoreLink(props) {
  const { blogPostTitle, ...linkProps } = props;
  return (
    <Link
      aria-label={translate(
        {
          message: 'Read more about {title}',
          id: 'theme.blog.post.readMoreLabel',
          description:
            'The label used in blog post item excerpts to link to full blog posts',
        },
        { title: blogPostTitle },
      )}
      {...linkProps}>
      <ReadMoreLabel />
    </Link>
  );
}
