import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "../index.module.css";
import Translate, { translate } from "@docusaurus/Translate";
import useBaseUrl from "@docusaurus/useBaseUrl";
import buttonStyles from "../../css/buttons.css";

function AnimeKomiHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">Anime Komi Animation</h1>
        <p className="hero__subtitle">
          Anime Komi Animation Brought to You by Comp Labs. Credits for this
          Animation goes to
          <a href="https://codepen.io/tiffachoo/pen/wvyXRzL" target="_blank">
            @tiffachoo
          </a>
          at CodePen.
        </p>
      </div>
    </header>
  );
}

export default function AnimeKomi() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Anime Komi • Special ✨`}
      description="Anime Komi Animation by Comp Labs"
    >
      <AnimeKomiHeader />
      <main>
        <iframe
          src="/html/komi.html"
          title="Anime Komi Animation"
          width="100%"
          height="500"
        ></iframe>
        <center>
          <a
            href="https://codepen.io/rudrasen2/pen/YzedXxa"
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
