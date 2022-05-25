import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "../index.module.css";
import Translate, { translate } from "@docusaurus/Translate";
import useBaseUrl from "@docusaurus/useBaseUrl";
import buttonStyles from "../../css/buttons.css";

function SewingAnimationHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">Sewing Machine Animation</h1>
        <p className="hero__subtitle">
          Sewing Machine Animation Brought to You by Comp Labs. Credits for this
          Animation goes to{" "}
          <a href="https://codepen.io/annampawl/pen/jOZmboO" target="_blank">
            @annampawl
          </a>{" "}
          at CodePen.
        </p>
      </div>
    </header>
  );
}

export default function SewingAnimation() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Sewing Machine Animation • Special ✨`}
      description="Sewing Machine Animation by Comp Labs"
    >
      <SewingAnimationHeader />
      <main>
        <iframe
          src="/html/sewing.html"
          title="Sewing Machine Animation"
          width="100%"
          height="500"
        ></iframe>
        <center>
          <a
            href="https://codepen.io/rudrasen2/pen/XWZeqVb"
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