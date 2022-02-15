import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from '../index.module.css';

function WebToolsHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">Free HTML Web Tools</h1>
        <p className="hero__subtitle">Welcome! These are the Web Tools Powered by <code>WebToolHub.com</code>, designed and embedded by Comp Labs. You can find many web tools here. You all can also give us some ideas about other new web tools and provide us the HTML code at support@complabs.in or contact us at the contact us form at the <a href="/contact-us">Contact Page.</a></p>
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

export default function WebTools() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Web Tools`}
      description="">
      <WebToolsHeader />
      <main>
      </main>
    </Layout>
  );
}