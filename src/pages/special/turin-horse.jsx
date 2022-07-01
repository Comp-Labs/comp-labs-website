import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "../index.module.css";
import Translate, { translate } from "@docusaurus/Translate";
import useBaseUrl from "@docusaurus/useBaseUrl";
import buttonStyles from "../../css/buttons.css";

function TurinHorseAnimationHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">The Turin Horse - Hadi</h1>
        <p className="hero__subtitle">
          The Turin Horse - Hadi CSS Animation Animation Brought to You by Comp
          Labs. Credits for this Animation goes to
          <a href="https://codepen.io/leimapapa/pen/GRQGzOZ" target="_blank">
            @leimapapa
          </a>
          at CodePen.
        </p>
      </div>
    </header>
  );
}

export default function TurinHorseAnimation() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`The Turin Horse - Hadi • Special ✨`}
      description="Turin Horse - Hadi Animation by Comp Labs"
    >
      <TurinHorseAnimationHeader />
      <main>
        <iframe
          src="/html/turin-horse.html"
          title="Turin Horse - Hadi Animation"
          width="100%"
          height="500"
        ></iframe>
        <center>
          <a
            href="https://codepen.io/rudrasen2/pen/oNEJXeo"
            target="_blank"
            rel="noopener noreferrer"
            class="button button--primary"
          >
            <i class="fa-brands fa-codepen"></i> Edit on CodePen
          </a>
        </center>
        <br></br>
        <p> </p>
      </main>
    </Layout>
  );
}
