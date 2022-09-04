import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "../index.module.css";

function VPNHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">
          Free, Anonymous VPN Powered by SoftEther and Tech Fiddle.
        </h1>
        <p className="hero__subtitle">
          Introducing our Free, Fast, Anonymous VPN Powered by the SoftEther
          Open Source VPN Project and made by Tech Fiddle, hosted in it's own
          servers. Now you can connect to our public and anonymous VPN. You can
          connect to our VPN by the following steps below:-
        </p>
        <div className={styles.buttons}>
          <Link className="button button--primary" to="/">
            Register for VPN Now!
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function VPN() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Anonymous VPN`}
      description="Introducing our Free, Fast, Anonymous VPN Powered by the SoftEther Open Source VPN Project and made by Tech Fiddle, hosted in it's own servers. Now you can connect to our public and anonymous VPN."
    >
      <VPNHeader />
      <main></main>
    </Layout>
  );
}
