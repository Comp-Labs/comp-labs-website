import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "../index.module.css";
import Translate, { translate } from "@docusaurus/Translate";
import useBaseUrl from "@docusaurus/useBaseUrl";
import buttonStyles from "../../css/buttons.css";

function LightsAnimationHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">Christmas Lights Animation</h1>
        <p className="hero__subtitle">
          Christmas Lights Animation Brought to You by Comp Labs. Credits for
          this Animation goes to{" "}
          <a href="https://codepen.io/tobyj/pen/QjvEex" target="_blank">
            @tobyj
          </a>{" "}
          at CodePen.
        </p>
        {/* <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/intro">
              Docusaurus Tutorial - 5min ⏱️
            </Link>
          </div> */}
      </div>
    </header>
  );
}

export default function LightsAnimation() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Christmas Lights • Special ✨`}
      description="Christmas Lights Animation by Comp Labs."
    >
      <LightsAnimationHeader />
      <main>
        <iframe
          src="/html/lightrope.html"
          title="Pure-CSS Christmas Lights"
          width="100%"
          height="500"
        ></iframe>
        <center>
          <a
            href="https://codepen.io/rudrasen2/pen/GRywgoR"
            target="_blank"
            rel="noopener noreferrer"
            class="button button--primary"
          >
            <i class="fa-brands fa-codepen"></i> View on CodePen
          </a>
        </center>
        <br></br>
        <p> </p>
      </main>
    </Layout>
  );
}
