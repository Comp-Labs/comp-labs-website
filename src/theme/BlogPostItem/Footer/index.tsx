import React from "react";
import Head from "@docusaurus/Head";
import { useBlogPost } from "@docusaurus/theme-common/internal";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Footer from "@theme-original/BlogPostItem/Footer";
import { useColorMode } from "@docusaurus/theme-common";
import Giscus from "@giscus/react";
import YTSubscribe from '@site/src/components/YTSubscribe';
import NativeShare from "@site/src/components/NativeShare";

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
        {/* <iframe
          src="/html/sharebtn/sharebtn.html"
          title="Share Button"
          height="100"
          width="100"
        ></iframe> */}
        <b><code>/</code></b>
        <div className="addthis_inline_share_toolbox"></div>
        </div>
        <h2>Subscribe to our YouTube Channel:</h2>
        <br></br>
        <YTSubscribe />
        <h2>Comments</h2>
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
      <div
        className="margin-vert--lg"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
      </div>
    </>
  );
}