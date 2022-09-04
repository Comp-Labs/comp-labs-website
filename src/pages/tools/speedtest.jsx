import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "../index.module.css";

function SpeedtestHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">
          Free, Fast, and Accurate Internet SpeedTest
        </h1>
        <p className="hero__subtitle">
          This is our Free, Fast, and Always Accurate Internet, Internet
          SpeedTest. It is powered by OpenSpeedTest to give you the best
          experience, accurate and detailed SpeedTest. Click on the "Start"
          Button Below to Start the SpeedTest. Download the App for Your
          Platform for More Accurate Results as told by the Experts.
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

export default function Speedtest() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`SpeedTest`} description="">
      <SpeedtestHeader />
      <main>
        <iframe
          src="https://cdn.complabs.in/html/speedtest.html"
          title="OpenSpeedTest HTML5 Widget"
          width="100%"
          height="1000"
        ></iframe>
      </main>
    </Layout>
  );
}
