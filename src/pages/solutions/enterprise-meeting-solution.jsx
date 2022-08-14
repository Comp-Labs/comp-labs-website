import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "../index.module.scss";
import Translate, { translate } from "@docusaurus/Translate";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Admonition from "@theme/Admonition";

function MeetHeader1() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Admonition type="caution" icon="⚠️">
          <p>
            <b>
              This Page is in Development. Browse this Page with Caution ⚠️.
            </b>
          </p>
        </Admonition>
        {/* <h1 className="hero__title">App Submission Service for Google Play Developer Console</h1>
        <p className="hero__subtitle"></p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            href="https://forms.gle/XM3VbGQD6uXqNr43A">
            Register Now!
          </Link>
        </div> */}
      </div>
    </header>
  );
}

function MeetHeader2() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div className={styles.hero}>
      <div className={styles.heroInner}>
        <h1 className={styles.heroProjectTagline}>
          <img
            alt={translate({ message: "Tech Fiddle Logo Animated" })}
            className={styles.heroLogo}
            src={useBaseUrl("/img/apps/comp-labs-meet/icon.png")}
            width="256"
            height="256"
          />
          <span
            className={styles.heroTitleTextHtml}
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: translate({
                id: "homepage.hero.title",
                message:
                  "<p>Best <b>SaaS Solution</b> Which <b>Empowers</b> Your <b>Personal</b>, <b>Business</b>, and <b>Enterprise Meetings</b> <b>Anywhere</b>, No <b>Matter Where You Are</b>.</p>",
              }),
            }}
          />
        </h1>
      </div>
    </div>
  );
}

export default function Play() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Google Play Developers`}
      description="SaaS Solution to Submit Apps to Google Play Store Free of Cost!"
    >
      <MeetHeader2 />
      <MeetHeader1 />
      <main></main>
    </Layout>
  );
}
