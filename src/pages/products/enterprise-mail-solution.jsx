import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
// import styles from "../index.module.css";
import Translate, { translate } from "@docusaurus/Translate";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Admonition from "@theme/Admonition";

function MailHeader1() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", "heroBanner")}>
      <div className="container">
        <Admonition type="caution" icon="⚠️">
          <p>
            <b>
              This Page is in Development. Browse this Page with Caution ⚠️.
            </b>
          </p>
        </Admonition>
        <h1 className="hero__title">
          App Submission Solution for Google Play Developer Console
        </h1>
        <p className="hero__subtitle"></p>
        <div className={buttons}>
          <Link
            className="button button--primary"
            href="https://forms.gle/XM3VbGQD6uXqNr43A"
          >
            Register Now!
          </Link>
        </div>
      </div>
    </header>
  );
}

function MailHeader2() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div className={"hero"}>
      <div className={"heroInner"}>
        <h1 className={"heroProjectTagline"}>
          {/* <img
                alt={translate({message: 'Tech Fiddle Logo Animated'})}
                className={"heroLogo"}
                src={useBaseUrl('https://cdn.jsdelivr.net/gh/Comp-Labs/cdn/img/apps/comp-labs-meet/icon.png')}
                width="256"
                height="256"
              /> */}
          <span
            className={"heroTitleTextHtml"}
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: translate({
                id: "homepage.hero.title",
                message:
                  "<p>Best <b>SaaS Solution</b> Which <b>Empowers</b> Your <b>Personal</b>, <b>Enterprise</b>, and <b>Enterprise Mail</b> <b>Anywhere</b>, No <b>Matter Where You Are</b>.</p>",
              }),
            }}
          />
        </h1>
        <div className={"indexCtas"}>
          <Link
            className="button button--primary"
            href="https://forms.gle/XM3VbGQD6uXqNr43A"
          >
            <Translate>Register Now!</Translate>
          </Link>
          <Admonition type="caution" icon="⚠️">
            <p>
              <b>
                This Page is in Development. Browse this Page with Caution ⚠️.
              </b>
            </p>
          </Admonition>
        </div>
      </div>
    </div>
  );
}

export default function Mail() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Enterprise Mail Solution`}
      description="SaaS Solution to Empower Your Mail Anywhere, No Matter Where You Are! Powered By Tech Fiddle Mail."
    >
      <MailHeader2 />
      {/* <MailHeader1 /> */}
      <main></main>
    </Layout>
  );
}