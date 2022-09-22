import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageFeatures from "../components/HomepageFeatures";
import Translate, { translate } from "@docusaurus/Translate";
import useBaseUrl from "@docusaurus/useBaseUrl";
var ReactRotatingText = require("react-rotating-text");
import BlogPostItem from "@theme/BlogPostItem";
import { Content } from "@theme/BlogPostPage";
import { BlogPostProvider } from "@docusaurus/theme-common/internal";

interface Props {
  readonly recentPosts: readonly { readonly content: Content }[];
}

function RecentBlogPosts({ recentPosts }: Props): JSX.Element {
  <div className="container margin-top--xl">
    <div className="row">
      <div className="col col--9 col--offset-1">
        {recentPosts.map(({ content: BlogPostContent }) => (
          <BlogPostProvider
            key={BlogPostContent.metadata.permalink}
            content={BlogPostContent}
          >
            <BlogPostItem>
              <BlogPostContent />
            </BlogPostItem>
          </BlogPostProvider>
        ))}
      </div>
    </div>
  </div>
}

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div className={styles.hero}>
      <div className={styles.heroInner}>
        <h1 className={styles.heroProjectTagline}>
          {/* <img
            alt={translate({ message: "Tech Fiddle Logo Animated" })}
            className={styles.heroLogo}
            src={useBaseUrl("https://cdn.complabs.in/img/icon-removebg.jpg")}
            width="256"
            height="256"
          /> */}
          <span
            className={styles.heroTitleTextHtml}
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: translate({
                id: "homepage.hero.title",
                message:
                  "<p><b>Tech Fiddle</b><br><b>------</b>------<b>------</b>------<b>------</b><br>",
              }),
            }}
          />
          <ReactRotatingText
            items={["Guides.", "Apps.", "Solutions.", "Tools."]}
            color="#076af7"
          />
          <span
            className={styles.heroTitleTextHtml}
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: translate({
                id: "homepage.hero.title",
                message:
                  "<p>for <b>Personal</b>, <b>Business</b>, or <b>Enterprise Use</b>.</p></p>",
              }),
            }}
          />
        </h1>
        {/* <div className={styles.indexCtas}> */}
        {/* <div className="button-group button-group--block">
          <Link className="button button--primary" to="/docs">
            <Translate>Get Started</Translate>
          </Link>
          <Link className="button button--primary" to="/blog">
            <Translate>Guides</Translate>
          </Link>
          <Link className="button button--primary" href="https://github.com/Comp-Labs">
            <Translate>Follow Tech Fiddle</Translate>
          </Link>
          <Link className="button button--primary" href="https://github.com/sponsors/RudraSen2">
            <Translate>Sponsor Tech Fiddle</Translate>
          </Link>
          </div> */}
        {/* <span className={styles.indexCtasGitHubButtonWrapper}>
            <iframe
              className={styles.indexCtasGitHubButton}
              src="https://ghbtns.com/github-btn.html?user=Comp-Labs&amp;type=follow&amp;count=true&amp;size=small"
              width={190}
              height={30}
              title="Follow Tech Fiddle on GitHub"
            />
          </span>
          <br></br>
          <span className={styles.indexCtasGitHubButtonWrapper}>
            <iframe
              className={styles.indexCtasGitHubButton}
              src="https://ghbtns.com/github-btn.html?user=Comp-Labs&amp;type=sponsor&amp;size=small"
              frameborder="0"
              scrolling="0"
              width="180"
              height="30"
              title="GitHub"
            >
              width={190}
              height={30}
              title="Sponsor Tech Fiddle on GitHub"
            </iframe>
          </span> */}
        {/* </div> */}
      </div>
    </div>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Home`}
      description="Tech Fiddle provides a Tech Enthusiastic Blog, Lots of Apps, and Core Solutions to Empower you or your Enterprise."
    >
      <HomepageHeader />
      <main>
        {/* <RecentBlogPosts /> */}
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
