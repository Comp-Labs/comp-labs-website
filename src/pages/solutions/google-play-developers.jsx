import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from '../index.module.css';

function PlayHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">App Submission Service for Google Play Developer Console</h1>
        <p className="hero__subtitle">Hello, Android App Developers! We have a very good news for you! We have announced a new feature on our website. This is called "App Submission Service for Google Play Developer Console". This will help you publish apps to Google Play free of Cost! Just fill in the form by clicking on the button below saying "Register Now!" and we'll get back to you shortly.</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            href="https://forms.gle/XM3VbGQD6uXqNr43A">
            Register Now!
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Play() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Google Play Developers`}
      description="">
      <PlayHeader />
      <main>
      </main>
    </Layout>
  );
}