import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from '../index.module.css';
import Translate, {translate} from '@docusaurus/Translate';
import useBaseUrl from '@docusaurus/useBaseUrl';
import buttonStyles from '../../css/buttons.css';

function SailorAnimationHeader() {
    const {siteConfig} = useDocusaurusContext();
    return (
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">Happy Sailor Animation</h1>
          <p className="hero__subtitle">Happy Sailor Animation Brought to You by Comp Labs. Credits for this Animation goes to <a href="https://codepen.io/tuckermassad/pen/XWVwzax" target="_blank">@tuckermassad</a> at CodePen.</p>
          {/* <div className={styles.buttons}>
            <Link className="button button--secondary button--lg" to="/docs/intro">Docusaurus Tutorial - 5min ⏱️</Link>
          </div> */}
        </div>
      </header>
    );
  }

export default function SailorAnimation() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Happy Sailor Animation • Special ✨`}
      description="Happy Sailor Animation by Comp Labs">
      <SailorAnimationHeader />
      <main>
      <iframe src="/html/sailor.html" title="Happy-Sailor Animation" width="100%" height="500" style="border:none;"></iframe>
      <a href="https://codepen.io/rudrasen2/pen/zYRxPBr" target="_blank" rel="noopener noreferrer" class="button button--info"><i class="fa-brands fa-codepen"></i> View on CodePen</a>
      </main>
    </Layout>
  );
}