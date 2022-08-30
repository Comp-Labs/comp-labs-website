import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageFeatures from "../components/HomepageFeatures";
import Translate, { translate } from "@docusaurus/Translate";
import useBaseUrl from "@docusaurus/useBaseUrl";
var ReactRotatingText = require('react-rotating-text');

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div className={styles.hero}>
      <div className={styles.heroInner}>
        <h1 className={styles.heroProjectTagline}>
          {/* <img
            alt={translate({ message: "Tech Fiddle Logo Animated" })}
            className={styles.heroLogo}
            src={useBaseUrl("/img/complabs.jpg")}
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
          <ReactRotatingText items={['Guides.', 'Apps.', 'Solutions.', 'Tools.']} color="#076af7" />
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
        <div className={styles.indexCtas}>
          <Link className="button button--primary" to="/docs">
            <Translate>Get Started</Translate>
          </Link>
          {/* <Link className="button button--info" to="/blog"><Translate>Guides</Translate></Link> */}
          <span className={styles.indexCtasGitHubButtonWrapper}>
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
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={``}
      description="Our website provides Technical Guides, Apps, and Google Play Developer Console Service. This is a non-profit website so please donate to us to keep our resources running. You can write your feedback and comments about anything on our Contact Us page. See details of our services below."
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
