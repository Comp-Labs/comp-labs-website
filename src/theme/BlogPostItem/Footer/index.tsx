import React from "react";
import Head from "@docusaurus/Head";
import { useBlogPost } from "@docusaurus/theme-common/internal";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Footer from "@theme-original/BlogPostItem/Footer";
import { useColorMode } from "@docusaurus/theme-common";
import Giscus from "@giscus/react";
import YTSubscribe from '@site/src/components/YTSubscribe';
import NativeShare from "@site/src/components/NativeShare";
import { Provider, UpdownButton } from "@lyket/react";

export default function FooterWrapper(props: {}) {
  const { siteConfig } = useDocusaurusContext();
  const { metadata, isBlogPostPage } = useBlogPost();
  const { colorMode } = useColorMode();

  if (!isBlogPostPage) {
    return <Footer {...props} />;
  }

  return (
    <>
      <Head>
        <title>{metadata.title}</title>
      </Head>
      <Footer {...props} />
      <hr></hr>
      <div className="margin-vert--xl">
        <h2>Share</h2>
        <div className="row">
          <NativeShare />
          <div className="addthis_inline_share_toolbox"></div>
        </div>
        <h2>Subscribe to our YouTube Channel:</h2>
        <br></br>
        <YTSubscribe />
        <h2>Comments</h2>
        <div data-chirpy-comment="true"></div>
        <br></br>
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
    </>
  );
}